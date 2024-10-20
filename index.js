var skill=document.getElementsByClassName("Skill")
var intro=document.querySelector(".intro")
var dc=document.querySelector(".dc")
var im=document.querySelector(".im")
var contact=document.querySelector(".contact")
var skill0=document.querySelector(".Skill")
var s=document.querySelector(".skillset")
var home=document.querySelector(".Home")
home.style.color="cyan"
function ll() {
    intro.style.display="none"
    dc.style.display="none"
    im.style.display="none"
    contact.style.sisplay="none"
    skill0.style.color="cyan"
    home.style.color="white"
    s.style.display="block"
}
function h(){
    home.style.color="cyan"
    intro.style.display="block"
    dc.style.display="block"
    im.style.display="block"
    contact.style.sisplay="block"
    skill0.style.color="white"
    s.style.display="none"
}
var pj=document.querySelector(".p")
var proj=document.getElementById("proj")
var wq=0
function c(){
    const t=pj.cloneNode(true)
    proj.appendChild(t)
    pj.style.display="flex"
}
