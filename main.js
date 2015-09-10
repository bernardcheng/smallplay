$(function(){
  var snsWrapper = document.getElementById('wrap-sns-pc');
  var fixedSnsContent = document.getElementById('fixed-sns-pc');
  var newPostsOffsetTop = $(document.getElementId('wrap-new-posts')).offset().top;

  $(window).scroll(function() {
    if (snsWrapper && fixedSnsContent) {
        var isScrolledToPos = $(window).scrollTop() > newPostsOffsetTop
        $(fixedSnsContent).toggleClass('fadein', isScrolledToPos);
      }
    }
  });
})
