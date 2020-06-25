var titleButton = document.getElementsByClassName("title");


var titlePage = ["homepage.html","channel.html","dynamic.html","memberbuy.html","search.html","game.html","messages.html","personal.html","settings.html"];

//var pageStack = [];


for (let i = 0; i < titleButton.length; i++) {
     titleButton[i].addEventListener("click",()=>{
         document.querySelector(".title.active").classList.remove("active");
         titleButton[i].classList.add("active");
         document.querySelector(".grid-right").innerHTML = '<object data="pages/'+ titlePage[i] +'"></object>';
     })
    
}