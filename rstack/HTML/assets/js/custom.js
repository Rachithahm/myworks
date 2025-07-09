/*-----------------------------------------------------------
* Template Name    : Inky
* Author           : gtomdesign
* Version          : 1.0
* Created          : June 2020
* File Description : Main Js file of the template
*------------------------------------------------------------
*/

! function($) {
    "use strict";

    /* ---------------------------------------------- /*
    * Preloader
    /* ---------------------------------------------- */

    $(window).on('load', function() {
        $('.preloader').fadeOut();

        setTimeout(function(){
            $('.intro-section').addClass('animate-now')
        }, 500);


        const animtextLine = Splitting({ 
          target: $(".ezd-animtext.line-up,.ezd-animtext.line-left,.ezd-animtext.word-up,.ezd-animtext.word-left"),
          by: 'lines'
        });
    });
        
    // });

    /* ---------------------------------------------- /*
    * Text Animate 
    /* ---------------------------------------------- */


    const section = $('.section');
    let currentPixel = window.pageYOffset;

    const looper = function () {
      const newPixel = window.pageYOffset;
      const diff = newPixel - currentPixel;
      const speed = diff * 0.01;

      section.css('transform', `skewY(${speed}deg)`);


      currentPixel = newPixel;

      requestAnimationFrame(looper);
    };

    looper();


    /* ---------------------------------------------- /*
    * Section Scroll - Navbar
    /* ---------------------------------------------- */
    
    $('.nav-list a, .intro-section a').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 0
        }, 2000, 'easeInOutExpo');
        $("body").removeClass("nav-active")
        event.preventDefault();
    });

    $('.navbar-toggler').on('click', function(){
        $('.navbar').toggleClass('active');
        $(".ham").toggleClass('active');
    });

    /* ---------------------------------------------- /*
    * Scroll Spy - init
    /* ---------------------------------------------- */

    // $(".navbar-collapse").scrollspy();

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })



    /* ---------------------------------------------- /*
    * Initialize shuffle plugin
    /* ---------------------------------------------- */

    $(window).on('load', function () {


        var $portfolioContainer = $('.filter-container');

        $('#filter a').on('click', function (e) {
            e.preventDefault();

            $('#filter a').removeClass('active');
            $(this).addClass('active');

            var group = $(this).attr('data-group');
            var groupName = $(this).attr('data-group');

            $portfolioContainer.shuffle('shuffle', groupName );
        });

    });


    /* ---------------------------------------------- /*
    * Initialize imagesLoaded.js
    /* ---------------------------------------------- */

    var ImageDemo = (function($, imagesLoaded) {
    var $projectsContainer = $('.filter-container'),
        $imgs = $projectsContainer.find('img'),
        imgLoad,

    init = function() {
        imgLoad = new imagesLoaded($imgs.get());
        imgLoad.on('always', onAllImagesFinished);
    },

    onAllImagesFinished = function(instance) {
        // Adds visibility: visible;
        $projectsContainer.addClass('images-loaded');

        // Initialize shuffle
        $projectsContainer.shuffle({
            itemSelector: '.portfolio-item',
            delimeter: ' '
        });

    };

    return {
        init: init
    };

    }( jQuery, window.imagesLoaded ));

    $(document).ready(function() {
        ImageDemo.init();
    });

    /* ---------------------------------------------- /*
    * Magnific Popup - Init
    /* ---------------------------------------------- */

    $('.simple-ajax-popup').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        }
    });


    /* ---------------------------------------------- /*
    * owlCarousel - Init
    /* ---------------------------------------------- */

    $("#owl-testimony").owlCarousel({
        loop:true,
        items:1,
        nav:false,
        dots: true
    });

    $('#owl-blog').owlCarousel({
        loop:true,
        items:2,
        nav:true,
        margin: 30,
        autoWidth:true,
        dots: false
    });

    /* ---------------------------------------------- /*
    * Custom Cursor Follower - init
    /* ---------------------------------------------- */
    
    var cursor   = $(".cursor"),
        follower = $(".cursor-follower");

    var posX = 0,
        posY = 0;

    var mouseX = 0,
        mouseY = 0;

    TweenMax.to({}, 0.016, {
      repeat: -1,
      onRepeat: function() {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

        TweenMax.set(follower, {
            css: {
            left: posX - 12,
            top: posY - 12
            }
        });

        TweenMax.set(cursor, {
            css: {
            left: mouseX,
            top: mouseY
            }
        });
      }
    });

    $(document).on("mousemove", function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    $("a, h1").on("mouseenter", function() {
        if($(this).hasClass('text-inverse')){
            cursor.addClass("active-inverse");
            follower.addClass("active-inverse"); 
        } else {
            cursor.addClass("active");
            follower.addClass("active"); 
        }
    });

    $("a, h1").on("mouseleave", function() {
        if($(this).hasClass('text-inverse')){
            cursor.removeClass("active-inverse");
            follower.removeClass("active-inverse");
        } else {
            cursor.removeClass("active");
            follower.removeClass("active");
        }
        
    });

    $(".navbar-toggler").on("mouseleave", function() {
        cursor.removeClass("active");
        follower.removeClass("active");
    });

    

    /* ---------------------------------------------- /*
    * mouse follower remove area 
    /* ---------------------------------------------- */

    console.clear();

    $(".navbar-toggler").on("mouseleave", function() {
        
    });

    const app = (() => {
      let body;
      let menu;
      let menuItems;

      const init = () => {
        body = document.querySelector('body');
        menu = document.querySelector('.menu-icon');
        menuItems = document.querySelectorAll('.nav-link');

        applyListeners();
      };

      const applyListeners = () => {
        menu.addEventListener('click', () => toggleClass(body, 'nav-active'));
      };

      const toggleClass = (element, stringClass) => {
        if (element.classList.contains(stringClass))
        element.classList.remove(stringClass);else

        element.classList.add(stringClass);
      };

      init();
    })();


}(window.jQuery);

