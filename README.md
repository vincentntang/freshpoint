![](./docs/images/freshpoint-logo.png)

## Inspiration

... yet another CSS Framework? We have really great frameworks like bootstrap, bulma, material-ui, tailwinds CSS and so much more. Why this one?

Freshpoint is a minimalist sass framework designed to be used with other UI libraries, but can be used standlone too. Even with using other UI libraries, you'll run into bottlenecks on what it can do, and write custom styles regardless.

Freshpoint takes an opinionated approach on how to organize those custom styles. It includes utilities that are most commonly used for making any responsive fullpage applications and nothing more.

Works alongside with frameworks like React, Vue, Angular, etc. Just copy the `src/sass` directory into your project

Core Features:

- Variables for declaring common breakpoints
- Helper mixins for scoping media queries to classes
- Opinionated 3 folder structure for organizing scss
- Utility functions for responsive padding/margin classes
- Utility functions for responsive text sizing classes

# Getting Started

- Quick Start
- Sass Integration

# Install

Download Node.js

```
npm install --global gulp-cli
npm install
```

Then run

```
gulp
```

# Configuration

Under the variables file, you'll find declarations for 

1. Breakpoints
2. Color variables

Breakpoints are based on same naming conventions as Bootstrap

```scss
/**********************************************/
/* BREAKPOINTS (based on bootstrap) */
/* 576,768,992,1200,1600*/
/**********************************************/
$sm-max: 575px;
$sm-min: 576px;
$md-max: 767px;
$md-min: 768px;
$lg-max: 991px;
$lg-min: 992px;
$xl-max: 1199px;
$xl-min: 1200px;
$xxl-max: 1599px;
$xxl-min: 1600px; // not part of bootstrap
```

# Examples:

Scoping Media Queries to new styles

```scss
.my-custom-class {
  @include sm-max {
    background-color: red; // only apply below 576px;
  }
  @include xl-min {
    background-color: pink; // apply above 1200px;
  }
}

.my-custom-class2 {
  @include custom-min(900px){
    border: 1px solid red; // apply if the screen width is greater than 900px;
  }
}

.my-custom-class3 {
  @include custom-minmax(600px, 700px){
    border: 1px solid blue; // between 600 and 700px apply this border color
  }
}

.my-custom-class4 {
  @include custom-max(500px){
    border: 3px dotted black; // below 500px apply border
  }
}
```

Utility Padding / Margin Functions

- `pt-` - padding top
- `pb-` - padding bottom
- `pl-` - padding left
- `pr-` - padding right
- `px-` - padding left/right
- `py-` - padding top / bottom
- `p-` - padding all 4 sides
- `mt-` - margin top
- `mb-` - margin bottom
- `ml-` - margin left
- `mr-` - margin right
- `mx-` - margin left/right
- `my-` - margin top / bottom
- `m-` - margin all 4 sides

Examples of using utility classes. The number denoted at the end is multipled by 2 to get the amount of margins it changes

```html
<div class="mt-4">
  This adds margin-top of 8px
</div>

<div class="pb-8">
  This adds padding-bottom of 16px
</div>

<div class="px-0">
  This adds padding-left and padding-right of 0px
</div>

<div class="m-3">
  This adds margins all around of 6px
</div>
```

Examples of using utility classes

See [_utility-single.scss](https://github.com/vincentntang/freshpoint/blob/master/src/sass/base/_utility-single.scss) for more examples, feel free to add your own single prop css classes here too

```html
<div class="text-left">
  Text Aligns Left
</div>

<div class="d-flex">
  Applies flexbox on div element
</div>
```

# Directory Structure

```
src/
└── scss/
    ├── base/
    │   ├── _media-queries_.scss          -> Utility mixins for media queries scoped inside classes
    │   ├── _normalize.scss               -> Base resets for HTML
    │   ├── _reset.scss                   -> Box model defaults
    │   ├── _typography.scss              -> Typography
    │   ├── _variables.scss               -> Variable Declarations
    │   ├── _utility-multi.scss           -> Helper Classes for margin/paddings and text for responsiveness
    │   ├── _utility-single.scss          -> Single Use Utility Classes
    │   └── _vendor-overrides_.scss       -> Put Bootstrap / Material UI Overrides here etc if you use another UI framework
    ├── pages/
    │   ├── _home.scss                    -> Home Page specific Styles on `/` route
    │   ├── _login.scss                   -> /login specific styles
    │   └── _register.scss                -> /register specific styles
    └── reusable/
        └── _profile-menu.scss            -> Add your component styles here in reusable
        main.scss
```

Folder Struct:

- Base is used for utility / initializations for sass
- Pages are specific to routes, generally kept to a minimum
- Reusable is any specific component styling

# Adding New Files

`Main.scss` is the main import for all other files. You can add additional reference files here

```scss
//==============================================================================
// Configuration
//==============================================================================

@import 'base/variables';
@import 'base/media-queries';
@import 'base/normalize';
@import 'base/reset';
@import 'base/typography';
@import 'base/utility-multi';
@import 'base/utility-single';
@import 'base/vendor-overrides';

//==============================================================================
// Pages
//==============================================================================

@import 'pages/home';
@import 'pages/login';
@import 'pages/register';

//==============================================================================
// Reusable Components
//==============================================================================

@import 'reusable/profile-menu';
```

# Liscense

The code is open source and available under the [MIT Liscense](https://opensource.org/licenses/MIT)

Built and maintained by [Vincent Tang](https://vincentntang.com)