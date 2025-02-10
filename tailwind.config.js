/** @type {import('tailwindcss').Config} */
import { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import daisyui from "daisyui";

export default {
	content: ["./src/**/*.{js,ts,jsx,tsx,html,hbs,astr,astro}"],
	theme: {
		extend: {
			fontWeight: {
				thin: 100,
				extralight: 200,
				light: 300,
				normal: 400,
				medium: 500,
				semibold: 600,
				bold: 700,
				extrabold: 800,
				black: 900,
			},
			fontSize: {
				"4xl": ["2.25rem", "2.5rem"],
			},
			borderRadius: {
				"4xl": "2rem",
			},
			borderWidth: {
				1: "0.25rem",
				3: "0.1875rem",
			},
			animation: {
				"scale-up-ver-center": "scale-up-ver-center 0.4s cubic-bezier(0.165, 0.840, 0.440, 1.000) 2s 3 both",
			},
			keyframes: {
				"scale-up-ver-center": {
					"0%": {
						transform: "scaleY(0)",
					},
					to: {
						transform: "scaleY(1)",
					},
				},
			},
		},
	},
	plugins: [daisyui],
	daisyui: {
		themes: ["light"],
	},
};
