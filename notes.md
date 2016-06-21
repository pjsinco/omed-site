#####Some header markup
```html
  <header class="header">
    <div class="clearfix">
      <div class="logoblock">
        <a href="/" class="logo">SiteName</a>
      </div> <!-- .logoblock -->
      <nav class="navblock">
        <ul class="ul-base nav">
          <li><a href="#">Overview</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Featured</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Sign up</a></li>
        </ul>
      </nav>
    </div>
  </header>
```

```html
  <footer class="footer">
    <div class="container--full">
      <div class="grid--parent">
        <div class="footer__socialblock">
          <img src="http://placehold.it/30x30" alt="footer__socialeach" />
          <img src="http://placehold.it/30x30" alt="footer__socialeach" />
          <img src="http://placehold.it/30x30" alt="footer__socialeach" />
          <img src="http://placehold.it/30x30" alt="footer__socialeach" />
        </div>
        <div class="footer__copyrightblock">
          <div>
            Copyright etc
          </div>
        </div>
      </div>      
    </div>
    
  </footer>
```

#####Some utility styles
```scss

$h-space: 1em;

.clearfix:after {
  content: "";
  display: table;
  clear: both;
}

%container-base {
  margin-left: auto;
  margin-right: auto;
}

%container-base-padding {
  padding-left: $h-space;
  padding-right: $h-space;
}

.grid {

  &--parent {
    margin-left: -$h-space;
    margin-right: -$h-space;
  }

  /* Add width as % and a float */
  &--child {
    padding-left: $h-space;
    padding-right: $h-space;
  }
}

.container {

  &--bleed {
    @include %container-base;
  }

  &--full {
    @include %container-base;
    @include %container-base-padding;
    max-width: 100%;
  }

  &--main {
    @include %container-base;
    @include %container-base-padding;
    max-width: 63em; // 1008px
  }

  &--med {
    @include %container-base;
    @include %container-base-padding;
    max-width: $medium-start;
  }

  &--sm {
    @include %container-base;
    @include %container-base-padding;
    max-width: $small-start;
  }

  &--xs {
    @include %container-base;
    @include %container-base-padding;
    max-width: $xsmall-start;
  }

}
```


##### Project brief example
```
color palette
-------------

logo
----

style
-----
responsive
minimal
subte
white space and roomy text

pages
-----
home
overview
team
featured
contact



header
------
logo
menu: overview, team, featured, contact, sign-up

footer
------
Privacy Policy
Terms of Use
Copyright notice
AOA 
social media links?

meta tags

PAGE: home
----------
- meta info
Title: 

- block: banner


- block: call to actoin
button: ""


PAGE: overview
- meta info
title: ...

- block: video
[text]
[link]

- blcok: 
[text]
[more text]
```


