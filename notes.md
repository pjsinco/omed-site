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

