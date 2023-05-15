//GLOBAL QUERY SELECTORS
const hamburger = document.getElementsByClassName('hamburger')[0]
const navLink = document.getElementsByClassName('links')[0]
const navLi = document.getElementsByClassName('nav-link')[0];
const sections = document.querySelectorAll('section')
let mybutton = document.getElementById("myBtn");
var prevScrollpos = window.pageYOffset;

//onclick function when hamburger icon is click
hamburger.onclick = function(){
    toggleNav()
    toggleHamburger()
}

// FUNCTION TO TOGGLE NAVBAR
function toggleNav(){
    navLink.classList.toggle('links')
}

function toggleHamburger(){
    hamburger.querySelector('i').classList.toggle('fa-bars');
    hamburger.querySelector('i').classList.toggle('fa-times');
}

//WINDOW.ONSCROLL FUNCTION WHEN WEB PAGE IS SCROLLED
window.onscroll = function(){
    scrollFunction()//scrollFunction call
    navbarFunction()//navbarFunction call
    activeScrollFunction()//active function call
}


//TOP FUNCTION
function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


//FUNCTION FOR NAVIGATION BAR TO HIDE WHEN SCROLL DOWN AND TO SHOW WHEN SCROLL UP
function navbarFunction(){
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos){
        document.getElementsByClassName('navbar')[0].style.top = "0"
    }else{
        document.getElementsByClassName('navbar')[0].style.top = "-60px";
    }
    prevScrollpos = currentScrollPos

}


// FUNCTION TO ENABLE SCROLL TO TOP BUTTON TO SHOW WHEN SCROLL ABOVE 20PX AND INVISIBLE WHEN THE BODY IS BELOW 20PX
function scrollFunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        mybutton.style.display = "block"
    } else {
        mybutton.style.display = "none";
    }
}


//FUNCTION FOR ACTIVE NAV LINKS
function activeScrollFunction(){
    let current = '';
    sections.forEach(section => {
        let sectionTop = section.offsetTop;
        if(scrollY >= sectionTop){
            current = section.getAttribute('id')
        }
    })
    navLi.forEach(li => {
        li.classList.remove('active')
        document.querySelector('nav ul li a[href*= '+ current +']').classList.add('active');
    })
}


//DARK MODE FUNCTION
    const element = document.body
    const togglebtn = document.getElementsByClassName('modebtn')[0]

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
    strings: ["Web Developer", "UI/UX Designer", "Graphic Designer"],
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
