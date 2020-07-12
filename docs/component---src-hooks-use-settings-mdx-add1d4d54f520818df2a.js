(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{pKib:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n("Fcif"),s=n("+I+c"),i=(n("mXGw"),n("/FXl")),o=n("TjRS"),l=(n("aD51"),{});void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/hooks/useSettings.mdx"}});var r={_frontmatter:l},c=o.a;function b(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(i.b)(c,Object(a.a)({},r,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"usesettings"},"useSettings"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"useSettings")," hook provides an interface for consuming and modifying block editor settings."),Object(i.b)("h2",{id:"getting-started"},"Getting started"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Import the hook.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import {useSettings} from '@tinypixelco/wp-react-hooks'\n")),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Call the hook in the top-level of your component.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"const [settings, setSettings] = useSettings()\n")),Object(i.b)("p",null,"The hook returns an array with the settings object and a function to modify the settings object."),Object(i.b)("h2",{id:"basic-example"},"Basic example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import {useSettings} from '@tinypixelco/wp-react-hooks'\nimport {useEffect} from '@wordpress/element'\n\nconst component = () => {\n  const [settings, setSettings] = useSettings()\n\n  return (\n    <div>\n      {settings && JSON.stringify(settings)}\n    </div>\n  )\n}\n")),Object(i.b)("h2",{id:"use-cases"},"Use cases"),Object(i.b)("h3",{id:"modify-the-post-title-placeholder"},"Modify the post title placeholder"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"useEffect(() => {\n  setSettings({\n    titlePlaceholder: `Let's get started`,\n  })\n}, [])\n")),Object(i.b)("h3",{id:"dynamically-add-a-new-font-size"},"Dynamically add a new font size."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"const dynamicFontSize = {\n  name: 'Dynamic',\n  shortName: 'd',\n  size: 69,\n  slug: 'dynamic',\n}\n\nuseEffect(() => {\n  setSettings({\n    fontSizes: [\n      ...settings.fontSizes,\n      dynamicFontSize,\n    ],\n  })\n}, [])\n")),Object(i.b)("h3",{id:"disable-custom-style-settings"},"Disable custom style settings"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"useEffect(() => {\n  setSettings({\n    disableCustomColors: true,\n    disableCustomFontSizes: true,\n    disableCustomGradients: true,\n  })\n}, [])\n")),Object(i.b)("h2",{id:"details"},"Details"),Object(i.b)("p",null,"This hook utilizes ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/wp-react-hooks/store/use-block-editor-store"}),"store/useBlockEditorStore"),"."),Object(i.b)("p",null,"Relevant WordPress documentation:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.wordpress.org/block-editor/data/data-core-block-editor/#getSettings"}),"https://developer.wordpress.org/block-editor/data/data-core-block-editor/#getSettings")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.wordpress.org/block-editor/data/data-core-block-editor/#updateSettings"}),"https://developer.wordpress.org/block-editor/data/data-core-block-editor/#updateSettings"))),Object(i.b)("h3",{id:"the-settings-object"},"The ",Object(i.b)("inlineCode",{parentName:"h3"},"settings")," object"),Object(i.b)("p",null,"It's a big object. There is a bit of editorializing going on with the ordering here (most useful seeming stuff at the top)."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const settings = {\n  alignWide: true,\n  allowedBlockTypes: true,\n  titlePlaceholder: "Add title",\n  bodyPlaceholder: "Start writing or type / to choose a block",\n  colors: [\n    { name: null, slug: "primary", color: "#0073a8" },\n    // ...\n  ],\n  gradients: [\n    {\n      name: "Vivid cyan blue to vivid purple",\n      gradient: "linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)",\n      slug: "vivid-cyan-blue-to-vivid-purple"\n    },\n    // ...\n  ],\n  fontSizes: [\n    { name: "Small", shortName: "S", size: 19.5, slug: "small" },\n    // ...\n  ],\n  imageSizes: [\n    { slug: "thumbnail", name: "Thumbnail" },\n    // ...\n  ],\n  imageDimensions: {\n    thumbnail: { width: 150, height: 150, crop: true },\n    // ...\n  },\n  styles: [\n    {\n      css: ":root{--wp-admin-theme-color:#007cba; ..."\n    },\n    // ...\n  ],\n  allowedMimeTypes: null,\n  disableCustomColors: false,\n  disableCustomFontSizes: false,\n  disableCustomGradients: false,\n  focusMode: false,\n  hasFixedToolbar: false,\n  isRTL: false,\n  maxWidth: 580,\n  maxUploadFileSize: 0,\n  availableLegacyWidgets: {\n    WP_Widget_Pages: {\n      name: "Pages",\n      description: "A list of your site’s Pages.",\n      isReferenceWidget: false,\n      isHidden: true\n    },\n    // ...\n  },\n  hasPermissionsToManageWidgets: true,\n  \'__experimentalBlockPatterns\': [\n    {\n      title: "Two Columns of Text",\n      categories: ["columns", text"],\n      content: "\x3c!-- wp:columns --\x3e\\n<div class=\\"wp-block-columns\\"> ...",\n      name: "core/text-two-columns"\n    },\n    // ..\n  ],\n  \'__experimentalBlockPatternCategories\': [\n    { name: "text", label: "Text" },\n    // ...\n  ],\n  \'__experimentalCanUserUseUnfilteredHTML\': true,\n  \'__experimentalEnableLegacyWidgetBlock\': false,\n  \'__experimentalBlockDirectory\': false,\n  \'__experimentalEnableFullSiteEditing\': false,\n  \'__experimentalEnableFullSiteEditingDemo\': false,\n  \'__mobileEnablePageTemplates\': false,\n  \'__experimentalDisableCustomUnits\': false,\n  \'__experimentalDisableCustomLineHeight\': false,\n  \'__experimentalEnableCustomSpacing\': false,\n  \'__experimentalEnableLinkColor\': false,\n  \'__experimentalFeatures\': { typography: { dropCap: false } },\n  \'__experimentalPreferredStyleVariations\': { value: {} },\n  \'__experimentalReusableBlocks\': []\n}\n')))}void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/hooks/useSettings.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-hooks-use-settings-mdx-add1d4d54f520818df2a.js.map