import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
  const menuBody = document.querySelector('.menu__body');
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle('lock')
    iconMenu.classList.toggle('active');
    menuBody.classList.toggle('active');
  });
}


$('.hero__slider').slick({
  arrows: false,
  dots: true,
  dotsClass: 'hero__slick-dots',
});

$('.slider-ourspase__wrapper').slick({
  centerMode: true,
  arrows: true,
  appendArrows: $('.header__arrows'),
  prevArrow: '<button id="prev" type="button" class="arr-prev"></button>',
  nextArrow: '<button id="next" type="button" class="arr-next"></button>',
  centerPadding: '0px',
  slidesToShow: 3,
  dots: true,
  dotsClass: 'ourspace__slick-dots',
  responsive: [
    {
      breakpoint: 868,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1
      }
    }
  ]
});


var helpers = {
	addZeros: function (n) {
		return (n < 10) ? '0' + n : '' + n;
	}
};

function sliderInit() {
  var $slider = $('.slider-ourspase__wrapper');
  $slider.each(function() {
    var $sliderParent = $(this).parent();
   

    if ($(this).find('.item').length > 1) {
      $(this).siblings('.ourspace__counter').show();
    }

    $(this).on('afterChange', function(event, slick, currentSlide){
      $sliderParent.find('.ourspace__counter .ourspace__slick-number--active').html(helpers.addZeros(currentSlide + 1));
    });

    var sliderItemsNum = $(this).find('.slick-slide').not('.slick-cloned').length;
    $sliderParent.find('.ourspace__counter .ourspace__slick-number').html(helpers.addZeros(sliderItemsNum));

  });
  

};

sliderInit();


//(function($) {
  $(function() {
    $("ul.tabs__list-link").on("click", "li:not(.active)", function() {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active")
        .closest("div.tabs")
        .find("div.tab__item-pic")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
    });
  });
//});

$('.slider-gallery').slick({
  variableWidth: true,
  arrows: true,
  adaptiveHeight: true,
  initialSlide: 1,
  appendArrows: $('.gallery__arrows'),
  prevArrow: '<button id="prev" type="button" class="arr-prev"></button>',
  nextArrow: '<button id="next" type="button" class="arr-next"></button>',
});

$('.block-reviews__slider').slick({
  //slidesToShow: 3,
  variableWidth: true,
  arrows: true,
  dots: true,
  infinite:false,
  //slidesToScroll:1,
  appendArrows: $('.reviews__arrows'),
  prevArrow: '<button id="prev" type="button" class="arr-prev"></button>',
  nextArrow: '<button id="next" type="button" class="arr-next"></button>',
  dotsClass: 'reviews__slick-dots',
});

