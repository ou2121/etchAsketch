const main =document.querySelector("div")
for(i=0;i<16;i++){
    for(j=0;j<16;j++){
    const container = document.createElement("div");
   
    container.style.cssText="box-sizing:border-box;height:calc(100%/16);width:calc(100%/16);border:  2px solid black";

    main.appendChild(container);
    }
}