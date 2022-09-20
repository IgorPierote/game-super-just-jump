const just = document.querySelector(".just");
const ghost = document.querySelector(".ghost");

const jump = () => {
    just.classList.add("jump");

    setTimeout(() => {
        just.classList.remove("jump")
    }, 500)
}

const loop = setInterval(() => {
    
    const ghostPosition = ghost.offsetLeft;
    
    if(ghostPosition <= 153 ){
        
        ghost.style.animation = "none";
        ghost.style.left = '${ghostPosition}px';
    
    }
}, 10);

document.addEventListener("keydown", jump);