(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map
