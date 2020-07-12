// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-hooks-mdx": () => import("./../../../src/hooks.mdx" /* webpackChunkName: "component---src-hooks-mdx" */),
  "component---src-hooks-use-selection-mdx": () => import("./../../../src/hooks/useSelection.mdx" /* webpackChunkName: "component---src-hooks-use-selection-mdx" */),
  "component---src-hooks-use-settings-mdx": () => import("./../../../src/hooks/useSettings.mdx" /* webpackChunkName: "component---src-hooks-use-settings-mdx" */),
  "component---src-pages-404-js": () => import("./../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */)
}

