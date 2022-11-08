(function ($) {
	"use strict";

    jQuery(document).ready(function($){


    
        
        
         // Script for OffCanvas Menu Activation
        $(document).ready(function () {
            $('.header__bar').on('click', function () {
                $('.offcanva, .overlay').addClass('active');
            })

            $('.cross').on('click', function () {
                $('.offcanva, .overlay').removeClass('active');
            })

            $('.overlay').on('click', function () {
                $('.offcanva, .overlay').removeClass('active');
            })
        })
        

        
        
 var btn = $('.bttn');

        $(window).scroll(function() {
            if ($(window).scrollTop() > 300) {
                btn.addClass('show');
            } else {
                btn.removeClass('show');
            }
        });

        btn.on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, '300');
        });
        
        
        
        
        
        
        
        
        
        
        
        


    });


    jQuery(window).load(function(){
        const btnBurger = document.querySelector("._btn_burger");
        const offCanva = document.querySelector(".offCanva");
        const body = document.body;
        
        let menuOpen = false;
        
        btnBurger.addEventListener("click", () => {
            if(!menuOpen) {
                // >> Add class
                offCanva.classList.add("active");
                btnBurger.classList.add("active");
                body.classList.add("_document_locked");
        
                gsap.to("._offCanvaLeftItem", {
                    y: "0",
                    duration: 1.5,
                    ease: "expo.inOut",
                    position: "fixed",
                })
        
                gsap.to(".offCanvaLeft", {
                    // y: "0",
                    height: "100%",
                    duration: 1.5,
                    delay: 0.1,
                    ease: "expo.inOut",
                })
        
                gsap.to(".offCanvaRight", {
                    // y: 0,
                    height: "100%",
                    duration: 1.5,
                    ease: "expo.inOut"
                })
        
        
        
                gsap.to(".link_1", {
                    y: 0,
                    delay: .6,
                    ease: "none"
                })
        
                gsap.to(".link_2", {
                    y: 0,
                    delay: .7,
                    ease: "none"
                })
        
                gsap.to(".link_3", {
                    y: 0,
                    delay: .8,
                    ease: "none"
                })
        
                gsap.to(".link_4", {
                    y: 0,
                    delay: .9,
                    ease: "none"
                })
        
                menuOpen = true;
            } else {
                // >> Remove offCanva Active calss
                offCanva.classList.remove("active");
                btnBurger.classList.remove("active");
                body.classList.remove("_document_locked");
        
                gsap.to("._offCanvaLeftItem", {
                    y: "-110vh",
                    duration: 1.5,
                    delay: 0.1,
                    ease: "expo.inOut",
                    position: "fixed",
                })
        
                gsap.to(".offCanvaLeft", {
                    // y: "-110vh",
                    height: "0%",
                    delay: 0.1,
                    duration: 1.5,
                    ease: "expo.inOut",
                })
        
                gsap.to(".offCanvaRight", {
                    // y: "-100vh",
                    height: "0%",
                    duration: 1.5,
                    ease: "expo.inOut"
                })
        
        
                gsap.to(".link_1", {
                    y: 65,
                    delay: .6,
                    ease: "none"
                })
        
                gsap.to(".link_2", {
                    y: 65,
                    delay: .7,
                    ease: "none"
                })
        
                gsap.to(".link_3", {
                    y: 65,
                    delay: .8,
                    ease: "none"
                })
        
                gsap.to(".link_4", {
                    y: 65,
                    delay: .9,
                    ease: "none"
                })
        
                menuOpen = false;
            }
        })
        

    });


}(jQuery));	