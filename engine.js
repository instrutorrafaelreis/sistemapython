class Engine {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        
        this.resetState();
        this.commandQueue = [];
        this.isAnimating = false;
        
        this.onFinish = null; 
        this.onPrint = null; 
        this.pathPoints = []; 
    }

    resetState() {
        this.x = this.width / 2;
        this.y = this.height / 2;
        this.angle = -90; 
        this.color = '#3fb950'; 
        
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.pathPoints = [{x: this.x, y: this.y}];
        this.drawAvatar();
    }

    drawAvatar() {
        this.ctx.save();
        this.ctx.translate(this.x, this.y);
        this.ctx.rotate((this.angle * Math.PI) / 180);
        
        this.ctx.beginPath();
        this.ctx.moveTo(10, 0);
        this.ctx.lineTo(-5, 5);
        this.ctx.lineTo(-5, -5);
        this.ctx.closePath();
        
        this.ctx.fillStyle = '#58a6ff';
        this.ctx.shadowColor = '#58a6ff';
        this.ctx.shadowBlur = 10;
        this.ctx.fill();
        
        this.ctx.restore();
    }

    execute(commands, onFinish, onPrint) {
        if (this.isAnimating) return;
        this.resetState();
        this.commandQueue = [...commands];
        this.onFinish = onFinish;
        this.onPrint = onPrint;
        this.isAnimating = true;
        
        this.step();
    }

    step() {
        if (this.commandQueue.length === 0) {
            this.isAnimating = false;
            if (this.onFinish) this.onFinish(this.pathPoints);
            return;
        }

        const cmd = this.commandQueue.shift();
        
        if (cmd.type === 'direita') {
            this.angle += cmd.value;
            this.animateTurn(() => this.step());
        } else if (cmd.type === 'esquerda') {
            this.angle -= cmd.value;
            this.animateTurn(() => this.step());
        } else if (cmd.type === 'cor') {
            this.color = cmd.value;
            this.step(); 
        } else if (cmd.type === 'print') {
            if(this.onPrint) this.onPrint(cmd.value);
            this.step(); 
        } else if (cmd.type === 'frente') {
            this.animateMove(cmd.value, () => this.step());
        }
    }

    animateTurn(callback) {
        this.redraw();
        setTimeout(callback, 50);
    }

    animateMove(distance, callback) {
        const startX = this.x;
        const startY = this.y;
        
        const rad = (this.angle * Math.PI) / 180;
        const endX = startX + distance * Math.cos(rad);
        const endY = startY + distance * Math.sin(rad);
        
        const duration = 250; 
        const startTime = performance.now();
        
        const animate = (time) => {
            let progress = (time - startTime) / duration;
            if (progress > 1) progress = 1;
            
            this.x = startX + (endX - startX) * progress;
            this.y = startY + (endY - startY) * progress;
            
            this.redraw();
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                this.pathPoints.push({x: this.x, y: this.y});
                callback();
            }
        };
        
        requestAnimationFrame(animate);
    }

    redraw() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        
        if (this.pathPoints.length > 0) {
            this.ctx.beginPath();
            this.ctx.moveTo(this.pathPoints[0].x, this.pathPoints[0].y);
            
            for (let i = 1; i < this.pathPoints.length; i++) {
                this.ctx.lineTo(this.pathPoints[i].x, this.pathPoints[i].y);
            }
            this.ctx.lineTo(this.x, this.y);
            
            this.ctx.strokeStyle = this.color;
            this.ctx.lineWidth = 2;
            this.ctx.shadowColor = this.color;
            this.ctx.shadowBlur = 5;
            this.ctx.stroke();
            this.ctx.shadowBlur = 0;
        }
        
        this.drawAvatar();
    }
}
