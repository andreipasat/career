module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', {
        lineHeight: '16px',
      }],
      'xs-no-line-height': ['12px', {
      }],
      sm: ['14px', {
        lineHeight: '22px',
      }],
      'sm-2': ['16px',{
        lineHeight: '20px',
      }],
      lg: ['18px', {
        lineHeight: '22px',
      }],
      'lg-no-line-height': ['18px', {
      }],
      'lg-1': ['19px', {
        lineHeight: '24px',
      }],
      xl: [ '32px',{
        lineHeight: '34px'
      }]
    },
    colors: {
      white: '#FFF',
      neutral: '#262B33',
      'neutral-2': '#1E2532',
      'gray-0': '#C1C9DE',
      'gray-1': '#D9DEEB',
      'gray-2': '#E5E5E5',
      'gray-3': '#828BA2',
      'gray-4': '#EFF2F9',
      'gray-b': '#F7F9FC',
      green: '#207544',
      indigo: '#2F8DEB',
      blue: '#2196F3',
      'indigo-2': '#1A91F0',
      red: '#FF0000'
    },
    extend: {
      fontFamily: {
        tt_commons: ['"TTCommons"', "sans-serif"],
        tt_commons_light: ['"TTCommonsLight"', "sans-serif"],
      },
      maxWidth: {
        '246': '246px',
      },
      minHeight: {
        '154': '154px',
        '264': '264px',
      },
      maxHeight: {
        '154': '154px',
        '264': '264px',
      },
      spacing: {
        '6px': '6px',
      }
    },
  },
  variants: {
    fill: ['hover', 'focus'], // this line does the trick
  },
  plugins: [
  ],
}
