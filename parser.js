class Parser {
    constructor() {
        this.commands = [];
    }

    transpile(code) {
        const lines = code.split('\n');
        let jsCode = '';
        let stack = [];

        for (let i = 0; i < lines.length; i++) {
            let rawLine = lines[i];
            if (rawLine.trim() === '') continue;

            let indent = 0;
            const match = rawLine.match(/^(\s+)/);
            if (match) indent = match[1].length;
            let line = rawLine.trim();
            if (line.startsWith('#')) continue;

            // Check if this line is elif or else at current level
            let isElif = /^elif\s+(.*?)\s*:/.test(line);
            let isElse = /^else\s*:/.test(line);

            // Pop blocks that are deeper than current indent
            while (stack.length > 0 && stack[stack.length - 1].indent > indent) {
                jsCode += '}\n';
                stack.pop();
            }

            if (isElif) {
                let m = line.match(/^elif\s+(.*?)\s*:/);
                let cond = m[1].replace(/\band\b/g, '&&').replace(/\bor\b/g, '||').replace(/\bnot\b/g, '!');
                if (stack.length > 0 && stack[stack.length - 1].indent === indent) {
                    jsCode += '} else if (' + cond + ') {\n';
                    stack[stack.length - 1].type = 'elif';
                } else {
                    jsCode += 'if (' + cond + ') {\n';
                    stack.push({ indent: indent, type: 'if' });
                }
                continue;
            }

            if (isElse) {
                if (stack.length > 0 && stack[stack.length - 1].indent === indent) {
                    jsCode += '} else {\n';
                    stack[stack.length - 1].type = 'else';
                } else {
                    jsCode += '{\n';
                    stack.push({ indent: indent, type: 'else' });
                }
                continue;
            }

            // For any other line, if stack top has same indent or greater, close it!
            while (stack.length > 0 && stack[stack.length - 1].indent >= indent) {
                jsCode += '}\n';
                stack.pop();
            }

            // def
            let defMatch = line.match(/^def\s+([a-zA-Z_]\w*)\s*\((.*?)\)\s*:/);
            if (defMatch) {
                jsCode += 'function ' + defMatch[1] + '(' + defMatch[2] + ') {\n';
                stack.push({ indent: indent, type: 'def' });
                continue;
            }

            // for range
            let forMatch = line.match(/^for\s+([a-zA-Z_]\w*)\s+in\s+range\((.*?)\)\s*:/);
            if (forMatch) {
                const iter = forMatch[1];
                const rangeArgs = forMatch[2];
                jsCode += 'for (let ' + iter + ' = 0; ' + iter + ' < ' + rangeArgs + '; ' + iter + '++) {\n';
                stack.push({ indent: indent, type: 'for' });
                continue;
            }

            // for in
            let forInMatch = line.match(/^for\s+([a-zA-Z_]\w*)\s+in\s+(.*?)\s*:/);
            if (forInMatch && !forMatch) {
                jsCode += 'for (let ' + forInMatch[1] + ' of ' + forInMatch[2] + ') {\n';
                stack.push({ indent: indent, type: 'for' });
                continue;
            }

            // if
            let ifMatch = line.match(/^if\s+(.*?)\s*:/);
            if (ifMatch) {
                let cond = ifMatch[1].replace(/\band\b/g, '&&').replace(/\bor\b/g, '||').replace(/\bnot\b/g, '!');
                jsCode += 'if (' + cond + ') {\n';
                stack.push({ indent: indent, type: 'if' });
                continue;
            }

            line = line.replace(/\bTrue\b/g, 'true').replace(/\bFalse\b/g, 'false');
            jsCode += line + ';\n';
        }

        while (stack.length > 0) {
            jsCode += '}\n';
            stack.pop();
        }
        return jsCode;
    }

    parse(code) {
        this.commands = [];
        const jsCode = this.transpile(code);
        
        // Contexto de execução com funções do ambiente
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
