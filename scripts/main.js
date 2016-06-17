window.onload = function loadStuff() {
  var win, doc, img, header, enhancedClass, styles;
  // Quit early if older browser (e.g. IE8).
  if (!('addEventListener' in window)) {
    return;
  }

  win = window;
  doc = win.document;
  img = new Image();
  header = doc.querySelector('.splash');
  enhancedClass = 'splash-enhanced';

  // Rather convoluted, but parses out the first mention of a background
  // image url for the enhanced header, even if the style is not applied.
  var bigSrc = (function() {
    // Find all of the CssRule objects inside the inline stylesheet 
    if (document.styleSheets && document.styleSheets[0].cssRules) {
      styles = doc.styleSheets[0].cssRules;
    } else if (document.styleSheets && document.styleSheets[0].rules) {
      styles = doc.styleSheets[0].rules;
    }

    if (!styles) {
      return;
    }

    //styles = doc.querySelector('style').sheet.cssRules || doc.styleSheets[0]
    // Fetch the background-image declaration...
    var bgDecl = (function() {
      // ...via a self-executing function, where a loop is run
      var bgStyle, i, l = styles.length;
      for (i = 0; i < l; i++) {
        // ...checking if the rule is the one targeting the
        // enhanced header.
        if (styles[i].selectorText &&
          styles[i].selectorText == '.' + enhancedClass) {
          // If so, set bgDecl to the entire background-image
          // value of that rule
          bgStyle = styles[i].style.backgroundImage;
          // ...and break the loop.
          break;
        }
      }
      // ...and return that text.
      return bgStyle;
    }());
    // Finally, return a match for the URL inside the background-image
    // by using a fancy regex i Googled up, if the bgDecl variable is
    // assigned at all.         
    return bgDecl && bgDecl.match(/(?:\(['|"]?)(.*?)(?:['|"]?\))/)[1];
  }());

  // Assign an onLoad handler to the dummy image *before* assigning the src
  img.onload = function() {
    header.className += ' ' + enhancedClass;
  };
  // Finally, trigger the whole preloading chain by giving the dummy
  // image its source.
  if (bigSrc) {
    img.src = bigSrc;
  }
};




//window.onload = function loadsStuff() {
//
//
//  var img, header, enhancedClass;
//
//  // Quit early in an older browser (IE8, for ex.)
//  if (!('eventListener' in window)) {
//    return;
//  }
//  
//  img = new Image();
//  header = document.querySelector('.splash');
//  enhancedClass = '.splash-enhanced';
//
//  var bigSrc = (function() {
//
//    var styles = document.querySelector('style').sheet.cssRules;
//    var bgDecl = (function() {
//
//      var bgStyle, i, l = styles.length;
//      for (var i = 0; i < l; i++) {
//        if (styles[i].selectorText && 
//              styles[i].selectorText == '.' + enhancedClass) {
//          bgStyle = styles[i].style.backgroundImage;
//          break;
//        }
//      }
//
//  console.dir(styles);
//      return bgStyle;
//    })();
//
//    return bgDecl && bgDecl.match(/(?:\(['|"]?)(.*?)(?:['|"]?\))/)[1];
//
//  })();
//
//  img.onload = function() {
//    header.className += ' ' + enhancedClass;
//  };
//
//  if (bigSrc) {
//    img.src = bigSrc;
//  }
//
//};


$(document).ready(function() {

  //console.log('hiya');

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
