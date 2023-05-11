//AOS INITIALIZATION
    AOS.init()

//DARK MODE FUNCTION
/*        function modeFunction(){
        let element = document.body;
        element.classList.toggle("dark")
    }*/
    const element = document.body
    const togglebtn = document.getElementsByClassName('modebtn')[0]

    togglebtn.addEventListener('click', () => {
        element.classList.toggle('dark')
    })

/*TYPED SCRIPT INITIALIZATION*/
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

//SCROLL TOP FUNCTION
    let mybutton = document.getElementById("myBtn");//query select mybtn button to enable page scroll back to top
    var prevScrollpos = window.pageYOffset;

//WINDOW.ONSCROLL FUNCTION
    window.onscroll = function(){
        scrollFunction()//scrollFunction call
        navbarFunction()//navbarFunction call
    }

//FUNCTION FOR NAVIGATION BAR HIDE WHEN SCROLL DOWN AND TO SHOW WHEN SCROLL UP
    function navbarFunction(){
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos){
            document.getElementsByClassName('navbar')[0].style.top = "0"
        }else{
            document.getElementsByClassName('navbar')[0].style.top = "-50px";
        }
        prevScrollpos = currentScrollPos

    }

//TOP FUNCTION
    function topFunction(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

// FUNCTION TO ENABLE SCROLL TO TOP BUTTON TO SHOW WHEN SCROLL ABOVE 20PX AND INVISIBLE WHEN THE BODY IS BELOW 20PX
    function scrollFunction(){
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
            mybutton.style.display = "block"
        } else {
            mybutton.style.display = "none";
        }
    }

//NAVBAR FUNCTION
    const hamburger = document.getElementsByClassName('hamburger')[0]
    const navLink = document.getElementsByClassName('links')[0]
    const navLinks = document.getElementsByClassName('nav-link')

    hamburger.addEventListener('click', () => {
        navLink.classList.toggle('links')
    })

    navLinks.addEventListener('click', () => {
        console.log('working')
    })
