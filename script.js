document.getElementById("move").addEventListener("click",function(){
    
    document.getElementById("sign-up").style.display="none";
    document.getElementById("sign-up-btn").style.display="none";
    document.getElementById("sign-up-text").style.display="none";
    document.getElementById("sign-in").style.display="block";
    document.getElementById("sign-in-btn").style.display="block";
    document.getElementById("sign-in-text").style.display="block";


})
document.getElementById("move2").addEventListener("click",function(){
    
    document.getElementById("sign-up").style.display="block";
    document.getElementById("sign-up-btn").style.display="block";
    document.getElementById("sign-up-text").style.display="block";
    document.getElementById("sign-in").style.display="none";
    document.getElementById("sign-in-btn").style.display="none";
    document.getElementById("sign-in-text").style.display="none";



})
const body=document.body;
const SignupBtn=document.getElementById("sign-up-btn")
const SigninBtn=document.getElementById("sign-in-btn")
const theme=document.getElementById("themeToggle")
const image =document.getElementById("img-card")
const purpleImg="./Code review-amico (1).png"
const pinkImg="./Code review-amico.png"

body.classList.toggle("purple-theme")
SignupBtn.classList.toggle("purple-theme")
SigninBtn.classList.toggle("purple-theme")
theme.classList.toggle("purple-theme")
image.src=purpleImg



//theme change
theme.addEventListener("click",function(){
    body.classList.toggle("pink-theme")
    SignupBtn.classList.toggle("pink-theme")
    SigninBtn.classList.toggle("pink-theme")
    theme.classList.toggle("pink-theme")
    
if(body.classList.contains("pink-theme")){
    image.src=pinkImg
}
else{
    image.src=purpleImg 
}




});

