$( document ).ready(function() {
    $('.js-header__link').click( function(){
        $('.js-header__link').removeClass('header__link_active');
        var scroll_el = $(this).attr('href');
            if ($(scroll_el).length != 0) { 
                $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 200);
                $(this).addClass('header__link_active');
            }else{
                $('html, body').animate({ scrollBottom: $(scroll_el).offset().bottom }, 200);   
            }
            return false;
        });

    $(window).scroll(function(){
        var sections = $('section');
        sections.each(function(i,el){
            var top  = $(el).offset().top-100;
            var bottom = top +$(el).height();
            var scroll = $(window).scrollTop();
            var id = $(el).attr('id');
           if( scroll > top && scroll < bottom){
               $('a.header__link_active').removeClass('header__link_active');
               $('a[href="#'+id+'"]').addClass('header__link_active');
           }
           if(scroll == 0){
            $('a.header__link_active').removeClass('header__link_active');
           }
        })
    });
    $('.js-header__buttn-menu').click(function(){
        $('.js-header__buttn-menu').toggleClass('js-header__buttn-menu_active');
        $('.header__mobil-menu').slideToggle();
    });     
});
document.addEventListener('DOMContentLoaded', function(){
    //Header slider
    var slides = document.querySelectorAll('#header__slider .header__slide');
    var currentSlide = 0;
    var slideInterval = setInterval(nextSlide,6000); // Slide time
    function nextSlide(){
        slides[currentSlide].className = 'header__slide';
        currentSlide = (currentSlide+1)%slides.length;
        slides[currentSlide].className = 'header__slide header__slider_active';
    }
    // Button slim
    var headerButton = document.getElementById('js-header__button');
    headerButton.onmouseover = function(e){
       headerButton.innerHTML = 'Похудеть за неделю';
    }
    headerButton.onmouseout = function(e){
        headerButton.innerHTML = 'Похудеть';
    }
    //Fixed menu
    window.onscroll = function() {
        var headerMenu = document.getElementById('js-header__menu');
        if( document.documentElement.scrollTop >= 200){
            headerMenu.classList.add('header__menu_fixed');
        }else{
            headerMenu.classList.remove('header__menu_fixed');
        }
    }
    //Comment slider
    var slidesNumber = document.querySelectorAll('#comment__slides .comment__slide');
    var slide = 0;
    
    function slideNext(){
        goToSlide(slide+1);
    }

    function SlidePrevious(){
        goToSlide(slide-1);
    }

    function goToSlide(n){
        slidesNumber[slide].className = 'comment__slide';
        slide = (n+slidesNumber.length)%slidesNumber.length;
        slidesNumber[slide].className = 'comment__slide comment__slide_showing';
    }
    var next = document.getElementById('js-comment__button_left');
    var previous = document.getElementById('js-comment__button_right');

    next.onclick = function(){
        slideNext()

    };
    previous.onclick = function(){
        SlidePrevious()

    };

});
