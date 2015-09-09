$(function(){
  var snsWrapper = document.getElementById('wrap-sns-pc');
  var fixedSnsContent = document.getElementById('fixed-sns-pc');
  var newPostsOffsetTop = $('#wrap-new-posts').offset().top;

  $(window).scroll(function() {
    if (snsWrapper && fixedSnsContent) {
      if ($(window).scrollTop() > newPostsOffsetTop) {
        $(fixedSnsContent).removeClass('fadein');
      } else {
        $(fixedSnsContent).addClass('fadein');
      }
    }
  });
})
