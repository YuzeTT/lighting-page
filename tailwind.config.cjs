/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
	safelist: [
		{
      pattern: /border-(red|green|blue|pink)-(300|500)/,
    },
		{
      pattern: /hover\:border-(red|green|blue|pink)-(300|500)/,
    },
	]
}
