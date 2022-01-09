module.exports = {
	content: [
		'_resources/**/*',
		'_pages/**/*.{html,md}',
		'_posts/**/*.{html,md}',
		'_layouts/**/*.html',
		'_drafts/**/*.{html,md}',
		'_includes/**/*',
		'./safelist.txt',
	],
	mode: 'jit',
  theme: {
    container: {
      center: true,
    },
  },
  plugins: [],
}