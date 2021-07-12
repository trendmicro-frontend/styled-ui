_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[31],{"97Jx":function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,n.apply(this,arguments)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},GghM:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var r=n("97Jx"),a=n.n(r),i=n("m3Bd"),o=n.n(i),l=(n("ERkP"),n("ZVZ0")),c=["components"],p={};function b(e){var t=e.components,n=o()(e,c);return Object(l.b)("wrapper",a()({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",null,"Divider"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"Divider")," is used to visually separate content in a list or group."),Object(l.b)("h2",null,"Import"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"import { Divider } from '@trendmicro/react-styled-ui';\n")),Object(l.b)("h2",null,"Usage"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"Divider")," renders a thin line vertically or horizontally."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"<Divider />\n")),Object(l.b)("h3",null,"Orientation"),Object(l.b)("p",null,"Pass the ",Object(l.b)("inlineCode",{parentName:"p"},"orientation")," prop and set it to either ",Object(l.b)("inlineCode",{parentName:"p"},"horizontal")," or ",Object(l.b)("inlineCode",{parentName:"p"},"vertical"),"."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},'<Stack direction="column" spacing="4x">\n  <Divider variand="solid" orientation="horizontal" />\n  <Divider variant="dashed" orientation="horizontal" />\n  <Divider variant="dotted" orientation="horizontal" />\n</Stack>\n')),Object(l.b)("p",null,"If the vertical orientation is used, make sure that the parent element is assigned a height."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},'<Stack direction="row" spacing="4x" height="12x">\n  <Divider variant="solid" orientation="vertical" />\n  <Divider variant="dashed" orientation="vertical" />\n  <Divider variant="dotted" orientation="vertical" />\n</Stack>\n')),Object(l.b)("h2",null,"Composition"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},'<Flex>\n  <Icon icon="align-right" m="1x" />\n  <Divider orientation="vertical" />\n  <Icon icon="align-center" m="1x" />\n  <Divider orientation="vertical" />\n  <Icon icon="align-left" m="1x" />\n</Flex>\n')),Object(l.b)("h2",null,"Props"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"left"},"Name"),Object(l.b)("th",{parentName:"tr",align:"left"},"Type"),Object(l.b)("th",{parentName:"tr",align:"left"},"Default"),Object(l.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"variant"),Object(l.b)("td",{parentName:"tr",align:"left"},"string"),Object(l.b)("td",{parentName:"tr",align:"left"},"'solid'"),Object(l.b)("td",{parentName:"tr",align:"left"},"The variant of the divider style to use. One of: ",Object(l.b)("inlineCode",{parentName:"td"},"'solid'"),", ",Object(l.b)("inlineCode",{parentName:"td"},"'dashed'"),", ",Object(l.b)("inlineCode",{parentName:"td"},"'dotted'"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"orientation"),Object(l.b)("td",{parentName:"tr",align:"left"},"string"),Object(l.b)("td",{parentName:"tr",align:"left"},"'horizontal'"),Object(l.b)("td",{parentName:"tr",align:"left"},"The orientation of the divider. One of: ",Object(l.b)("inlineCode",{parentName:"td"},"'horizontal'"),", ",Object(l.b)("inlineCode",{parentName:"td"},"'vertical'"))))))}b.isMDXComponent=!0},Km8e:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},LdEA:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a},e.exports.default=e.exports,e.exports.__esModule=!0},VJyQ:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/divider",function(){return n("GghM")}])},ZVZ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var r=n("ERkP"),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"===typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=b(n),u=r,O=d["".concat(o,".").concat(u)]||d[u]||s[u]||i;return n?a.a.createElement(O,l(l({ref:t},p),{},{components:n})):a.a.createElement(O,l({ref:t},p))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"===typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},m3Bd:function(e,t,n){var r=n("LdEA");e.exports=function(e,t){if(null==e)return{};var n,a,i=r(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i},e.exports.default=e.exports,e.exports.__esModule=!0}},[["VJyQ",0,1]]]);