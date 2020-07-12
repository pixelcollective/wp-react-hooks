const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/wp-react-hooks/',

  siteMetadata: {
    title: '@tinypixelco/wp-react-hooks',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: 'src',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [
          { name: 'Overview', menu: ['Hooks'] },
          { name: 'Block' },
          { name: 'Post' },
          { name: 'General' },
          { name: 'Data' },
        ],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root:
          '/Users/kellymears/code/projects/cli/bud/bud-sandbox/web/app/themes/wp-react-hooks/.docz',
        base: '/wp-react-hooks/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: 'docs',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: '@tinypixelco/wp-react-hooks',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3002,
        p: 3000,
        separator: '-',
        paths: {
          root:
            '/Users/kellymears/code/projects/cli/bud/bud-sandbox/web/app/themes/wp-react-hooks',
          templates:
            '/Users/kellymears/code/projects/cli/bud/bud-sandbox/web/app/themes/wp-react-hooks/node_modules/docz-core/dist/templates',
          docz:
            '/Users/kellymears/code/projects/cli/bud/bud-sandbox/web/app/themes/wp-react-hooks/.docz',
          cache:
            '/Users/kellymears/code/projects/cli/bud/bud-sandbox/web/app/themes/wp-react-hooks/.docz/.cache',
          app:
            '/Users/kellymears/code/projects/cli/bud/bud-sandbox/web/app/themes/wp-react-hooks/.docz/app',
          appPackageJson:
            '/Users/kellymears/code/projects/cli/bud/bud-sandbox/web/app/themes/wp-react-hooks/package.json',
          appTsConfig:
            '/Users/kellymears/code/projects/cli/bud/bud-sandbox/web/app/themes/wp-react-hooks/tsconfig.json',
          gatsbyConfig:
            '/Users/kellymears/code/projects/cli/bud/bud-sandbox/web/app/themes/wp-react-hooks/gatsby-config.js',
          gatsbyBrowser:
            '/Users/kellymears/code/projects/cli/bud/bud-sandbox/web/app/themes/wp-react-hooks/gatsby-browser.js',
          gatsbyNode:
            '/Users/kellymears/code/projects/cli/bud/bud-sandbox/web/app/themes/wp-react-hooks/gatsby-node.js',
          gatsbySSR:
            '/Users/kellymears/code/projects/cli/bud/bud-sandbox/web/app/themes/wp-react-hooks/gatsby-ssr.js',
          importsJs:
            '/Users/kellymears/code/projects/cli/bud/bud-sandbox/web/app/themes/wp-react-hooks/.docz/app/imports.js',
          rootJs:
            '/Users/kellymears/code/projects/cli/bud/bud-sandbox/web/app/themes/wp-react-hooks/.docz/app/root.jsx',
          indexJs:
            '/Users/kellymears/code/projects/cli/bud/bud-sandbox/web/app/themes/wp-react-hooks/.docz/app/index.jsx',
          indexHtml:
            '/Users/kellymears/code/projects/cli/bud/bud-sandbox/web/app/themes/wp-react-hooks/.docz/app/index.html',
          db:
            '/Users/kellymears/code/projects/cli/bud/bud-sandbox/web/app/themes/wp-react-hooks/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
