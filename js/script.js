// active toggle

const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active');
}


const menu = document.querySelector('#menu')

document.addEventListener('click', function (e){
    if(!menu.contains(e.target) && !navbarNav.contains(e.target))
    {
        navbarNav.classList.remove('active');
    }
})

var buttonbg = document.getElementById("cta");

buttonbg.addEventListener('mouseenter', ColorChangeo);
buttonbg.addEventListener('mouseleave', buttonbgdefaultcolor);

var rando = 0;
var randoround = "normal";
var reddo = "--red";
var randocolors = ["red","orange","yellow","green","blue","indigo","violet"];

var defaultcolor = "#7b520f";
function ColorChangeo()
{
    // rando = Math.random() * 5 ;
    // randoround = parseInt(rando);
    // console.log(randoround);
    console.log(rando);
    buttonbg.style.backgroundColor = randocolors[rando];
    if(rando >= 6 && randoround == "normal")
    {
        rando - 1;
        randoround = "reverse"
    }
    else if(rando <= 0 && randoround == "reverse")
    {
        randoround = "normal";
    }

    if(randoround == "normal")
    {
        rando += 1;
    }
    else if(randoround == "reverse")
    {
        rando -= 1;
    }   
     
    
}

function buttonbgdefaultcolor()
{
    buttonbg.style.backgroundColor = defaultcolor;
   
}

