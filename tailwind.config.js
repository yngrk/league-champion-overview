/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'lol-blue-1': '#CDFAFA',
        'lol-blue-2': '#0AC8B9',
        'lol-blue-3': '#0397AB',
        'lol-blue-4': '#005A82',
        'lol-blue-5': '#0A323C',
        'lol-blue-6': '#091428',
        'lol-blue-7': '#0A1428',
        'lol-gold-1': '#F0E6D2',
        'lol-gold-2': '#C8AA6E',
        'lol-gold-3': '#C8AA6E',
        'lol-gold-4': '#C89B3C',
        'lol-gold-5': '#785A28',
        'lol-gold-6': '#463714',
        'lol-gold-7': '#32281E',
        'lol-gray-1': '#A09B8C',
        'lol-gray-2': '#5B5A56',
        'lol-gray-3': '#3C3C41',
        'lol-gray-4': '#1E2328',
        'lol-gray-5': '#1E282D',
        'lol-gray-6': '#010A13'
      },
      fontFamily: {
        leaguePrimary: ['BeaufortForLoL', 'sans-serif'],
        leagueSecondary: ['Spiegel', 'sans-serif']
      }
    }
  },
  plugins: []
}
