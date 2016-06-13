$(document).ready(function() {

  console.log('hiya');


  $('body').addClass('js');

  var windowWidth = $(window).width();
  var $menu = $('#menu');
  var $menuLink = $('.menu__link');
  var $menuTrigger = $('.has-subnav > a');

  var $highlightableImage = $('#highlightableImage');
  var $highlightable = $('#highlightable');

  /* TODO just blocking in for now */
  $(window).on('resize', function(evt) {
    evt.preventDefault();
    console.log(windowWidth);
    console.log('highlightable h: ' + $highlightableImage.height());
    console.log('highlightableImage h: ' + $highlightable.height());

    // TODO conditional 
    // Make we're at a big enuf screen size before changing the height 
    $highlightable.height($highlightableImage.height() - 96);
  });

  $menuLink.click(function(evt) {
    evt.preventDefault();
    $menu.toggleClass('active');
    $menuLink.toggleClass('active');
  });

  $menuTrigger.click(function(evt) {
    evt.preventDefault();
    var $this = $(this);
    $this.toggleClass('active')
      .next('ul')
      .toggleClass('active');
  });



});
