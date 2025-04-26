# Flarial Website
Welcome to the GitHub repository for Flarial's website!

Flarial's website is made in the [Astro](https://astro.build/) framework and is styled with vanilla css.

## Getting Started
1. Clone the repository
```sh
git clone https://github.com/flarialmc/website && cd website
```

2. Install all the dependencies needed
```sh
npm install
```

3. Run the development server
```sh
npm run dev
```

Open http://localhost:4321/ in your browser.

4. Contribute
if you want to contribute check out the [contribute](#contribute) section.

## Structure
This project retains most of the vanilla structures you'd see in a [typical astro project](https://docs.astro.build/en/basics/project-structure/).

The note worthy changes have been listed below.
```
src/
|   assets/
|   |   contributors/             lists of various contributors in the contributors section/page
|   |   |   features.json         text for the features section on the main page
|   |   |   questions.json        text for the FAQ page
|   components/
|   |   section/                  components for each section of individual pages
|   |   parts/                    smaller parts of the ui
public/
|   fonts/                        fonts
|   icons/                        icons
|   images/                       images
```

## Contribute
Bug fixes, performance improvements, etc are all welcome!

However, changing the aesthetics of this website should be done with caution. You should look at the styleguide for Flarial before trying to add changes to/creating existing pages.

If you have any further questions you can also contact Flarial's staff. They're always happy to help.
