const context=document.querySelector(".context-menu");

function menu(show=true){
    context.style.display=show ? "block" : "none";
}

window.addEventListener('contextmenu',(e)=>{
    e.preventDefault();
    menu();
    // console.log(e.y,e.x);
    const topPx=e.y+"px";
    const leftPx=e.x+"px"
    context.style.top=topPx;
    context.style.left=leftPx;
})

window.addEventListener('click',()=>{
    menu(false);
})