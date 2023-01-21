
const hamburger= document.getElementById("hamburger");
const mobileMenu= document.getElementById("mobile-menu");

hamburger.addEventListener("click", function (e) {
    e.preventDefault();
console.log("hamburger");
mobileMenu.classList.toggle("hidden");

});

window.addEventListener("resize",hideMobileMenu);
function hideMobileMenu(){
    mobileMenu.classList.add("hidden");
}

//form validation

const form=document.getElementById("contact-form");
const yourName=document.getElementById("name");
const yourEmail=document.getElementById("email");
const yourMessage=document.getElementById("message");
const sendBtn=document.getElementById("send");
const nameError=document.getElementById("name-error");
const userMessage=document.getElementById("user-message");
let isValid = true;
sendBtn.addEventListener("click",function(e){
    e.preventDefault();
console.log("message");

if(yourName.value.trim()===""){  
yourName.placeholder="Please enter your name here!";
isValid = false;
} 
else{
    isValid=true;
}
if(yourEmail.value.trim()===""){  
    yourEmail.placeholder="Please enter your Email here!";
    isValid = false;
    } 
    else{
        isValid=true;
    }
    if(yourMessage.value.trim()===""){  
        yourMessage.placeholder="Please enter your message here!";
        isValid = false;
        } 
        else{
            isValid=true;
        }
        if(yourName.value==="" || yourEmail.value==="" || yourMessage.value===""){

            userMessage.value="All Required!";

        }
        

        else{
userMessage.value="Your message is sent!";
setTimeout(() => {
    form.clear();
}, 3000);
        }
});


var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});