#####Tue May 31 10:11:23 2016 CDT
* Blog: [Using Gulp with Jekyll](http://aaronlasseigne.com/2016/02/03/using-gulp-with-jekyll/)

* Fabric11 nav markup:
```html
<nav class="navmenu navmenu-classic navmenu-fixed" role="navigation" id="navigation">
    <div class="navmenu-header-overlay background-dark" data-classchange="background-light background-dark" data-classchange-target=".navmenu-header" style="background-color: rgba(53, 53, 53, 0);"></div>
    <div class="navmenu-nav background-dark">
        <div class="nav-wrapper">
            <div class="nav-background nav-background-overlay background-dark" data-classchange="background-light background-dark" data-classchange-target=".navmenu-nav" style="background-color: rgb(53, 53, 53);"></div>
            <div class="container">
                <ul class="nav" role="menu">
                    <li>
                        <a href="https://fabriceleven.com/" class="homelink menu-item menu-item-type-post_type menu-item-object-page">Home</a>
                    </li>
                    <li>
                        <a href="https://fabriceleven.com/projects/" class=" menu-item menu-item-type-post_type menu-item-object-page">Work</a>
                    </li>
                    <li>
                        <a href="https://fabriceleven.com/about/" class=" menu-item menu-item-type-post_type menu-item-object-page">About</a>
                    </li>
                    <li>
                        <a href="https://fabriceleven.com/contact/" class=" menu-item menu-item-type-post_type menu-item-object-page">Contact</a>
                    </li>
                    <li>
                        <a href="https://fabriceleven.com/blog/" class=" menu-item menu-item-type-post_type menu-item-object-page current_page_parent">Blog</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="navmenu-header background-dark">
        <div class="container">
            <a class="navmenu-toggle" data-toggle-class="in" data-target="#navigation" data-on-delay="10" data-on-class="pre-in" data-off-delay="400" data-off-class="out">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </a>
            <a class="navmenu-brand" href="https://fabriceleven.com/">
                <img class="logo default dark" height="50" src="https://fabriceleven.com/wp-content/uploads/2015/09/fabric11-final-logo-black-md.png" alt="">
                <img class="logo light" height="50" src="https://fabriceleven.com/wp-content/uploads/2015/09/fabric11-final-logo-white-md.png" alt="">
            </a>
        </div>
    </div>
</nav>
```

* Codepen: [Responsive Flexbox Grid](http://codepen.io/guuslieben/pen/bVeObG)

* Super markup:
```html
<div class="super">
    <a href="http://thedo.osteopathic.org/2016/05/opioid-use-disorders-what-does-treatment-look-like/">
        <figure class="super__figure">
            <img class="image__img" src="http://thedo.osteopathic.org/wp-content/uploads/2015/03/addiction.jpg" />
        </figure>
    </a>
    <div class="super__body--t-r ">
        <h5 class="super__kicker">Explainer</h5>
        <span class="super__date">May 27, 2016</span>
        <h1 class="super__head">
            <a href="http://thedo.osteopathic.org/2016/05/opioid-use-disorders-what-does-treatment-look-like/" class="super__link">
              Opioid use disorders: What does treatment look like?                </a>
        </h1>
        <p class="super__body-text">Addiction medicine specialists William Morrone, DO, and Merideth Norris, DO, explain the treatment options for patients who abuse opioids.</p>
    </div>
</div>
```

#####Wed Jun  1 16:17:55 2016 CDT
* Github: [ScrollReveal](https://github.com/jlmakes/scrollreveal.js)


#####Thu Jun  2 06:10:10 2016 CDT 
* Another take on a Jekyll-driven gulpfile:
```js
var gulp = require('gulp');
var shell = require('gulp-shell');
var browserSync = require('browser-sync').create();


gulp.task('build', shell.task(['jekyll build --watch']));


gulp.task('serve', function () {

	browserSync.init({server: {baseDir: '_site/'}});

	gulp.watch('_site/**/*.*').on('change', browserSync.reload);

});


gulp.task('default', ['build','serve']);
```

#####Sun Jun  5 12:22:50 2016 CDT
* Github: [Flexbox Grid](http://flexboxgrid.com/#top)

#####Tue Jun  7 12:03:22 2016 CDT
* Font conversion: [Online Font Converter - so simple](https://font-converter.net/en)

#####Fri Jun 10 08:35:22 2016 CDT
* Slide deck: [Intro to Flexbox](http://arelia.github.io/flex-talk/#/)

#####Sat Jun 11 07:29:46 2016 CDT
* CSS-Tricks: [The “Blur Up” Technique for Loading Background Images](https://css-tricks.com/the-blur-up-technique-for-loading-background-images/)

#####Sun Jun 12 07:08:26 2016 CDT
* Blog: [Nicer Navigation with CSS Transitions](http://www.newmediacampaigns.com/blog/nicer-navigation-with-css-transitions-part-2)
    * Codepen : [Animated Navigation Examples](http://codepen.io/toddsynan/full/pJuyx)

#####Mon Jun 13 06:56:43 2016 CDT
* Website tool: [How to Center in CSS](http://howtocenterincss.com/)

* jQuery docs: [Code Organization Concepts](https://learn.jquery.com/code-organization/concepts/)

#####Tue Jun 14 06:28:59 2016 CDT 
* Blog: [A Primer to Front-end SVG Hacking](http://dbushell.com/2013/02/04/a-primer-to-front-end-svg-hacking/)

* Deploy to: ```/home/rempatri/public_html/obuild```  

* Webdesignerdepot: [How to create an animated sticky header, with CSS3 and jQuery](http://www.webdesignerdepot.com/2014/05/how-to-create-an-animated-sticky-header-with-css3-and-jquery/)

* Blog: [50 Great Examples of Websites Using Fixed Position Navigation Menu](http://designbeep.com/2012/01/04/50-great-examples-of-websites-using-fixed-position-navigation-menu/)  

* Treehouse video: [Forum Tip: Create a Sticky Navigation with CSS and jQuery](https://teamtreehouse.com/community/forum-tip-create-a-sticky-navigation-with-css-and-jquery-2)

#####Wed Jun 15 07:07:31 2016 CDT
* Blog: [A Primer to Front-end SVG Hacking](http://dbushell.com/2013/02/04/a-primer-to-front-end-svg-hacking/)

* Treehouse: [How do you make a SVG clickable?](https://teamtreehouse.com/community/how-do-you-make-a-svg-clickable)

* Blog: [6 Top Landing Page Trends So Far For 2015 (with examples)](https://instapage.com/blog/landing-page-trends)

#####Thu Jun 16 09:37:26 2016 CDT
* Codepen: [Page Load Animations](http://codepen.io/brendeng/pen/sDjIC)

#####Fri Jun 17 13:43:38 2016 CDT
* Blog: [CriticalCSS In Action](https://bocoup.com/weblog/criticalcss-in-action)

* Github: [jquery.shorten](https://github.com/viralpatel/jquery.shorten)

* Blog: [Dynamically shortened Text with “Show More” link using jQuery](http://viralpatel.net/blogs/dynamically-shortened-text-show-more-link-jquery/)

#####Sat Jun 18 07:10:43 2016 CDT
* Codepen: [Stagger Multiple Animations](http://codepen.io/GreenSock/pen/BHabA)
    * like The Undefeated uses in its menu

* Scotch.io: [CSS3 Page Landing Animations](https://scotch.io/tutorials/css3-page-landing-animations)

* CSS-Tricks: [A Complete Guide to SVG Fallbacks](https://css-tricks.com/a-complete-guide-to-svg-fallbacks/)

* HTML5Rocks: [High Performance Animations](http://www.html5rocks.com/en/tutorials/speed/high-performance-animations/)

    >  Modern browsers can animate four things really cheaply: position, scale, rotation and opacity.

#####Sun Jun 19 13:49:48 2016 CDT
* Blog: [SVG ON THE WEB: A Practical Guide](https://svgontheweb.com/)

######Tue Jun 21 06:14:49 2016 CDT
* Github: [Slick: the last carousel you'll ever need](https://github.com/kenwheeler/slick/)

* Animating on page scroll:
    * Demo: [http://demo.getgrav.org/woo-skeleton/](http://demo.getgrav.org/woo-skeleton/)
    * Code: [http://demo.getgrav.org/woo-skeleton/user/themes/woo/js/main.js](http://demo.getgrav.org/woo-skeleton/user/themes/woo/js/main.js)
    * Waypoints library: [http://imakewebthings.com/waypoints/](http://imakewebthings.com/waypoints/)

* Website: [Jekyll Tips](http://jekyll.tips/guide/getting-started-with-jekyll/)

* Website: [Jekyll Cheat Sheet](http://cheat.jekyll.tips/)
