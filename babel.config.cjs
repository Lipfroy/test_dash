module.exports = {
  presets: [
    ['@babel/preset-env', { 
      targets: { node: 'current' },
      modules: false
    }],
    ['@babel/preset-react', { runtime: 'automatic' }]
  ],
  plugins: [
    ['@babel/plugin-transform-modules-commonjs', {
      allowTopLevelThis: true,
      loose: true,
      strict: false
    }]
  ]
}; 