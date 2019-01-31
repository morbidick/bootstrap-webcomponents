# How to contribute

## Communicating

* [polymer slack](https://bit.ly/polymerslack) `#bootstrap`

## Setup

* Install dependencies `npm install`
* Run dev Server with `npm start` and open your browser on [localhost:8081/demo](http://localhost:8081/demo)
* Run the [tests](tests) with `npm test`
* To produce a bundle run `npm run build`

## Implementing a new compoment

* write down a list of all theme and functional variants in `tests/component_upstream.html`
* evaluate native elements (e.g. dialog for modals or progress for the progress bar)
* design a simple api surface (e.g. setting the `href` or `toggle` attribute to the button component changes the underlying element) in `tests/component.html`
* open an issue with your idea
* implement the dom and functional parts
  * try to keep it simple
  * prefer `slots` over attributes/properties
  * provide sane defaults (a11y and user experience wise)
* implement the styles
  * have a look at the [upstream scss](https://github.com/twbs/bootstrap/blob/v4-dev/scss/_buttons.scss)
  * have a look at the resulting css in [your browser](http://localhost:8081/tests/button_upstream.html) (`npm start` first)
  * write the base css first, prefix css custom proberties with `bs`
  * for performance reasons implement static css that selects on host attributes
  * for theme variants loop over `styles/colors.js`
  * run the screenshot tests `npm test`, see the results in [test-results](test-results)
* extra goal: implement functional browser tests

## Resources

### Bootstrap

* [components](https://getbootstrap.com/docs/4.1/components/)
* [variables](https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss)

### Web components

#### Basics

* [web components introduction](https://www.webcomponents.org/introduction)
* [lit element docs](https://github.com/Polymer/lit-element#minimal-example)
* [lit-html docs](https://polymer.github.io/lit-html/)


#### Best Practices

* [aria authoring practices](https://www.w3.org/TR/wai-aria-practices-1.1/)
* [Google Dev Custom Element Best Practices](https://developers.google.com/web/fundamentals/web-components/best-practices)
* [ChromeLabs howto components](https://github.com/GoogleChromeLabs/howto-components)
* [Form Participation API](https://docs.google.com/document/d/1JO8puctCSpW-ZYGU8lF-h4FWRIDQNDVexzHoOQ2iQmY/edit?pli=1)

#### Other libraries

* [Elix](https://github.com/elix/elix)
* [Vaadin Elements](https://github.com/search?q=topic%3Awebcomponents+org%3Avaadin&type=Repositories)
* [Github Elements](https://github.com/search?q=topic%3Aweb-components+org%3Agithub&type=Repositories)
* [predix ui](https://www.predix-ui.com/#/elements)

#### Styling

* [native css reset](https://caniuse.com/#search=appearance)
* [vaadin themeable mixin](https://github.com/vaadin/vaadin-themable-mixin)
* [::part and ::theme spec](https://drafts.csswg.org/css-shadow-parts-1/)
* [CSS Modules](https://github.com/w3c/webcomponents/issues/759) and [constructible Stylesheets](https://github.com/WICG/construct-stylesheets/blob/gh-pages/explainer.md)
* [color calculations in pure css](https://css-tricks.com/switch-font-color-for-different-backgrounds-with-css/)
