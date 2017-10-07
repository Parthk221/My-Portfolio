/*======Rd Design 7 Presents  Presentation Template=====
=====1. Nano Plugin =====
=====2. Filter Portoflio Plugin ====
=====3. Magnfic Popup Already Called in Custom .js====*/

  
	$("#section-1 .nano").nanoScroller({ flash: true });
	$("#section-2 .nano").nanoScroller({ flash: true });
	$("#section-3 .nano").nanoScroller({ flash: true });
	$(".section-blog .nano").nanoScroller({ flash: true });
	$(".section-4 .nano").nanoScroller({ flash: true });
	 
	   var options = {
    animationDuration: 0.8, //in seconds
    filter: 'all', //Initial filter
    callbacks: { 
    onFilteringStart: function() { },
    onFilteringEnd: function() { },
    onShufflingStart: function() { },
    onShufflingEnd: function() { },
    onSortingStart: function() { },
    onSortingEnd: function() { }
},
    delay: 0, //Transition delay in ms
    delayMode: 'progressive', //'progressive' or 'alternate'
    easing: 'ease-out',
    filterOutCss: { //Filtering out animation
    opacity: 0,
    transform: 'scale(0)'
},
    filterInCss: { //Filtering in animation
    opacity: 1,
    transform: 'scale(1)'
},
    layout: 'sameSize', //See layouts
    selector: '.grid',
    setupControls: true 
} 
//You can override any of these options and then call...
    var filterizd = $('.grid').filterizr(options);
//If you have already instantiated your Filterizr then call...
    filterizd.filterizr('setOptions', options);

//Clos Plugin Here 