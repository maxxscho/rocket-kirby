module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
      './site/snippets/**/*.php',
      './site/templates/**/*.php',
      './src/**/*.js',
      './src/**/*.vue',
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
