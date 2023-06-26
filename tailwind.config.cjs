/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			white: "#ffffff",
			accent: "#8358FF",
			"accent-dark": "#7444FF",
			"accent-light": "#9E7CFF",
			"accent-lighter": "#B9A0FF",
			"light-base": "#F5F8FA",
			green: "#10b981",
			orange: "#FEB240",
			"orange-bright": "#FA6D1E",
			red: "#EF4444",
			blue: "#428AF8",
			jacarta: {
			  base: "#5A5D79",
			  50: "#F4F4F6",
			  100: "#E7E8EC",
			  200: "#C4C5CF",
			  300: "#A1A2B3",
			  400: "#7D7F96",
			  500: "#5A5D79",
			  600: "#363A5D",
			  700: "#131740",
			  800: "#101436",
			  900: "#0D102D"
			}
		  },
		boxShadow: {
			none: "none",
			sm: "0px 1px 2px 0px rgba(13, 16, 45, 0.1)",
			base: "0px 1px 2px -1px rgba(13, 16, 45, 0.1), 0px 2px 4px 0px rgba(13, 16, 45, 0.1)",
			md: "0px 2px 4px -2px rgba(13, 16, 45, 0.1), 0px 4px 6px -1px rgba(13, 16, 45, 0.1)",
			lg: "0px 4px 6px -4px rgba(13, 16, 45, 0.1), 0px 10px 15px -3px rgba(13, 16, 45, 0.1)",
			xl: "0px 8px 10px -6px rgba(13, 16, 45, 0.1), 0px 20px 25px -5px rgba(13, 16, 45, 0.1)",
			"2xl": "0px 25px 50px -12px rgba(13, 16, 45, 0.1), 0px 12px 24px 0px rgba(13, 16, 45, 0.1)",
			"accent-volume":
			  "5px 5px 10px rgba(108, 106, 213, 0.25), inset 2px 2px 6px #A78DF0, inset -5px -5px 10px #6336E4",
			"white-volume": "5px 5px 10px rgba(108, 106, 212, 0.25), inset 2px 2px 6px #EEF1F9, inset -5px -5px 10px #DFE3EF"
		  },
	},
	plugins: [],
}
