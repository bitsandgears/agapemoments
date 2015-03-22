// Foundation Custom JavaScript  
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(document).ready(function() { 
	$("#places-to-go-slider").owlCarousel({
		  	items: 4
  	});

  $("#bloggers-alike-slider").owlCarousel({
        items: 5,
        itemsCustom: [[0, 3], [480, 5], [641, 5], [768, 8], [1025, 5]]
    });
});

/* Smooth Scrolling on Anchor links */
$(function() { 
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    } 
  }); 


  // Infinite scrolling
$('.main-content').jscroll({ 
  loadingHtml: '<div class=""><div class="btn"><img src="http://static.tumblr.com/0a54b4bed98015c9d2b57557de89e637/j6zwozp/2DDnfwz1o/tumblr_static_7ieep8hf4bs48w8wog80gskww.gif" /></div></div>',
  padding: 20,
  nextSelector: 'a.jscroll-next:last',
  contentSelector: '.main-content-block',
  debug: false,
  autoTrigger: false
}); 

  // //set Kars's avatar on a post if no other found
  // var karsIconHtml = '<span class="group-author">  
  //                       <a href="http://borgulas.tumblr.com/">
  //                         <img src="http://karsvfm45.fortyfive.versio.nl/agapemoments/img/icon-kars-beer.png" />
  //                       </a>
  //                       by: 
  //                       <a href="http://borgulas.tumblr.com/">
  //                         Kars
  //                       </a>
  //                     </span>';
  // $('.post-date').each(function() {
  //   if ($(this).find('.post-author').length === 0 & $(this).find('.group-author').length === 0) {
  //     $(this).find('.post-date-span').after(karsIconHtml);
  //   }
  // });


  

  

  var blogs = [];
      blogs[0] = ['Madeline', 'maddyeline', 'http://maddyeline.tumblr.com/', 'http://karsvfm45.fortyfive.versio.nl/agapemoments/img/my-lovely-bunny-128px.png'];                 
      blogs[1] = ['Kars', 'borgulas', 'http://borgulas.tumblr.com/', 'http://karsvfm45.fortyfive.versio.nl/agapemoments/img/kars-goofy-128px.png'];

  // use livequery plugin to listen for new .group-author elements and change avatar and blog user name
  $('.group-author') 
    .livequery(function(){
      var groupAuthorUrl;

      for (i = 0; i < blogs.length; i++) {
        //change blog user avatar to alternative avatar
        $(this).find('a[href*=' + blogs[i][1] + '] img').attr('src', blogs[i][3]);
        
        //change blog user name to real name
        groupAuthorUrl = $(this).find('a:eq(1)').attr('href');
        if (groupAuthorUrl === blogs[i][2]) {
          $(this).find('a:eq(1)').text(blogs[i][0]);
        }
      }
    }, function() { 
        //
    }); 

}); 