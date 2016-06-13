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
