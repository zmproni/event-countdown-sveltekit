/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,ts,svelte}'],
	theme: {
		extend: {
			fontFamily: {
				inter: "'Inter', sans-serif",
				rubik: "'Rubik', sans-serif"
			}
		}
	},
	plugins: []
};
