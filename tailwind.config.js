module.exports = {
	content: [],
	mode: 'jit',
	purge: {
		content: [
			'_resources/**/*',
			'_pages/**/*.{html,md}',
			'_posts/**/*.{html,md}',
			'_layouts/**/*.html',
			'_drafts/**/*.{html,md}',
			'./safelist.txt',
		],
	},
  theme: {
    extend: {},
  },
  plugins: [],
}
