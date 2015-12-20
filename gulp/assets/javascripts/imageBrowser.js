$(function(){
  console.log('loaded image browser');
  $(document).on('click', '.gallery', function(){
    // $('.image-box').removeClass('selected');
    $(this).addClass('selected');
    $(this).removeClass('gallery');
    // $('body').css('overflow', 'hidden');
    console.log(this);
  })
  $(document).on('click', '.selected', function(){
    $(this).addClass('gallery');
    $(this).removeClass('selected');
    // $('body').css('overflow', 'auto');
    console.log('click selected');
    console.log(this);
  })
})