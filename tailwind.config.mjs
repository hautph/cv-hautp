/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'selector',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			padding: '1rem',
			screens: {
				xl: '1024px'
			}
		},
		extend: {
			typography: {
				DEFAULT: {
					css: {
						maxWidth: '100%'
					}
				}
			},
			animation: {
				'blob': 'blob 7s infinite',
				'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
				'pulse-slow': 'pulse-slow 3s infinite'
			},
			keyframes: {
				blob: {
					'0%': {
						transform: 'translate(0px, 0px) scale(1)',
					},
					'33%': {
						transform: 'translate(30px, -50px) scale(1.1)',
					},
					'66%': {
						transform: 'translate(-20px, 20px) scale(0.9)',
					},
					'100%': {
						transform: 'translate(0px, 0px) scale(1)',
					},
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)',
					},
				},
				'pulse-slow': {
					'0%, 100%': {
						boxShadow: '0 0 0 0 rgba(96, 165, 250, 0.4)',
					},
					'70%': {
						boxShadow: '0 0 0 15px rgba(96, 165, 250, 0)',
					},
				}
			},
			transforms: {
				'rotate-y-10': 'rotateY(10deg)',
				'rotate-y-neg-10': 'rotateY(-10deg)',
				'rotate-x-5': 'rotateX(5deg)',
				'rotate-x-neg-5': 'rotateX(-5deg)',
				'translate-z-10': 'translateZ(10px)',
				'translate-z-20': 'translateZ(20px)'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};