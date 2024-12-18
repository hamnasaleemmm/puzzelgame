

let order = ["1","2","3","4","5","6","7","8","9"];
let rows = 3;
let columns = 3;

window.onload = function(){


for(let r=1; r <=rows ; r++){
    for(let c=1 ; c <= columns ; c++ ){
        const tile = document.createElement("img");
        tile.id = r.toString()+ "-"+ c.toString();
        tile.src="assets/"+ order.shift() + "x.jpeg";
      
        tile.addEventListener("dragstart", dragStart);
        tile.addEventListener("dragover",dragOver); 
        tile.addEventListener("dragenter",dragEnter);
        tile.addEventListener("dragleave",dragLeave);
        tile.addEventListener("drop",dragDrop);
        tile.addEventListener("dragend",dragEnd);
        
document.getElementById("box").append(tile);
console.log(tile);
    }
}
}
function dragStart(){
    currenttile = this;
 
}
function dragOver(e){
    e.preventDefault();
}
function dragEnter(e){
    e.preventDefault();
}
function dragLeave(e){
    e.preventDefault();
}
function dragDrop(){
    othertile = this;
    // let othercords= othertile.id.split("-");
    // console.log(otherrcords[0]);
}
function dragEnd(){
    currentimg = currenttile.src;
    otherimg = othertile.src;

let currcords= currenttile.id.split("-");
let othercords= othertile.id.split("-");
let r = parseInt(currcords[0]);
let c = parseInt(currcords[1]);
let r2 = parseInt(othercords[0]);
let c2 = parseInt(othercords[1]);
let moveUp = r == r2+1 && c == c2;
let moveDown = c == c2 && r == r2-1;
let moveLeft = r == r2 && c == c2-1;
let moveRight = r == r2 && c == c2+1;
let adjacent =  moveUp  ||moveDown || moveLeft || moveRight;
if( adjacent){
    currenttile.src = otherimg;
othertile.src =  currentimg;

}
}