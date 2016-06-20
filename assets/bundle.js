(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//window.onload = function loadStuff() {
//  var win, doc, img, header, enhancedClass, styles;
//  // Quit early if older browser (e.g. IE8).
//  if (!('addEventListener' in window)) {
//    return;
//  }
//
//  win = window;
//  doc = win.document;
//  img = new Image();
//  header = doc.querySelector('.splash');
//  enhancedClass = 'splash-enhanced';
//
//  // Rather convoluted, but parses out the first mention of a background
//  // image url for the enhanced header, even if the style is not applied.
//  var bigSrc = (function() {
//    // Find all of the CssRule objects inside the inline stylesheet 
//    if (document.styleSheets && document.styleSheets[0].cssRules) {
//      styles = doc.styleSheets[0].cssRules;
//    } else if (document.styleSheets && document.styleSheets[0].rules) {
//      styles = doc.styleSheets[0].rules;
//    }
//
//    if (!styles) {
//      return;
//    }
//
//    //styles = doc.querySelector('style').sheet.cssRules || doc.styleSheets[0]
//    // Fetch the background-image declaration...
//    var bgDecl = (function() {
//      // ...via a self-executing function, where a loop is run
//      var bgStyle, i, l = styles.length;
//      for (i = 0; i < l; i++) {
//        // ...checking if the rule is the one targeting the
//        // enhanced header.
//        if (styles[i].selectorText &&
//          styles[i].selectorText == '.' + enhancedClass) {
//          // If so, set bgDecl to the entire background-image
//          // value of that rule
//          bgStyle = styles[i].style.backgroundImage;
//          // ...and break the loop.
//          break;
//        }
//      }
//      // ...and return that text.
//      return bgStyle;
//    }());
//    // Finally, return a match for the URL inside the background-image
//    // by using a fancy regex i Googled up, if the bgDecl variable is
//    // assigned at all.         
//    return bgDecl && bgDecl.match(/(?:\(['|"]?)(.*?)(?:['|"]?\))/)[1];
//  }());
//
//  // Assign an onLoad handler to the dummy image *before* assigning the src
//  img.onload = function() {
//    header.className += ' ' + enhancedClass;
//  };
//  // Finally, trigger the whole preloading chain by giving the dummy
//  // image its source.
//  if (bigSrc) {
//    img.src = bigSrc;
//  }
//};

$(document).ready(function() {

  //console.log('hiya');

  $('body').addClass('js');

  // We don't care about resize events on screens below 768px wide
  var actionableScreenWidth = 768; // $large-start breakpoint
  var actionableScrollTop = 35;


  // The difference in pixel height between a highlightable image and 
  // its containing block
  var difference = 96;

  var $menu = $('#menu');
  var $menuLink = $('.menu__link');
  var $menuTrigger = $('.has-subnav > a');

  var windowWidth = $(window).width();
  var $highlightableImage = $('#highlightableImage');
  var $highlightable = $('#highlightable');
  adjustHighlightableHeight();

  $(document).on('scroll', function(evt) {
    var y = $(this).scrollTop();
    if (y > actionableScrollTop) {
      $('html').addClass('sticky');
    } else {
      $('html').removeClass('sticky');
    }
    //console.log('scrolltop: ' + $(this).scrollTop());
  });

  /* TODO just blocking in for now */
  $(window).on('resize', function(evt) {
    evt.preventDefault();

    windowWidth = $(window).width();

    if (windowWidth >= actionableScreenWidth) {
      adjustHighlightableHeight();
      //$highlightable.height($highlightableImage.height() - difference);
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

  function adjustHighlightableHeight() {
    $highlightable.height($highlightableImage.height() - difference);
  }


});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map
