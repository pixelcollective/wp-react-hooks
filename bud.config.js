const bud = require('@roots/budpack')

bud
  .srcPath('src')
  .distPath('dist')
  .bundle('hooks', [bud.src('hooks.js')])
  .babel(bud.preset('babel/preset-wp'))
  .hash(false)
  .dependencyManifest()

module.exports = bud
