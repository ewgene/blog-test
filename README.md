# Nuxt starter template for blogging in Markdown (and soon NetlifyCMS)

This project is an example on how to implement a static blog in NuxtJS.
Articles will be included to Nuxt build as static resources, which speeds up the site loading.

#static #serverless #static #blog #markdown #md #nuxt #typescript #ts

## Prerequisites to using this project

```bash
# generate json with blog slug & file path by languages
$ npm run blog

```

You need to run `build-blogs.js` script each time you add or delete an article from `./blog/{en, fr, …}`.
This will auto-generates the `blogs.json` file which is read by `nuxt.config.ts` and the `ContentHelper.ts` which imports your article list.

## Installation

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run blog
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

## TODO

• Date handling : is before / is after
• draft status

## Licence

CC BY-NC-SA 4.0
