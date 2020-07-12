(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{tHy7:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n("Fcif"),s=n("+I+c"),i=(n("mXGw"),n("/FXl")),a=n("TjRS"),l=(n("aD51"),{});void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/hooks/usePostTitle.mdx"}});var c={_frontmatter:l},r=a.a;function p(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(i.b)(r,Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"useposttitle"},"usePostTitle"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"usePostTitle")," hook returns the current post title and a function to update it."),Object(i.b)("h2",{id:"import"},"Import"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import {usePostTitle} from '@tinypixelco/wp-react-hooks'\n")),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"const [postTitle, setPostTitle] = usePostTitle()\n")),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("h3",{id:"display-post-title"},"Display post title"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"import {usePostTitle} from '@tinypixelco/wp-react-hooks'\n\nconst component = () => {\n  const [postTitle] = usePostTitle()\n\n  return (\n    <div>\n      Post title: {postTitle || null}\n    </div>\n  )\n}\n")),Object(i.b)("h3",{id:"update-post-title"},"Update post title"),Object(i.b)("p",null,"Here we are setting the post title to uppercase (if it isn't already)."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"import {useEffect} from '@wordpress/element'\nimport {usePostTitle} from '@tinypixelco/wp-react-hooks'\n\nconst component = () => {\n  const [title, setTitle] = usePostTitle()\n\n  useEffect(() => {\n    title !== title.toUpperCase()\n      && setTitle(title.toUpperCase())\n  }, [title])\n\n  return (\n    <div>\n      {title || ''}\n    </div>\n  )\n}\n")))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/hooks/usePostTitle.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-hooks-use-post-title-mdx-920513bb909acbcb84aa.js.map