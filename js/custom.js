/*======Rd Design 7 Presents  Presentation Template=====
=====1. Hiding The Main Things =====
=====2. Open Pages On Click Function =====
=====3. Function Of 9 Different Animations =====
=====4. Skill Progress Function =====
=====5. Personal Progress Function =====
=====6. Portfolio Popup Function =====  
=====7. Portfolio Active Class Function =====
=====8. Navigation Active Class Function =====
=====9. Slide Function Right Settings =====
=====10. Name Style Function =================
=====11. Ajax Based Contact Form==================*/

/*=========
||==========================||
||==========================||
||						    ||
||						    ||
||						    ||
||						    ||
||						    ||
||==========================||
||===========================
||
||
||    ||=============       //\\        ||=====     ||==||=||
||    ||=============      //  \\       ||    ||    ||  || ||
||    ||                  //====\\      ||=====     ||  || ||
||    ||                 //      \\     ||\\\\      ||  || ||
||    ||=============   //        \\    || \\\\     ||==||=||
||    ||=============
 
 ==========*/


(function($){

"use strict";

$(window).load(function(){


/*1. ====Hiding Main Things==*/
  $('.right-side').hide();
  $('.nav_icon').hide();
  $('.social-box').hide();
  $('.loading').fadeOut(800);
  $('#left-angle').hide();
/*====Close This===*/


   $('[data-toggle="tooltip"]').tooltip();   

/*=====2. Open Pages On Click and Close Function =====*/

  
	   if($(window).width() > 768){
	     $('#open').on('click' , function(){
		   var $this = $(this);
		   $this.hide();
		    if(!$(this).hasClass('active')){
			 $(this).addClass('active');
			  $('.cover').addClass('active');
		     $('.open-margin').stop(false).animate({ 
			     marginLeft : '0%',
			 },{
			  "duration": 800,
			  "easing": "linear"
			 });
			 $('#close').show();
		    $('.right-side').fadeIn(1020);
	   $('.nav_icon').fadeIn(1020);
	   $('.social-box').fadeIn(1020);
	   }
		 });
		 
		 $('#close').on('click' , function(){
		   var $this = $(this);
		   $this.hide();
		    if($('#open').hasClass('active')){
			 $('#open').removeClass('active');
			  $('.cover').removeClass('active');
		     $('.open-margin').stop(false).animate({ 
			     marginLeft : '0%',
			 },{
			  "duration": 800,
			  "easing": "linear"
			 });
			 $('#open').show();
		    $('.right-side').fadeOut(1020);
	   $('.nav_icon').fadeOut(1020);
	   $('.social-box').fadeOut(1020);
	   }
		 });
		 
	   }
	   else{
	   $('#open').on('click' , function(){
		   var $this = $(this);
		   $this.hide();
		    if(!$(this).hasClass('active')){
			 $(this).addClass('active');
			  $('.cover').addClass('active');
			   $('.open-margin').stop(false).animate({ 
			     marginLeft : '0%',
			 },{
			  "duration": 800,
			  "easing": "linear"
			 });
		     $('#close').show();
		    $('.right-side').fadeIn(1020);
	   $('.nav_icon').fadeIn(1020);
	   $('.social-box').fadeIn(1020);
	   }
		 });
		 
		  $('#close').on('click' , function(){
		   var $this = $(this);
		   $this.hide();
		    if($('#open').hasClass('active')){
			 $('#open').removeClass('active');
			  $('.cover').removeClass('active');
		     $('.open-margin').stop(false).animate({ 
			     marginLeft : '0%',
			 },{
			  "duration": 800,
			  "easing": "linear"
			 });
			 $('#open').show();
		     $('.right-side').fadeOut(1020);
	   $('.nav_icon').fadeOut(1020);
	   $('.social-box').fadeOut(1020);
	   }
		 });
	   
	   }
    function resize_close(){
	  if($(window).width() < 768){
	  if(!$('#open').hasClass('active')){
	    $('.open-margin').stop(false).animate({ 
			     marginLeft : '0%',
			 },{
			  "duration": 800,
			  "easing": "linear"
			 });
			}
	  }else{
	  if(!$('#open').hasClass('active')){
	   $('.open-margin').stop(false).animate({ 
	   
			     marginLeft : '30%',
			 },{
			  "duration": 800,
			  "easing": "linear"
			 });
	  }
	  }
	
	}
	
	resize_close();
	$('#close').on('click' , resize_close);
	$(window).on('resize' , resize_close);
	 
	 

	 
/*=====Close This Here===*/




/*=====3. Function Of 9 Different Animations =====*/
  function animation() {
            'use strict';
            var index = $('.side-navigation ul li a').index(this);  // Get The Navigation Indexing 
            $('.side-navigation ul li a').attr('data-nav-link', index);  //Making The Custom Attr.
			
            var geteqli = $('.side-navigation ul li a').attr('data-nav-link'); // Geteqli Is the var of Custom Attr.
			 
            var animations = $('.content-wrapper').attr('data-animation'); // Here is your attr animation.
            var $this = $('.sections[data-section = ' + geteqli + ']'); //  Here Attach With sections 
            var empty = $('.sections[data-section != ' + geteqli + ']'); // If Not equal to sections 
            var mainclass = $('.sections'); // your Can add here main class
			
			/*======First Animation====*/
            if (animations == 'default') {
                $this.attr('data-check', geteqli);
                $this.addClass('pt-page-moveFromBottom').removeClass('pt-page-moveToBottom');
                $this.addClass('pt-page-current');
                mainclass.addClass('pt-page-current');
                empty.addClass('pt-page-moveToBottom').removeClass('pt-page-moveFromBottom')
            }
			/*=====Close First Animation====*/
			
			/*=====Second Animation====*/
            if (animations == 'right') {
                $this.attr('data-check', geteqli);
                $this.addClass('pt-page-moveFromRight').removeClass('pt-page-moveToRight');
                $this.addClass('pt-page-current');
                mainclass.addClass('pt-page-current');
                empty.addClass('pt-page-moveToRight').removeClass('pt-page-moveFromRight')
            }
			/*=====Close Second Animation====*/
			
			/*=====Third Animation====*/
            if (animations == 'scaleupdown') {
                $this.attr('data-check', geteqli);
                $this.addClass('pt-page-scaleUp').removeClass('pt-page-scaleDown');
                $this.addClass('pt-page-current');
                mainclass.addClass('pt-page-current');
                empty.addClass('pt-page-scaleDown').removeClass('pt-page-scaleUp')
            }
			/*===Close Third Animation=====*/
			
			/*====Fourth Animation======*/
            if (animations == 'scale-down-move-bottom') {
                $this.attr('data-check', geteqli);
                $this.addClass('pt-page-moveFromBottom').removeClass('pt-page-scaleDown');
                $this.addClass('pt-page-current');
                mainclass.addClass('pt-page-current');
                empty.addClass('pt-page-scaleDown').removeClass('pt-page-moveFromBottom')
            }
			/*=====Close Fourth Animation===*/
			
			/*=====Fifth Animation=====*/
            if (animations == 'scale-down-and-move-to-top') {
                $this.attr('data-check', geteqli);
                $this.addClass('pt-page-moveFromTop').removeClass('pt-page-scaleDown');
                mainclass.addClass('pt-page-current');
				 $this.addClass('pt-page-current').removeClass('pt-page');
				 empty.addClass('pt-page');
                empty.addClass('pt-page-scaleDown').removeClass('pt-page-moveFromTop')
            }
			/*======Close Fifth Animation====*/
			
			/*======Sixth Animation======*/
            if (animations == 'easing') {
                $this.attr('data-check', geteqli);
                $this.addClass('pt-page-moveFromBottom').removeClass('pt-page-moveToBottomEasing');
                $this.addClass('pt-page-current');
                mainclass.addClass('pt-page-current');
                empty.addClass('pt-page-moveToBottomEasing').removeClass('pt-page-moveFromBottom')
            }
			/*====Close Sixth Animation====*/
			
			/*======Seventh Animation======*/
            if (animations == 'right-easing') {
                $this.attr('data-check', geteqli);
                $this.addClass('pt-page-moveFromRight').removeClass('pt-page-moveToRightEasing');
                $this.addClass('pt-page-current');
                mainclass.addClass('pt-page-current');
                empty.addClass('pt-page-moveToRightEasing').removeClass('pt-page-moveFromRight')
            }
			
			/*======Close Seventh Animation======*/
			
			/*======Eighth Animation======*/
            if (animations == 'flip') {
                $this.attr('data-check', geteqli);
                $this.addClass('pt-page-flipInRight').removeClass('pt-page-flipOutRight');
                $this.addClass('pt-page-current');
                mainclass.addClass('pt-page-current');
                empty.addClass('pt-page-flipOutRight').removeClass('pt-page-flipInRight')
            }
			/*====== Close Eighth Animation Animation======*/
			
			/*======Ninth Animation======*/
            if (animations == 'push') {
                $this.attr('data-check', geteqli);
                $this.addClass('pt-page-moveFromRight').removeClass('pt-page-rotatePushLeft');
                $this.addClass('pt-page-current');
                mainclass.addClass('pt-page-current');
                empty.addClass('pt-page-rotatePushLeft').removeClass('pt-page-moveFromRight')
            }
			/*======Close Ninth Animation======*/
        }
    /*===Close Animation====*/
        animation(); // Calling on load
        $('.side-navigation ul li a').on('click', animation) //Calling on click
	
	 /*=======Close Animation Function=========*/
	 
	 
	 
	 
	  
/*4.=============Skills Progress======*/ 
     
   var first_class = $('.inside-progress-bar') ; // Class Of Progress bar Inner color
   first_class.each(function(){
    var progressbareq = first_class.index(this);  // Get Index This
	
	$('.skill-progress').attr('data-position', progressbareq); // Make Attr Data Position
	first_class.attr('data-number', progressbareq); //Make Attr Data Number
	var number = first_class.attr('data-number');  
	var position =    $('.skill-progress').attr('data-position'); //Check attr data position in The Class Of skill progress
	var getvalueofskill = $('.inside-progress-bar:eq('+position+')').attr('data-progress');  // Ths Var Get the  Position
	 $('.progress-container').find('p:eq('+position+')').html(getvalueofskill); //  Convert The percentage to text.
	  
	 //Animation SPeed And Delay Control Here 
	 $('.section-1 .nano-content').scroll(function(){ 
	   if($(this).scrollTop() > 200){
     $('.inside-progress-bar:eq('+position+')').stop(false).animate({
	 width: getvalueofskill, //Increase The width
      },{
	 duration: 800,
	 "easing": "linear"// Time To complete the total value By Default It Take 2s You can change Here 
     });
	 }
    });
 });
 
 /*=============Close Skills Progress======*/ 
 
 
 
 
 
 /*5.==================Personal Skills Progress=======*/
 
 /* Important! Previous Function and This Function is Same Don't be Confuse */
 
 var first_class = $('.inside-progress-bar-personal') ;
  first_class.each(function(){
  var progressbareq = first_class.index(this);
 $('.skill-progress-personal').attr('data-position', progressbareq);
 first_class.attr('data-number', progressbareq);
 var number = first_class.attr('data-number');
 var position =    $('.skill-progress-personal').attr('data-position');
 var getvalueofskill = $('.inside-progress-bar-personal:eq('+position+')').attr('data-progress');
 $('.progress-container-personal').find('p:eq('+position+')').html(getvalueofskill);
	 //Animation SPeed And Delay Control Here 
	 $('.section-1 .nano-content').scroll(function(){ 
	   if($(this).scrollTop() > 600){
 $('.inside-progress-bar-personal:eq('+position+')').stop(false).animate({
  width: getvalueofskill,
 },{
	     duration: 800,
	 "easing": "linear"// Time To complete the total value By Default It Take 2s You can change Here });
 });
 }
 });
});
 /*=========Close The personal Skill here========*/
 
 
 
 
 /*====== 6. Portfolio Magnific Popup function=====*/
 
 $('.portfolio-content').each(function(){ 
	      var $this = $(this);
        var getattr = $this.attr('data-index'); 
	
		 var runfunction = $('.portfolio-content').find('a[data-index *= '+getattr+']');
		  var popup_content = $('.popup-content:eq('+getattr+')');
	    var html =  popup_content.html();
		    if(runfunction.attr('data-video') == 'yes'){
			     runfunction.magnificPopup({
			    disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-with-zoom',
        removalDelay: 400,
        preloader: false,

        fixedContentPos: false,
		
     });
			}else{
		     runfunction.magnificPopup({
			 showCloseBtn: false,
        closeBtnInside: true,
		 mainClass: 'mfp-with-zoom',
		  removalDelay: 400,
		
		    items: {
			    
              src: '<div class="white-content">'+html+'</div>',
                type: 'inline'
           }
     });
	 }
   });
/*============Close Magnific Popup Here======*/


/*========7. Portfolio Active Class Function====*/
        $('.portfolio_nav ul li').on('click' , function(){
        var index = $('.portfolio_nav ul li').index(this);
        $('.portfolio_nav ul li').attr('data-link' , index);
	    var geteqli =  $('.portfolio_nav ul li').attr('data-link');
	    $('.portfolio_nav ul li').removeClass('active');
		$('.portfolio_nav ul li:eq('+geteqli+')').addClass('active');
        });
/*=======Close Portfolio Here=====*/


/*========8. Nav Active Class Function====*/
         $('.side-navigation ul li a').on('click' , function(){
        var index = $('.side-navigation ul li a').index(this);
        $('.side-navigation ul li a').attr('data-link' , index);
	    var geteqli =  $('.side-navigation ul li a').attr('data-link');
	    $('.side-navigation ul li a').removeClass('active-nav');
		$('.side-navigation ul li a:eq('+geteqli+')').addClass('active-nav');
        });
/*========Close Nav Active Class Function====*/
	

/*========9. SlideFunction====*/
     $('#right-click').on('click' , function(){
	    if(!$(this).hasClass('active-right')){
		    $(this).addClass('active-right');
		     $('.right-side-container').animate({
			       left : '0px',
			 });
			  
		}else{
		  $(this).removeClass('active-right');
		  $('.right-side-container').animate({
			       left : '-230px',
				 
			 });
			  
		}
	 });
/*========Close Here=====*/

/*========10. Name Style Function ====*/

$('#3d, #standard, #retro, #neon, #fade, #fire').on('click', function(){
	 
         var colorattr =  $(this).attr('id');
		 
	     $('#switcher').attr('href', 'css/skins/'+colorattr+'.css');
		 
 });

/*========Close This Function Here=======*/

/*=======Ajax Based Contact Form===============*/

 /*=======================
		 =======Ajax Loading=======
		 =========================*/
		 $('#contact_form').submit(function(){
         $.ajax({
                   type: 'POST',
		            url:  'contact.php',
                    data: $('#contact_form').serialize(),
                    cache: false,
                    success: function(data)
                    {
		            $('.msg').html(data);
		  
                     }
            });
         });
		
		/*=============================
		======Ajax Loading Complete====
		===============================*/
		


});
})(jQuery);