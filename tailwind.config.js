/** @type {import('tailwindcss').Config} */

export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				primary: [
					'Outfit',
					'sans-serif'
				],
				secondary: [
					'Nohemi',
					'sans-serif'
				],
				aeonik: [
					'Aeonik Pro TRIAL',
					'sans-serif'
				],
				clash: [
					'Clash Display',
					'sans-serif'
				],
				helvetica: [
					'Helvetica Neue LT Std',
					'sans-serif'
				]
			},
			backgroundImage: {
				'howWorkGradient': 'linear-gradient(334.82deg, rgba(255, 255, 255, 0) 1.7%, rgba(10, 196, 255, 0.2) 143.21%)',

				'darkGradientBg': 'linear-gradient(334.82deg, rgba(42, 44, 56, 0) 1.7%, rgba(16, 112, 143, 0.2) 143.21%)'
			},
			colors: {
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					light: '#3997FF',
					dark: '#2170CC',
					50: '#EEF2FF',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				light: '#FAFAFA',
				dark: '#121212',
				cardDark: '#2A2C38',
				lightBorder: '#E2E2E2',
				darkBorder: '#313131',
				textGray: '#667085',
				pragraphText: '#7B7B7B',
				titleColor: '#1A1A1A',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			boxShadow: {
				card: '0px 16px 44px 0px #00000012',
				input: '0px 2px 4px 0px #0000000A',
				header: '0px 16px 44px 0px #00000012',
				darkBtn: '0px 4px 14.4px 0px #EEE7FE66',
				priceShadow: '0px 29.54px 30.68px 0px #A791D217'
			},
			container: {
				center: true,
				padding: '1rem',
				screens: {
					xl: '1280px',
					'2xl': '1536px'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
}

