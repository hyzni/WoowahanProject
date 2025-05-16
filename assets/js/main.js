$('#header .header-open').click(function(e) {
  e.preventDefault();
  $('#header .side-nav').addClass('show'); 
  $('body').addClass('overflow-hidden'); 
});

$('#header .side-nav .btn-close').click(function(e) {
  e.preventDefault();
  $('#header .side-nav').removeClass('show'); 
  $('body').removeClass('overflow-hidden'); 
});

$('.side-nav .btn-more').click(function () {
  $(this).toggleClass('rotate');
  $(this).parent().next('.side-nav .side-sub').toggleClass('show');
});





mainSwiper = new Swiper('.main-slide .swiper', {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: true,
});



$(document).ready(function () {
  const slide111 = new Swiper('.marquee-slide', {
    speed: 2000,
    slidesPerView: 'auto',
    spaceBetween: 16,
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false, // 사용자 상호작용 후에도 autoplay 유지
    }
  });

  $('.content1 .marquee-slide .swiper-slide').hover(
    function () {
      const that = $(this);
      const hoverTimer = setTimeout(function () {
        if (slide111 && slide111.autoplay) {
          slide111.autoplay.stop(); // 2초 후 autoplay 멈춤
        }
      }, 1000);
      that.data('hoverTimer', hoverTimer); // 타이머 저장
    },
    function () {
      const that = $(this);
      clearTimeout(that.data('hoverTimer')); // 2초 안에 마우스를 떼면 멈추지 않음
      if (slide111 && slide111.autoplay) {
        slide111.autoplay.start(); // autoplay 다시 시작
      }
    }
  );
});









// 첫 번째 li 초기 상태 유지
const firstLiSelector = '#header .gnb-item .sub li:first-child';
$(firstLiSelector).addClass('on');

$('#header .gnb-item').hover(function() {
  if ($(this).find('.sub').length) {
    $('#header').addClass('hov');
    $(this).find('.sub').addClass('show').find('li').removeClass('on').first().addClass('on');
  }
}, function() {
  $('#header').removeClass('hov');
  $(this).find('.sub').removeClass('show').find('li').removeClass('on').first().addClass('on');
});

$('#header .gnb-item .sub li').hover(function() {
  $(this).addClass('on').siblings().removeClass('on');
}, function() {
  $(this).closest('.sub').find('li').removeClass('on').first().addClass('on');
});

$('#header .gnb-area .sub').hover(function() {
  $(this).find('li').removeClass('on').first().addClass('on');
}, function() {
  $(this).find('li').removeClass('on').first().addClass('on');
});



let lastScroll = 0;
$(window).scroll(function(){
  curr=$(this).scrollTop();
  headerH = $('#header').height();


  if(curr > headerH) {

    if (curr > lastScroll) {
      $('#header').addClass('hide')
    } else {
      $('#header').removeClass('hide')
    }

    lastScroll = curr;
  }

})



$('.video-content .btn-stop').click(function(){
  let video = $('.video-content video');

  if ($(this).hasClass('active')) {
    video.trigger('pause'); 
  } else {
    video[0].currentTime = 0;
    video.trigger('play'); 
  }

  $(this).toggleClass('active');
});


cloneList = $('.content5 .content-list').clone()
$('.content5 .group-content').append(cloneList)




$('#footer .right-area').click(function(){
  $('#footer .family-list').toggleClass('show');
  $('#footer .group-bottom .right-area svg').toggleClass('rotate');
})

$('#footer .family-list .family-item').hover(function(){
  $(this).addClass('hover');
  $(this).siblings('.family-item').removeClass('hover');
},
function() {
  $(this).removeClass('hover');
})

