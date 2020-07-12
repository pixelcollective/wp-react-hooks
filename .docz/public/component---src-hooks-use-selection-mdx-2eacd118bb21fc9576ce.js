(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{CcCD:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return a})),n.d(t,"default",(function(){return r}));var c=n("Fcif"),o=n("+I+c"),i=(n("mXGw"),n("/FXl")),l=n("TjRS"),a=(n("aD51"),{});void 0!==a&&a&&a===Object(a)&&Object.isExtensible(a)&&!a.hasOwnProperty("__filemeta")&&Object.defineProperty(a,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/hooks/useSelection.mdx"}});var s={_frontmatter:a},b=l.a;function r(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)(b,Object(c.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"useselection"},"useSelection"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"useSelection")," hook provides a way of consuming and modifying which blocks are currently selected."),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",Object(c.a)({parentName:"pre"},{className:"language-jsx"}),"import {useSelection} from '@tinypixelco/wp-react-hooks'\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(c.a)({parentName:"pre"},{className:"language-jsx"}),"const {selection, setSelection} = useSelection()\n")),Object(i.b)("h2",{id:"selection"},Object(i.b)("inlineCode",{parentName:"h2"},"selection")),Object(i.b)("pre",null,Object(i.b)("code",Object(c.a)({parentName:"pre"},{className:"language-js"}),"import {useSelection} from '@tinypixelco/wp-react-hooks'\n\nconst component = () => {\n  const {selection} = useSelection()\n\n  return (\n    <div>\n      {selection && JSON.stringify(selection)}\n    </div>\n  )\n}\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"selection")," object looks like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(c.a)({parentName:"pre"},{className:"language-jsx"}),"{\n  attributes: {}\n  clientId: \"881d5ee3-1672-4607-8b65-1fa7877adf0d\"\n  innerBlocks: []\n  isValid: true\n  name: 'acme-co/acme-block'\n}\n")),Object(i.b)("h2",{id:"setselection"},"setSelection"),Object(i.b)("p",null,"This block will always be selected."),Object(i.b)("pre",null,Object(i.b)("code",Object(c.a)({parentName:"pre"},{className:"language-jsx"}),"import {useSelection} from '@tinypixelco/wp-react-hooks'\n\nconst component = ({clientId}) => {\n  const {selection, setSelection} = useSelection()\n\n  useEffect(() => {\n    const notSelected = selection.clientId !== clientId\n\n    if (notSelected) {\n      setSelection(clientId)\n    }\n  }, [selection])\n\n  return (\n    <div>\n      Annoyingly, this block is always selected.\n    </div>\n  )\n}\n")),Object(i.b)("p",null,"Any actual use of ",Object(i.b)("inlineCode",{parentName:"p"},"setSelection")," would likely involve you:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Getting the block ID you want to select. There are other hooks in this library which may help."),Object(i.b)("li",{parentName:"ul"},"Developing criteria that needs to be met to trigger the selection (our example sidesteps this by just always firing, which is probably not what you want.)"),Object(i.b)("li",{parentName:"ul"},"Calling ",Object(i.b)("inlineCode",{parentName:"li"},"setSelection")," when that criteria is met.")),Object(i.b)("p",null,"But, this example allows us to demonstrate the functionality of the component in isolation."))}void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/hooks/useSelection.mdx"}}),r.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-hooks-use-selection-mdx-2eacd118bb21fc9576ce.js.map