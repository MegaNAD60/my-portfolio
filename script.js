//CLASS AND ID SELECTOR
const navbar = document.querySelector('.navbar')
const hamburger = document.getElementsByClassName('hamburger')[0]
const navLink = document.getElementsByClassName('links')[0]
const navLi = document.getElementsByClassName('nav-link');
const sections = document.querySelectorAll('section')
const mybutton = document.getElementById("myBtn");
const element = document.body
const togglebtn = document.getElementsByClassName('modebtn')[0]
var prevScrollpos = window.pageYOffset;


//HAMBURGER ONCLICKED FUNCTION
hamburger.addEventListener('click', () => {
    toggleNav()
    toggleHamburger()
})


//LOOP THROUGH EACH li AND FUNCTION TO TOGGLE NAV AND HAMBURGER
for (var i=0; i<navLi.length; i++){
    navLi[i].addEventListener('click', () => {
        toggleNav()
        toggleHamburger()
    })
}


// FUNCTION TO TOGGLE NAVBAR
function toggleNav(){
    navLink.classList.toggle('links')
}

//FUNCTION TO TOGGLE HAMBURGER ICON
function toggleHamburger(){
    hamburger.querySelector('i').classList.toggle('fa-bars');
    hamburger.querySelector('i').classList.toggle('fa-times');
}

//WINDOW ONSCROLL FUNCTION
window.addEventListener('scroll', () => {
    scrollFunction()
    navbarFunction()
    navbarBackground()
    activeScrollFunction()
})


//TOP FUNCTION
function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
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


//FUNCTION TO UPDATE NAVBAR BACKGROUND COLOR
function navbarBackground(){
    if(window.scrollY > 20){
        navbar.classList.add('navbar-scroll')
    } else{
        navbar.classList.remove('navbar-scroll')
    }
}

// FUNCTION TO DISPLAY SCROLLTOP BUTTON
function scrollFunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        mybutton.style.display = "block"
    } else {
        mybutton.style.display = "none";
    }
}


//FUNCTION FOR ACTIVE NAV LINKS
function activeScrollFunction(){
    var scrollPosition = document.documentElement.scrollTop || document.body;

    sections.forEach(section => {
        if(scrollPosition >= section.offsetTop
            &&
            scrollPosition < section.offsetTop + section.offsetHeight){
            var currentId = section.attributes.id.value;
            removeActive();
            addActive(currentId)
        }
    })
}

//REMOVE ACTIVE CLASS FUNCTION
var removeActive = function (){
    document.querySelectorAll('nav a').forEach((li) => {
        li.classList.remove('active')
    })
}

//ADD ACTIVE CLASS FUNCTION
var addActive = function(id){
    console.log(id);
    var selector = `nav a[href="#${id}"]`;
    document.querySelector(selector).classList.add('active')
}


//DARK MODE FUNCTION
togglebtn.addEventListener('click', () => {
    togglebtn.querySelector('i').classList.toggle('fa-sun');
    togglebtn.querySelector('i').classList.toggle('fa-moon');
    element.classList.toggle('dark')

    var set;

    if(element.classList.contains('dark')){
        console.log('dark mode')
        set = "DARK"
    }else{
        console.log('light mode')
        set = "LIGHT"
    }

    localStorage.setItem('mode', JSON.stringify(set))
})

let GetMode = JSON.parse(localStorage.getItem('mode'))
if(GetMode === "DARK"){
    element.classList = 'dark'
}


//FUNCTION FOR MODE ICON
element.addEventListener('load', () => {
    if(element.classList.contains('dark')){
        togglebtn.querySelector('i').classList.add('fa-sun');
    }else{
        togglebtn.querySelector('i').classList.add('fa-moon');
    }
})


//AOS INITIALIZATION
AOS.init()


//TYPED SCRIPT INITIALIZATION
var typed = new Typed(".auto-input", {
    strings: ["Web Developer", "Technical Writer", "UI/UX Designer", "Graphic Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})

//TYPED SCRIPT INITIALIZATION MOBILE
var typed = new Typed(".auto-input-mobile", {
    strings: ["Web Developer", "Technical Writer", "UI/UX Designer", "Graphic Designer"],
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