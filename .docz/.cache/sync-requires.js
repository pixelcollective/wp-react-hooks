const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-hooks-mdx": hot(preferDefault(require("/Users/kellymears/code/projects/cli/bud/bud-sandbox/web/app/themes/wp-react-hooks/src/hooks.mdx"))),
  "component---src-hooks-store-use-block-editor-store-mdx": hot(preferDefault(require("/Users/kellymears/code/projects/cli/bud/bud-sandbox/web/app/themes/wp-react-hooks/src/hooks/store/useBlockEditorStore.mdx"))),
  "component---src-hooks-use-blocks-mdx": hot(preferDefault(require("/Users/kellymears/code/projects/cli/bud/bud-sandbox/web/app/themes/wp-react-hooks/src/hooks/useBlocks.mdx"))),
  "component---src-hooks-use-colors-mdx": hot(preferDefault(require("/Users/kellymears/code/projects/cli/bud/bud-sandbox/web/app/themes/wp-react-hooks/src/hooks/useColors.mdx"))),
  "component---src-hooks-use-font-sizes-mdx": hot(preferDefault(require("/Users/kellymears/code/projects/cli/bud/bud-sandbox/web/app/themes/wp-react-hooks/src/hooks/useFontSizes.mdx"))),
  "component---src-hooks-use-post-template-mdx": hot(preferDefault(require("/Users/kellymears/code/projects/cli/bud/bud-sandbox/web/app/themes/wp-react-hooks/src/hooks/usePostTemplate.mdx"))),
  "component---src-hooks-use-post-title-mdx": hot(preferDefault(require("/Users/kellymears/code/projects/cli/bud/bud-sandbox/web/app/themes/wp-react-hooks/src/hooks/usePostTitle.mdx"))),
  "component---src-hooks-use-post-type-mdx": hot(preferDefault(require("/Users/kellymears/code/projects/cli/bud/bud-sandbox/web/app/themes/wp-react-hooks/src/hooks/usePostType.mdx"))),
  "component---src-hooks-use-selection-mdx": hot(preferDefault(require("/Users/kellymears/code/projects/cli/bud/bud-sandbox/web/app/themes/wp-react-hooks/src/hooks/useSelection.mdx"))),
  "component---src-hooks-use-settings-mdx": hot(preferDefault(require("/Users/kellymears/code/projects/cli/bud/bud-sandbox/web/app/themes/wp-react-hooks/src/hooks/useSettings.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/kellymears/code/projects/cli/bud/bud-sandbox/web/app/themes/wp-react-hooks/.docz/src/pages/404.js")))
}

