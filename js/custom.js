// Show the first tab and hide the rest
$('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('#tabs-nav li').click(function(){
  $('#tabs-nav li').removeClass('active');
  $(this).addClass('active');
  $('.tab-content').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});

document.addEventListener('DOMContentLoaded', () => {

                                    new Mmenu("#menu", {        theme       : "white",
        navbars     : {
            content : [ "prev", "title" ]
        },
    
        setSelected : {
            hover: true
        }}, {});
                
                            });



$('.middel-7 .owl-carousel').owlCarousel({
    loop:true,
     margin:100,
    dots:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})