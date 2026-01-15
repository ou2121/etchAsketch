const main =document.querySelector("div")
let size=16;
function createGrid(size){
for(i=0;i<size;i++){
    for(j=0;j<size;j++){
    let container = document.createElement("div");
    container.style.cssText=`box-sizing:border-box;height:calc(100%/${size});width:calc(100%/${size});border:  2px solid black`;
    main.appendChild(container);
    container.addEventListener('mouseover',()=>{
    container.style.backgroundColor="black";
 })
    }
}}
createGrid(size);
const btn =document.createElement("button");
btn.textContent="new grid";
document.body.appendChild(btn);

btn.addEventListener("click",()=>{
let s=prompt("enter your new grid size");
main.innerHTML="";
createGrid(s);
})
