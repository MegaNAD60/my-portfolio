//CLASS AND ID SELECTOR
const navbar = document.querySelector('.navbar')
const hamburger = document.getElementsByClassName('hamburger')[0]
const navLink = document.getElementsByClassName('links')[0]
const navLi = document.getElementsByClassName('nav-link');
const sections = document.querySelectorAll('section')
const mybutton = document.getElementById("myBtn");//scroll top btn
const element = document.body
const togglebtn = document.getElementsByClassName('modebtn')[0]
var prevScrollpos = window.pageYOffset;




//WINDOW ONSCROLL FUNCTION
window.addEventListener('scroll', () => {
    scrollFunction()
    navbarFunction()
    navbarBackground()
})


//FUNCTION TO SCROLL TOP
function topFunction(){
//    document.body.scrollTop = 0;
//    document.documentElement.scrollTop = 0;
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}


//NAVIGATION BAR FUNCTION WHEN SCROLLED
function navbarFunction(){
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos){
        navbar.style.top = "0"
    }else{
        navbar.style.top = "-60px";
    }
    prevScrollpos = currentScrollPos

}


// FUNCTION TO DISPLAY SCROLLTOP BUTTON
function scrollFunction(){
    if (window.scrollY > 20){
        mybutton.style.display = "inline"
    } else {
        mybutton.style.display = "none";
    }
}




//ANIMATIONS

//AOS INITIALIZATION
AOS.init()


//TYPED SCRIPT INITIALIZATION
var typed = new Typed(".auto-input", {
    strings: ["a Web Developer", "an Automation Expert", "a Technical Writer", "a UI/UX Designer", "a Graphic Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})

//COROUSEL SLIDE
let slider = tns({
    container : ".slides",
    "slideBy" : "1",
    "speed" : 900,
    "nav" : false,
    autoplay : true,
    controls : false,
    autoplayButtonOutput : false,
    responsive:{
        1600: {
            items : 5,
            gutter : 20
        },
        1024 : {
            items : 4,
            gutter : 20
        },
        768:{
            items : 3,
            gutter : 20
        },
        200:{
            items : 2,
            gutter : 7
        }
    }
})

