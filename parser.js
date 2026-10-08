class Parser {
    constructor() {
        this.commands = [];
    }

    transpile(code) {
        const lines = code.split('\n');
        let jsCode = '';
        let indentStack = [0];

        for (let i = 0; i < lines.length; i++) {
            let line = lines[i];
            if (line.trim() === '') continue;

            let indent = 0;
            const match = line.match(/^(\s+)/);
            if (match) indent = match[1].length;
            
            line = line.trim();

            while (indentStack.length > 1 && indent < indentStack[indentStack.length - 1]) {
                jsCode += '}\n';
                indentStack.pop();
            }

            if (line.startsWith('#')) continue;

            let defMatch = line.match(/^def\s+([a-zA-Z_]\w*)\s*\((.*?)\)\s*:/);
            if (defMatch) {
                jsCode += `function ${defMatch[1]}(${defMatch[2]}) {\n`;
                indentStack.push(indent + 4); 
                continue;
            }

            let forMatch = line.match(/^for\s+([a-zA-Z_]\w*)\s+in\s+range\((.*?)\)\s*:/);
            if (forMatch) {
                const iter = forMatch[1];
                const rangeArgs = forMatch[2];
                jsCode += `for(let ${iter} = 0; ${iter} < ${rangeArgs}; ${iter}++) {\n`;
                indentStack.push(indent + 4);
                continue;
            }

            let forInMatch = line.match(/^for\s+([a-zA-Z_]\w*)\s+in\s+(.*?)\s*:/);
            if (forInMatch && !forMatch) {
                jsCode += `for(let ${forInMatch[1]} of ${forInMatch[2]}) {\n`;
                indentStack.push(indent + 4);
                continue;
            }

            let ifMatch = line.match(/^if\s+(.*?)\s*:/);
            if (ifMatch) {
                let cond = ifMatch[1].replace(/\band\b/g, '&&').replace(/\bor\b/g, '||').replace(/\bnot\b/g, '!');
                jsCode += `if(${cond}) {\n`;
                indentStack.push(indent + 4);
                continue;
            }

            let elifMatch = line.match(/^elif\s+(.*?)\s*:/);
            if (elifMatch) {
                indentStack.pop();
                let cond = elifMatch[1].replace(/\band\b/g, '&&').replace(/\bor\b/g, '||').replace(/\bnot\b/g, '!');
                jsCode += `} else if(${cond}) {\n`;
                indentStack.push(indent + 4);
                continue;
            }

            let elseMatch = line.match(/^else\s*:/);
            if (elseMatch) {
                indentStack.pop();
                jsCode += `} else {\n`;
                indentStack.push(indent + 4);
                continue;
            }

            line = line.replace(/\bTrue\b/g, 'true').replace(/\bFalse\b/g, 'false');

            jsCode += line + ';\n';
        }

        while (indentStack.length > 1) {
            jsCode += '}\n';
            indentStack.pop();
        }

        return jsCode;
    }

    parse(code) {
        this.commands = [];
        const jsCode = this.transpile(code);
        
        // Contexto de execução com novas funções (input, int, str, float, type)
        const env = {
            frente: (val) => this.commands.push({type: 'frente', value: val}),
            direita: (val) => this.commands.push({type: 'direita', value: val}),
            esquerda: (val) => this.commands.push({type: 'esquerda', value: val}),
            cor: (val) => this.commands.push({type: 'cor', value: val}),
            print: (...args) => this.commands.push({type: 'print', value: args.join(' ')}),
            input: (msg) => prompt(msg || ''),
            int: (val) => {
                const num = parseInt(val);
                if (isNaN(num)) throw new Error(`Não foi possível converter '${val}' para int.`);
                return num;
            },
            float: (val) => {
                const num = parseFloat(val);
                if (isNaN(num)) throw new Error(`Não foi possível converter '${val}' para float.`);
                return num;
            },
            str: (val) => String(val),
            type: (val) => {
                if (typeof val === 'number') return Number.isInteger(val) ? "<class 'int'>" : "<class 'float'>";
                if (typeof val === 'string') return "<class 'str'>";
                if (typeof val === 'boolean') return "<class 'bool'>";
                return typeof val;
            }
        };

        try {
            const func = new Function('env', `
                with(env) {
                    ${jsCode}
                }
            `);
            func(env);
        } catch(e) {
            throw new Error("Erro Python: " + e.message);
        }

        return this.commands;
    }
}
