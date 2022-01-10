export class Bubble{
    constructor(){
        this.x = prompt('x의 개수');
        this.y = prompt('y의 개수');
        this.Width = document.body.clientWidth;
        this.Height = document.body.clientHeight;
        this.radius = (this.Width / this.x) > (this.Height / this.y) ? (this.Height / this.y) : (this.Width / this.x)
        this.startX = ((this.Width - (this.x * this.radius)) / 2);
        this.startY = ((this.Height - (this.y * this.radius)) / 2);
        this.makebubble();
    }
    
    makebubble(){
        for(let i = 0; i < this.y; i++){
            for(let j = 0; j < this.x; j++){
                this.btn = document.createElement('button');
                this.btn = document.body.appendChild(this.btn);
                this.btn.setAttribute("class", "bu");
                this.btn.style.position = "absolute";
                this.btn.style.top = i * this.radius + this.startY + "px";
                this.btn.style.left = j * this.radius + this.startX + "px";
                this.btn.style.width = this.radius+ "px";
                this.btn.style.height = this.radius+ "px";
                this.btn.style.borderRadius = "50%";
            }
        }
    }
    del(){
        this.element = document.body.getElementsByClassName("bu");
        for(let i = this.x * this.y -1 ; i >=0; i--){
            this.element[i].remove(this);
        }
    }


}