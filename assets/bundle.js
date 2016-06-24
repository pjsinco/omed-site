(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(document).ready(function() {

  console.log('hiya');

  //$('body').addClass('js');

  // We don't care about resize events on screens below 768px wide
  var actionableScreenWidth = 768; // $large-start breakpoint
  var actionableScrollTop = 35;


  // The difference in pixel height between a highlightable image and 
  // its containing block
  var difference = 96;

  var $html = $('html');
  var $menu = $('#menu');
  var $menuLink = $('.menu__link');
  var $menuTrigger = $('.has-subnav > a');

  var windowWidth = $(window).width();
  var $highlightableImage = $('#highlightableImage');
  var $highlightable = $('#highlightable');
  //adjustHighlightableHeight();

  $(document).on('scroll', function(evt) {
    if (!($html).hasClass('revealable')) {
      return;
    }
    var y = $(this).scrollTop();
    if (y > actionableScrollTop) {
      $('html').addClass('sticky');
    } else {
      $('html').removeClass('sticky');
    }
    //console.log('scrolltop: ' + $(this).scrollTop());
  });

  /* TODO just blocking in for now */
//  $(window).on('resize', function(evt) {
//    evt.preventDefault();
//
//    windowWidth = $(window).width();
//
//    if (windowWidth >= actionableScreenWidth) {
//      adjustHighlightableHeight();
//      //$highlightable.height($highlightableImage.height() - difference);
//    } else {
//      $highlightable.css('height', '100%');
//    }
//
//
//  });

  $menuLink.click(function(evt) {
    evt.preventDefault();
    $menu.toggleClass('active');
    $menuLink.toggleClass('active');
    activateMenus();
  });

  //$menuTrigger.click(activateMenus);

  function adjustHighlightableHeight() {
    $highlightable.height($highlightableImage.height() - difference);
  }

  function activateMenus() {
    $('.level-2').addClass('active');
  }

});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map
