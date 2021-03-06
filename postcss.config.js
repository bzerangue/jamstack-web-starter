const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project 
  content: [
    'dist/**/*.html', 'dist/**/*.js'
  ],
  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('@tailwindcss/ui'),
    require('autoprefixer'),
    require('postcss-nested'),
    ...process.env.NODE_ENV === 'production' ?
    [purgecss] :
    []
  ]
}