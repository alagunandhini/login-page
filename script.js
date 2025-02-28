//on page load 
window.onload = function (){
    const loggedUsers=JSON.parse(localStorage.getItem("loggedUsers"))
    if(loggedUsers){
        welcome(loggedUsers); // if already logged show welcome page
        console.log(loggedUsers)
    }
    else{
        showsignup() //else show sig up page
    }
}

//login page
function showsignup(){
    //hiding sign up page
    document.getElementById("sign-up").style.display="none";
    document.getElementById("sign-up-btn").style.display="none";
    document.getElementById("sign-up-text").style.display="none";
    document.getElementById("signupTitle").style.display="none";
    //displaying login page
    document.getElementById("sign-in").style.display="block";
    document.getElementById("sign-in-btn").style.display="block";
    document.getElementById("sign-in-text").style.display="block";
    document.getElementById("loginTitle").style.display="block"
    //hiding welcome page
    const div =document.getElementById("welcome")
    div.style.display="none";
    document.getElementById("username").value=""
    document.getElementById("email").value=""
    document.getElementById("pass").value=""
    document.getElementById("passconfirm").value=""
    document.getElementById("signupError").textContent=""


}
//signup page

function showlogin(){
    
    document.getElementById("sign-up").style.display="block";
    document.getElementById("sign-up-btn").style.display="block";
    document.getElementById("sign-up-text").style.display="block";
    document.getElementById("signupTitle").style.display="block";
    document.getElementById("sign-in").style.display="none";
    document.getElementById("sign-in-btn").style.display="none";
    document.getElementById("sign-in-text").style.display="none";
    document.getElementById("loginTitle").style.display="none"
    document.getElementById("ProfileTitle").style.display="none";
    document.getElementById("loginEmail").value="";
document.getElementById("loginPassword").value="";
    document.getElementById("loginError").textContent="";


}
// show welcome page
function welcome(user){
    document.getElementById("sign-up").style.display="none";
    document.getElementById("sign-up-btn").style.display="none";
    document.getElementById("sign-up-text").style.display="none";
    document.getElementById("sign-in").style.display="none";
    document.getElementById("sign-in-btn").style.display="none";
    document.getElementById("sign-in-text").style.display="none";
    document.getElementById("signupTitle").style.display="none";
       document.getElementById("loginTitle").style.display="none";
       document.getElementById("ProfileTitle").style.display="block";
    const text=document.getElementById("welcometext")
    const div =document.getElementById("welcome")
  
    const profileImage=document.getElementById("profileImg")
   
    //welcome +user name
    text.textContent=`welcome ${user.name}!`
    profileImage.src = user.avatar;
    div.style.display="block"; 
    document.getElementById("signupError").textContent="";

   
console.log(user)

}
//select all element required
const body=document.body;
const SignupBtn=document.getElementById("sign-up-btn")
const SigninBtn=document.getElementById("sign-in-btn")
const logoutBtn=document.getElementById("logout")
const theme=document.getElementById("themeToggle")
//images
const image =document.getElementById("img-card")
const purpleImg="./Code review-amico (1).png"
const pinkImg="./Code review-amico.png"
//default theme color
body.classList.toggle("purple-theme")
SignupBtn.classList.toggle("purple-theme")
SigninBtn.classList.toggle("purple-theme")
logoutBtn.classList.toggle("purple-theme")
const profileImage=document.getElementById("profileImg")
profileImage.style.borderColor="plum"

theme.classList.toggle("purple-theme")
image.src=purpleImg 



//theme change
theme.addEventListener("click",function(){
    body.classList.toggle("pink-theme")
    SignupBtn.classList.toggle("pink-theme")
    SigninBtn.classList.toggle("pink-theme")
    logoutBtn.classList.toggle("pink-theme")
    theme.classList.toggle("pink-theme")
    //theme for profile border
    profileImage.style.borderColor=profileImage.style.borderColor==="plum"?"pink":"plum"
    //theme image replace
if(body.classList.contains("pink-theme")){
    image.src=pinkImg
}
else{
    image.src=purpleImg 
}




});


//sign up function
function signup(){
    const name =document.getElementById("username").value.trim();
    const email =document.getElementById("email").value.trim();
    const password =document.getElementById("pass").value.trim();
    const confirmpassword =document.getElementById("passconfirm").value.trim();
    const error =document.getElementById("signupError")

    if(!name||!email||!password||!confirmpassword){
        error.textContent="Pls Enter all fields!";
        // alert("pls fill all fields!")
        return;
    }
    //email validation
    if(!email.endsWith("@gmail.com")){
        error.textContent="Enter a valid Email id!";
        return;
    }
    if(password.length<6){
        error.textContent="password must be atleast 6 digits";
        // alert("password must be atleast 6 digits ")
        return;
    }
 if(password!==confirmpassword){
    error.textContent="passwords do not match";
        // alert("passwords do not match")
        return; 
    }
   //to check email is already registered
let user=JSON.parse(localStorage.getItem('user'))||[];
console.log(user)
if(user.some(user=>user.email===email)){
    error.textContent="Email already registered!";
    return;

}
const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=eae6eb&color=ffffff`;








user.push({name,email,password, avatar: avatarUrl});
console.log(user)
localStorage.setItem('user',JSON.stringify(user)) //it stores the users data in local storage 
alert("sign up succesfully pls login!")
showsignup();
document.getElementById("loginEmail").value=email;
document.getElementById("loginPassword").value=password;
}
//login function
function login(){
    const email =document.getElementById("loginEmail").value.trim();
    const password =document.getElementById("loginPassword").value.trim();
    const error =document.getElementById("loginError")
    let user=JSON.parse(localStorage.getItem('user'))||[];
    const users=user.find(u=>u.email===email&&u.password===password)
    if(!email||!password){
        error.textContent="Pls Enter all fields!";
        return;
    }

    if(!email.endsWith("@gmail.com")){
        error.textContent="Enter a valid Email id!";
        return;
    }
    console.log(users)
    if(users){
        localStorage.setItem('loggedUsers',JSON.stringify(users))
        welcome(users);
    }
    else{
        error.textContent="Invalid Username or Password"
    }
   
    
  
    
}
//logout function 
function logout(){
    localStorage.removeItem("loggedUsers")
     //hiding welcome page
     const div =document.getElementById("welcome")
     div.style.display="none";
     document.getElementById("username").value=""
     document.getElementById("email").value=""
     document.getElementById("pass").value=""
     document.getElementById("passconfirm").value=""
     document.getElementById("loginEmail").value=""
     document.getElementById("loginPassword").value=""



    showlogin()
}
