function one()
{
    let two=document.querySelector(".two");
    two.style.filter="blur(4px)";
    let three=document.querySelector(".three");
    three.style.filter="blur(4px)";

}
function one1()
{
    let two=document.querySelector(".two");
    two.style.filter="none";
    let three=document.querySelector(".three");
    three.style.filter="none";
}
function two()
{
    let one=document.querySelector(".one");
    one.style.filter="blur(4px)";
    let three=document.querySelector(".three");
    three.style.filter="blur(4px)";
    
}
function two2()
{
    let one=document.querySelector(".one");
    one.style.filter="none";
    let three=document.querySelector(".three");
    three.style.filter="none";
    
}
const three=()=>
{
    let two=document.querySelector(".two");
    two.style.filter="blur(4px)";
    let one=document.querySelector(".one");
    one.style.filter="blur(4px)";

}
const three3=()=>
{
    let two=document.querySelector(".two");
    two.style.filter="none";
    let one=document.querySelector(".one");
    one.style.filter="none";
}

let explore=document.querySelector(".explore");
explore.onclick=()=>
{
    window.location.href="explore.html";
    // alert("explore here");
}
