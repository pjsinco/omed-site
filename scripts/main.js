$(document).ready(function() {

  console.log('hiya');

  $('body').addClass('js');

  var $menu = $('#menu');
  var $menuLink = $('.menu-link');
  var $menuTrigger = $('.has-subnav > a');

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
