/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
		colors: {
			primary: '#0471A6',
			dark: '#02040F',
			light: '#EDF5FC',
			gray: {
				50: '#f9f9fa',
				100: '#eceeee',
				200: '#dee1e2',
				300: '#d0d3d5',
				400: '#bfc5c7',
				500: '#adb4b7',
				600: '#99a1a5',
				700: '#808b90',
				800: '#616e74',
				900: '#364146',
			},
			blue: {
				50: '#f6fafc',
				100: '#e3f0f5',
				200: '#cfe4ee',
				300: '#b9d8e6',
				400: '#a0cadd',
				500: '#84bbd3',
				600: '#64a8c8',
				700: '#3b92ba',
				800: '#0473a6',
				900: '#024462',
			},
			indigo: {
				50: '#f8f9fd',
				100: '#ebedf8',
				200: '#dce0f3',
				300: '#ccd2ed',
				400: '#bac2e7',
				500: '#a7b1e0',
				600: '#909dd8',
				700: '#7585ce',
				800: '#5166c1',
				900: '#112eab',
			},
			violet: {
				50: '#faf9fd',
				100: '#f0ecf8',
				200: '#e4def3',
				300: '#d8ceee',
				400: '#cbbde8',
				500: '#bcaae1',
				600: '#aa95d9',
				700: '#957ad0',
				800: '#7a58c4',
				900: '#4718ad',
			},
			fuschia: {
				50: '#fcf8fd',
				100: '#f5eaf8',
				200: '#eedbf2',
				300: '#e6caec',
				400: '#ddb7e6',
				500: '#d3a2de',
				600: '#c789d5',
				700: '#b96bca',
				800: '#a43fbb',
				900: '#6d0385',
			},
			pink: {
				50: '#fdf8fb',
				100: '#f7eaf3',
				200: '#f2daea',
				300: '#ecc9e1',
				400: '#e5b6d6',
				500: '#dda0ca',
				600: '#d487bc',
				700: '#c967aa',
				800: '#b83790',
				900: '#7c0356',
			},
			red: {
				50: '#fdf8f9',
				100: '#f8eaed',
				200: '#f2dbdf',
				300: '#eccbd1',
				400: '#e6b8c1',
				500: '#dfa3ae',
				600: '#d68b99',
				700: '#cb6c7e',
				800: '#bb4057',
				900: '#83031b',
			},
			orange: {
				50: '#fcf9f7',
				100: '#f6ebe6',
				200: '#f0ddd4',
				300: '#e9cdc1',
				400: '#e1bcab',
				500: '#d9a993',
				600: '#ce9276',
				700: '#c27653',
				800: '#b14f22',
				900: '#732603',
			},
			yellow: {
				50: '#fbf9f3',
				100: '#f2eedb',
				200: '#e9e1c0',
				300: '#ded3a3',
				400: '#d3c483',
				500: '#c6b35e',
				600: '#b79f34',
				700: '#a48604',
				800: '#816a03',
				900: '#4c3e02',
			},
			lime: {
				50: '#f8faf2',
				100: '#e9f1d7',
				200: '#d8e6ba',
				300: '#c6db99',
				400: '#b2ce75',
				500: '#9bc04c',
				600: '#80ae1b',
				700: '#689704',
				800: '#527703',
				900: '#304602',
			},
			green: {
				50: '#f5fbf4',
				100: '#e0f3dc',
				200: '#caeac2',
				300: '#b0dfa6',
				400: '#94d485',
				500: '#72c65f',
				600: '#49b630',
				700: '#209f04',
				800: '#1a7d03',
				900: '#0f4a02',
			},
			teal: {
				50: '#f4fbf6',
				100: '#ddf3e4',
				200: '#c4ead0',
				300: '#a7e0b9',
				400: '#87d49f',
				500: '#61c781',
				600: '#32b65c',
				700: '#049f35',
				800: '#037e2a',
				900: '#024a19',
			},
			cyan: {
				50: '#f4fbfa',
				100: '#dbf2ee',
				200: '#c1e9e1',
				300: '#a3ded3',
				400: '#81d2c3',
				500: '#5ac4b1',
				600: '#29b399',
				700: '#049b7f',
				800: '#037b64',
				900: '#02483b',
			},
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				light: {
					...require('daisyui/src/colors/themes')[
						'[data-theme=light]'
					],
					primary: '#2FF3E0',
					'primary-content': '#02040F',
					'primary-focus': '#957ad0',
					'base-100': '#EDF5FC',
					'base-200': '#f9f9fa',
					'base-300': '#eceeee',
					'base-content': '#02040F',
				},
			},
			{
				dark: {
					...require('daisyui/src/colors/themes')[
						'[data-theme=dark]'
					],
					primary: '#2FF3E0',
					'primary-content': '#EDF5FC',
					'primary-focus': '#29b399',
					'base-100': '#191919',
					'base-200': '#191919BF',
					'base-300': '#1E1E1E',
					'base-content': '#EDF5FC',
					neutral: '#1E1E1E',
				},
			},
		],
	},
};
