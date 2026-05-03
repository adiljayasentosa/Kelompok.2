const menuBtn =
document.getElementById("menu-btn");

const menuContent =
document.querySelector(".menu-content");

menuBtn.onclick = () => {

    if(menuContent.style.display === "flex"){

        menuContent.style.display = "none";

    }else{

        menuContent.style.display = "flex";

    }

}