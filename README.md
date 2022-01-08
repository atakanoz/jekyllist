&nbsp;
![Jekyllist Boilerplate Logo](https://atakanoz.com/img/jekyllist-logo.svg)

# Jekyllist - Modern Boilerplate on Jekyll

Jekyllist is a production ready boilerplate for humans who wants to build simple websites (portfolio sites, basic landing pages, coming soon templates) with the modern tech stack.

#### Features

- 🔥 [Jekyll](https://jekyllrb.com) for Static Site Generator
- 🎨 Integrated with [Tailwind CSS](https://tailwindcss.com) (with [PurgeCSS](https://purgecss.com) and JIT)
- 💅 [PostCSS](https://postcss.org) for processing [Tailwind CSS](https://tailwindcss.com)
- ⚡️ Lazy load images with [lazysizes](https://github.com/aFarkas/lazysizes)
- ✨ Compress image with [Imagemin](https://github.com/imagemin/imagemin)
- ✏️ Linter with [StyleLint](https://eslint.org)
- 🛠 Code Formatter with [Prettier](https://prettier.io)
- 💨 Live reload with [Browsersync](https://browsersync.io)
- 📦 Module Bundler with [Laravel Mix]https://laravel-mix.com)
- ✅ Cache busting
- 💯 Maximize lighthouse score

### Philosophy
At the time I decided to develop this boilerplate, I was looking for a simple and lightweight static site generators for building my personal portfolio website. I came across with Jekyll but I had no luck to find a great boilerplate template that adapted modern tech stacks. So I created this boilerplate in mind:

- Minimal code (HTML, CSS & JS). Add what you need
- Easy assets management (Images, SVG Icons, Fonts)
- Tidy partials (Snippets, template parts)
- Speed optimized
- SEO-friendly
- 🚀 Production-ready

### Requirements
Before using this boilerplate, please follow the official [Jekyll guideline](https://jekyllrb.com/docs/) to setup Jekyll on your local machine.
- Ruby version 2.5.0 or higher
- Bundler
- Jekyll
- Node.js
- Yarn

### Getting started

Run the following command on your local environment:

```
git clone --depth=1 https://github.com/atakanoz/jekyllist.git ./my-project-name
cd my-project-name
bundle install
yarn
```

Then, you can run locally in development mode with live reload:

```
yarn dev
```

### Deploy to production

You can see the results locally in production mode with:

```
yarn build
```

The generated HTML and CSS files are minified. It will also removed unused CSS from [Tailwind CSS](https://tailwindcss.com).

You can create an optimized production build with:

```
npm run build:production
```

Now, your blog is ready to be deployed. All generated files are located at `_site` folder, which you can deploy with any hosting service.

### Contributions

Everyone is welcome to contribute to this project. Feel free to open an issue if you have question or found a bug.

### License

Licensed under the MIT License, Copyright © 2022

See [LICENSE](LICENSE) for more information.

---

Made with ♥ by [Atakan Oz](https://atakanoz.com)