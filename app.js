let openBtn = document.getElementById("open");
let closeBtn = document.getElementById("close");

openBtn.addEventListener("click", ()=> {
    document.getElementById("menu-group").classList.add = "slide-in"
    document.getElementById("menu-group").style.display = "block";
});


closeBtn.addEventListener("click", ()=>{

    document.getElementById("menu-group").classList.add = "slide-out";
    document.getElementById("menu-group").style.display = "none";
})

hoverEffect =()=>{
    if (MouseEvent){

        document.getElementById("arrow").style.backgroundColor = "transparent";
        document.getElementById("arrow").style.borderColor = "rgb(129, 94, 50)";

        document.getElementById("readBtn").style.color = "rgb(248, 243, 237)";
        document.getElementById("readBtn").style.backgroundColor = "rgb(129, 94, 50)";

        document.getElementById("arrowIcon").style.color = "rgb(129, 94, 50)";
    }
    

}

endHover =(e)=>{


    document.getElementById("arrow").style.backgroundColor = "rgb(129, 94, 50)";
    document.getElementById("arrow").style.borderColor = "rgb(129, 94, 50)";

    document.getElementById("readBtn").style.color = "rgb(0, 0, 0)";
    document.getElementById("readBtn").style.backgroundColor = "transparent";

    document.getElementById("arrowIcon").style.color = "rgb(248, 243, 237)";

}