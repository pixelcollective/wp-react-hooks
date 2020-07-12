const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-hooks-mdx": hot(preferDefault(require("/Users/kellymears/code/projects/cli/bud/bud-sandbox/web/app/themes/wp-react-hooks/src/hooks.mdx"))),
  "component---src-hooks-use-settings-mdx": hot(preferDefault(require("/Users/kellymears/code/projects/cli/bud/bud-sandbox/web/app/themes/wp-react-hooks/src/hooks/useSettings.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/kellymears/code/projects/cli/bud/bud-sandbox/web/app/themes/wp-react-hooks/.docz/src/pages/404.js")))
}

