# Frontend Mentor - Space tourism website solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*

### Screenshot



### Links

- [Live Site URL]()

## My process

### Built with

- [Nextjs](https://nextjs.org/)
- JavaScript
- JSX
- [Sass](https://sass-lang.com/)
- JavaScript
- Flexbox
- Desktop-first workflow

### What I learned

I learned A LOT by coding this project. At first, I thought that using an API was only about fetching it and displaying the contents, as easily as displaying objects in Django, for instance. I was incredibly wrong.

Unlike my other API solutions posted in Frontend Mentor (as is. I may fix them later), this one doesn't have any [hydration problems](https://nextjs.org/docs/messages/react-hydration-error) whatsoever. I learned to use the React hook [useEffect](https://nextjs.org/docs/pages/building-your-application/data-fetching/client-side#client-side-data-fetching-with-useeffect
) in order to properly fetch and render the objects with no hydration problems.

I also used, for the first time ever (on an actual project), the [.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) function. Implementing the search function was actually my biggest problem.

This was my first time implementing a theme changer (to toggle light/dark mode). Please check [useful resources](#useful-resources) to learn how I did it.

### Useful resources

- [How to Create a Dark Mode in Sass](https://medium.com/@katiemctigue/how-to-create-a-dark-mode-in-sass-609f131a3995)
- [Ekaterine Mitagvaria's code](https://github.com/catherineisonline/rest-countries)
- [Client-side data fetching with useEffect](https://nextjs.org/docs/pages/building-your-application/data-fetching/client-side#client-side-data-fetching-with-useeffect)

## Author

- Github - [daniel-web-developer](https://github.com/daniel-web-developer)
- Frontend Mentor - [@daniel-web-developer](https://www.frontendmentor.io/profile/daniel-web-developer)

## Acknowledgments

I'd like to point out that my code was loosely inspired on [Ekaterine Mitagvaria's](https://www.frontendmentor.io/profile/catherineisonline) solution ([live site](https://restful-countries.vercel.app/), [Frontend Mentor solution](https://www.frontendmentor.io/solutions/rest-countries-api-with-color-theme-switcher-SySqXmn49) and [code](https://github.com/catherineisonline/rest-countries)).
