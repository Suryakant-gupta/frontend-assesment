const menu = document.querySelector("nav .icons i:last-child");
const list = document.querySelector(".list");
const body = document.querySelector("body");

let counter = 0;

menu.addEventListener("click", ()=>{
if (counter % 2 === 0) {
        list.style.display = "block";
        counter ++;
    }else{
        list.style.display = "none";
        counter++;
    }
})



    
    


