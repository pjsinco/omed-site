$(document).ready(function() {

  console.log('hiya');

  $('body').addClass('js');

  // We don't care about resize events on screens below 768px wide
  var actionableScreenWidth = 768; // $large-start breakpoint

  // The difference in pixel height between a highlightable image and 
  // its containing block
  var difference = 96;

  var $menu = $('#menu');
  var $menuLink = $('.menu__link');
  var $menuTrigger = $('.has-subnav > a');

  var $highlightableImage = $('#highlightableImage');
  var $highlightable = $('#highlightable');

  /* TODO just blocking in for now */
  $(window).on('resize', function(evt) {
    evt.preventDefault();

    var windowWidth = $(window).width();
    console.log(windowWidth);

    if (windowWidth >= actionableScreenWidth) {
      $highlightable.height($highlightableImage.height() - difference);
    } else {
      $highlightable.css('height', '100%');
    }


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
