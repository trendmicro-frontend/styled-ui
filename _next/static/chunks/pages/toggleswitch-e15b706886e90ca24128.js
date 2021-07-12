_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[72],{"8g8E":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var a=n("97Jx"),r=n.n(a),l=n("m3Bd"),b=n.n(l),c=(n("ERkP"),n("ZVZ0")),o=["components"],i={};function p(e){var t=e.components,n=b()(e,o);return Object(c.b)("wrapper",r()({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",null,"ToggleSwitch"),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"ToggleSwitch")," component is used as an alternative for the ",Object(c.b)("a",{parentName:"p",href:"/checkbox"},"Checkbox"),"\ncomponent, switch between enabled and disabled states."),Object(c.b)("h2",null,"Import"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'import { ToggleSwitch } from @trendmicro/react-styled-ui";\n')),Object(c.b)("h2",null,"Usage"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},'<Flex align="center">\n  <ToggleSwitch pr="1x" id="email-alerts" />\n  <label htmlFor="email-alerts">Enable email alerts?</label>\n</Flex>\n')),Object(c.b)("h3",null,"Sizes"),Object(c.b)("p",null,"Pass the ",Object(c.b)("inlineCode",{parentName:"p"},"size")," prop to change the size of the ",Object(c.b)("inlineCode",{parentName:"p"},"ToggleSwitch"),"."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},'<Flex align="center">\n  <ToggleSwitch size="sm" />\n  <ToggleSwitch size="md" />\n  <ToggleSwitch size="lg" />\n</Flex>\n')),Object(c.b)("h3",null,"ToggleSwitch background color"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Use the ",Object(c.b)("inlineCode",{parentName:"p"},"variantColor")," prop to change the checked background color of the ",Object(c.b)("inlineCode",{parentName:"p"},"ToggleSwitch"),". ",Object(c.b)("inlineCode",{parentName:"p"},"variantColor")," can be any color key with key ",Object(c.b)("inlineCode",{parentName:"p"},"50"),"(hover), ",Object(c.b)("inlineCode",{parentName:"p"},"60"),"(checked, focus) that exist in the ",Object(c.b)("inlineCode",{parentName:"p"},"theme.colors"),"."),Object(c.b)("blockquote",{parentName:"li"},Object(c.b)("p",{parentName:"blockquote"},"That means the ",Object(c.b)("inlineCode",{parentName:"p"},"red:60")," exists in the ",Object(c.b)("inlineCode",{parentName:"p"},"theme.colors"),' then can use variantColor="red".'))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",{parentName:"p",href:"./colors"},"Learn more about colors theming"),"."))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},'<Flex align="center">\n  <ToggleSwitch defaultChecked variantColor="red" />\n  <ToggleSwitch defaultChecked size="lg" variantColor="green" />\n</Flex>\n')),Object(c.b)("h2",null,"Props"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"),Object(c.b)("th",{parentName:"tr",align:"left"},"Default"),Object(c.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"size"),Object(c.b)("td",{parentName:"tr",align:"left"},"string"),Object(c.b)("td",{parentName:"tr",align:"left"},"'md'"),Object(c.b)("td",{parentName:"tr",align:"left"},"The size of the switch. One of: ",Object(c.b)("inlineCode",{parentName:"td"},"'sm'"),", ",Object(c.b)("inlineCode",{parentName:"td"},"'md'"),", ",Object(c.b)("inlineCode",{parentName:"td"},"'lg'"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"variantColor"),Object(c.b)("td",{parentName:"tr",align:"left"},"string"),Object(c.b)("td",{parentName:"tr",align:"left"},"blue"),Object(c.b)("td",{parentName:"tr",align:"left"},"The background color of the switch when checked.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"name"),Object(c.b)("td",{parentName:"tr",align:"left"},"string"),Object(c.b)("td",{parentName:"tr",align:"left"}),Object(c.b)("td",{parentName:"tr",align:"left"},"The input name of the switch when used in a form.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"value"),Object(c.b)("td",{parentName:"tr",align:"left"},"string ","|"," boolean"),Object(c.b)("td",{parentName:"tr",align:"left"}),Object(c.b)("td",{parentName:"tr",align:"left"},"The value of the switch.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"children"),Object(c.b)("td",{parentName:"tr",align:"left"},"ReactNode"),Object(c.b)("td",{parentName:"tr",align:"left"}),Object(c.b)("td",{parentName:"tr",align:"left"},"The children of the switch.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"aria-label"),Object(c.b)("td",{parentName:"tr",align:"left"},"string"),Object(c.b)("td",{parentName:"tr",align:"left"}),Object(c.b)("td",{parentName:"tr",align:"left"},"The aria-label of the switch for accessibility.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"aria-labelledby"),Object(c.b)("td",{parentName:"tr",align:"left"},"string"),Object(c.b)("td",{parentName:"tr",align:"left"}),Object(c.b)("td",{parentName:"tr",align:"left"},"The aria-labelledby of the switch for accessibility.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"checked"),Object(c.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(c.b)("td",{parentName:"tr",align:"left"}),Object(c.b)("td",{parentName:"tr",align:"left"},"If ",Object(c.b)("inlineCode",{parentName:"td"},"true"),", set the switch to the checked state.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"defaultChecked"),Object(c.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(c.b)("td",{parentName:"tr",align:"left"}),Object(c.b)("td",{parentName:"tr",align:"left"},"If ",Object(c.b)("inlineCode",{parentName:"td"},"true"),", the checkbox will be initially checked.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"disabled"),Object(c.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(c.b)("td",{parentName:"tr",align:"left"}),Object(c.b)("td",{parentName:"tr",align:"left"},"If ",Object(c.b)("inlineCode",{parentName:"td"},"true"),", set the disabled to the invalid state.")))))}p.isMDXComponent=!0},"97Jx":function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,n.apply(this,arguments)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},Km8e:function(e,t,n){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},LdEA:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r},e.exports.default=e.exports,e.exports.__esModule=!0},"S/GD":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/toggleswitch",function(){return n("8g8E")}])},ZVZ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var a=n("ERkP"),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"===typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),d=p(n),s=a,O=d["".concat(b,".").concat(s)]||d[s]||m[s]||l;return n?r.a.createElement(O,c(c({ref:t},i),{},{components:n})):r.a.createElement(O,c({ref:t},i))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var l=n.length,b=new Array(l);b[0]=s;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"===typeof e?e:a,b[1]=c;for(var i=2;i<l;i++)b[i]=n[i];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},m3Bd:function(e,t,n){var a=n("LdEA");e.exports=function(e,t){if(null==e)return{};var n,r,l=a(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l},e.exports.default=e.exports,e.exports.__esModule=!0}},[["S/GD",0,1]]]);