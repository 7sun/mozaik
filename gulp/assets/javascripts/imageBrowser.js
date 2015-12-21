$(function(){
  // console.log('loaded image browser');
  // $(document).on('click', '.gallery', function(){
  //   $('.image-box').removeClass('selected');
  //   $(this).addClass('selected');
  //   $(this).removeClass('gallery');
  //   // $('body').css('overflow', 'hidden');
  //   console.log(this);
  // })
  // $(document).on('click', '.selected', function(){
  //   $(this).addClass('gallery');
  //   $('.image-box').removeClass('selected');
  //   // $('body').css('overflow', 'auto');
  //   console.log('click selected');
  //   console.log(this);
  // })
  $(document).on('click', '.image2', function(){
    $(this).toggleClass('expand');
    $('.image3').toggleClass('contract');
  })

  // $(document).on('click', '#btn', function(){
  //   console.log("clicked button");
  //   $('html, body').animate({
  //     scrollTop: $("#img").offset().top
  //   }, 1000);
  // })

})