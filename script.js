

function Main(){
    var isMenuOn=false;
    let nav = document.getElementsByClassName("nav")[0];
    let overley=document.getElementById("overlay");
    let closer = document.createElement("div");

    document.getElementById("menu-icon").addEventListener("click",MenuOn);
    overley.addEventListener("click",MenuOff);
    function MenuOn(){
        if(isMenuOn==true)return;
        closer.id="closer";
        nav.appendChild(closer);
        overley.style.display='block';
        nav.style.display = 'block';
        closer.addEventListener("click",MenuOff);
        isMenuOn=true;
        console.log(isMenuOn)
    }
    
    function MenuOff(){
        if(isMenuOn==false)return;
        document.getElementById("closer").remove();
        nav.style.display = 'none';
        overley.style.display='none';
        isMenuOn=false;
    }
}




window.addEventListener("load",Main)