import {Bubble} from "./Bubble.js"
class app{
    constructor(){
        this.bubble = document.getElementById('bubble');
        this.status = 0;
        this.bubble.addEventListener('click', () =>{
            if(this.status === 0){
                this.Bubble = new Bubble();
                this.status = 1;
            }else{
                this.Bubble.del();
                this.Bubble = new Bubble();
            }
        })
    }
}

window.onload = () =>{
    new app();
}