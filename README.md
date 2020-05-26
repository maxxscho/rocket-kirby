# Rocket Boilerplate for Kirby
This is a Boilerplate Template for a new [Kirby](https://getkirby.com/) Site with the following features:
- "[Kirby Plainkit](https://github.com/getkirby/plainkit)" Installation with the `default.php` template and two additional snippets, `header.php` and `footer.php`.
- [Laravel Mix](https://laravel-mix.com/) for compiling Assets
- [TailwindCSS](https://tailwindcss.com/), a utility-first CSS Framework
- PostCSS as Preprocessor with PostCSS-Import set up
- [ESLint](https://eslint.org/)- and [Prettier](https://prettier.io/)-Setup for code quality

## Installation
Clone or Download this repo, run `npm install` and you're good to go.

## Compiling assets
- `npm run dev` compiles the assets
- `npm run watch` compiles the assets and watches for changes
- `npm run production` compiles and minifies the assets (TailwindCSS uses its [built-in `purge` feature](https://tailwindcss.com/docs/controlling-file-size) to controll its file-size)