$(function(){
  $('a[href="#"]').on('click',function(e){
    e.preventDefault();
  });

  $('.nav-btn').on('click',function(){
    $('nav').css('display','block')
  });
  $('nav h2').on('click',function(){
    $('nav').css('display','none')
  });

  let scroll = $('.best').offset();
  console.log(scroll)//top:1155, left:0
  $(window).scroll(function(){
    let wscroll = $(window).scrollTop();
    console.log(wscroll)
  });

/*
js에서 미디어쿼리 인식하는 방법
 window.matchMedia(mediaQueryString)->원하는 스크린 사이즈 값 입력
 
 ex)
 if(window.matchMedia('min-width:768px')){
   //브라우저의 크기가  '768px'이상 일 때 실행될 값
 } else{
   //브라우저의 크기가 '768'미만 일 때 실행될 값
 }
 //css 미디어쿼리는 브라우저의 크기를 변경하는 즉시 바로 적용되지만
 .matchMedia의 경우 바로 적용되지 않아 새로고침 후 확인 가능
 
 IE 10 이상에서 사용가능
*/

// let m =window.matchMedia("(min-width: 1440px)")
// if(m.matches) {
//   console.log(m)
//   $('.video-wrap1 video').attr('src','images/abib.mp4');
// }  else {
//   $('.video-wrap1 video').attr('src','images/abibm.mp4');
//  }
$(window).mousewheel(function(e,delta){
  if(delta > 300 ){
    $('.best h2').stop().animate({
      top:'40%'
    },000)
  } else if( delta < 300){
    $('.best h2').stop().animate({
      top:'110%'
    },2000);
  }
});
// let m =window.matchMedia("(min-width: 1440px)")
// if(m.matches) {
//   console.log(m)
//   $('.video-wrap1 video').attr('src','images/abib.mp4');
// }  else {
//   $('.video-wrap1 video').attr('src','images/abibm.mp4');
//  }
// const swiper = new Swiper('.swiper-container', {
//   slidesPerView: 3,
//   spaceBetween:0,
//   loop: true

});