const mix = require('laravel-mix');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const childProcess = require('child_process')

mix
  .setPublicPath('./');

mix
  .sass(
    '_resources/styles/main.scss',
    '_assets/css/main.css',
    { sassOptions: { outputStyle: 'compressed' } }
  )
  .options({
    postCss: [
      require('css-declaration-sorter')({
        order: 'smacss'
      })
    ],
    autoprefixer: {
      options: {
        browsers: [
          'last 6 versions',
        ]
      }
    }
	});

mix
  .combine([
    '_resources/scripts/includes/*',
    '_resources/scripts/main.js'
  ],
    '_assets/scripts/scripts.bundle.js'
  );

mix
  .options({
    processCssUrls: false,
    postCss: [
      require('postcss-nested-ancestors'),
      require('postcss-nested'),
      require('postcss-import'),
      require('tailwindcss'),
      require('autoprefixer'),
    ]
  });

mix
  .webpackConfig({
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          { from: "_resources/icons/", to: "_assets/icons/", noErrorOnMissing: true },
					{ from: "_resources/fonts/", to: "_assets/fonts/", noErrorOnMissing: true },
					{ from: "_resources/images/", to: "_assets/images/", noErrorOnMissing: true },
        ],
      }),
      new ImageminPlugin({
        test: /\.(jpe?g|png|jpg|gif|svg)$/i,
        plugins: [
          imageminMozjpeg({
            quality: 80,
          })
        ]
      }),
      new StyleLintPlugin({
        files: './resources/styles/**/*.scss',
        configFile: './.stylelintrc'
      }),
    ]
  });

mix
  .browserSync({
    proxy: false,
		open: 'external',
		injectChanges: false,
		server: {
      baseDir: '_site/'
    },
		files: [
			'_pages/**/*',
			'_posts/**/*',
			'_layouts/**/*',
			'_includes/**/*',
			'_drafts/**/*',
			'_resources/**/*'
		]
  });

mix
  .disableNotifications();

mix
	.after(() => {
		childProcess.execSync('bundle exec jekyll build')
	});

mix
  .version();