_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"97Jx":function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,n.apply(this,arguments)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},Km8e:function(e,t,n){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},LdEA:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r},e.exports.default=e.exports,e.exports.__esModule=!0},M6FF:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var a=n("97Jx"),r=n.n(a),o=n("m3Bd"),l=n.n(o),b=(n("ERkP"),n("ZVZ0")),c=["components"],i={};function d(e){var t=e.components,n=l()(e,c);return Object(b.b)("wrapper",r()({},i,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",null,"Badge"),Object(b.b)("p",null,"Badges are used to highlight an item's status for quick recognition."),Object(b.b)("h2",null,"Import"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-js"},"import { Badge } from '@trendmicro/react-styled-ui';\n")),Object(b.b)("h2",null,"Usage"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-jsx"},'<Stack direction="column" spacing="4x" shouldWrapChildren>\n  <Stack direction="row" spacing="6x" shouldWrapChildren>\n    <Badge badgeContent="5+">\n      <Icon icon="alert" />\n    </Badge>\n    <Badge badgeContent="99+">\n      <Icon icon="alert" />\n    </Badge>\n    <Badge badgeContent="87">\n      <Icon icon="alert" />\n    </Badge>\n    <Badge variant="dot" offset={[4, 2]} borderColor="gray:100">\n      <Icon icon="alert" />\n    </Badge>\n    <Badge variant="dot" dotSize={6} offset={[4, 2]} borderColor="gray:100">\n      <Icon icon="alert" />\n    </Badge>\n    <Badge isHidden>\n      <Icon icon="alert" />\n    </Badge>\n    <Badge badgeContent={0}>\n      <Icon icon="alert" />\n    </Badge>\n    <Badge badgeContent="!">\n      <Icon icon="alert" />\n    </Badge>\n    <Badge badgeContent={<Text color="yellow:50">Text</Text>}>\n      <Icon icon="alert" />\n    </Badge>\n  </Stack>\n  <Stack direction="row" spacing="6x" shouldWrapChildren>\n    <Badge badgeContent="5+">\n      <Skeleton variant="rect" width={42} height={42} />\n    </Badge>\n    <Badge badgeContent="99+">\n      <Skeleton variant="rect" width={42} height={42} />\n    </Badge>\n    <Badge badgeContent="87">\n      <Skeleton variant="rect" width={42} height={42} />\n    </Badge>\n    <Badge variant="dot" borderColor="gray:100">\n      <Skeleton variant="rect" width={42} height={42} />\n    </Badge>\n    <Badge variant="dot" dotSize={6} borderColor="gray:100">\n      <Skeleton variant="rect" width={42} height={42} />\n    </Badge>\n    <Badge isHidden>\n      <Skeleton variant="rect" width={42} height={42} />\n    </Badge>\n    <Badge badgeContent={0}>\n      <Skeleton variant="rect" width={42} height={42} />\n    </Badge>\n    <Badge badgeContent="!">\n      <Skeleton variant="rect" width={42} height={42} />\n    </Badge>\n    <Badge badgeContent={<Text color="yellow:50">Text</Text>}>\n      <Skeleton variant="rect" width={42} height={42} />\n    </Badge>\n  </Stack>\n</Stack>\n')),Object(b.b)("h3",null,"Badge color"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Pass the ",Object(b.b)("inlineCode",{parentName:"p"},"variantColor")," prop to customize the color of the Badge. ",Object(b.b)("inlineCode",{parentName:"p"},"variantColor"),"\ncan be any ",Object(b.b)("strong",{parentName:"p"},"color key with key 60")," that exists in the ",Object(b.b)("inlineCode",{parentName:"p"},"theme.colors"),"."),Object(b.b)("blockquote",{parentName:"li"},Object(b.b)("p",{parentName:"blockquote"},"Thats mean the ",Object(b.b)("inlineCode",{parentName:"p"},"green:60")," exists in the ",Object(b.b)("inlineCode",{parentName:"p"},"theme.colors"),' then can use variantColor="green".'))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("a",{parentName:"p",href:"./theme"},"Learn more about theming"),"."))),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-jsx"},'<Stack direction="row" spacing="4x">\n  <Badge badgeContent={1} />\n  <Badge variantColor="orange" badgeContent={2} />\n  <Badge variantColor="yellow" badgeContent={3} />\n  <Badge variantColor="green" badgeContent={4} />\n  <Badge variantColor="blue" badgeContent={5} />\n  <Badge variantColor="gray" badgeContent={6} />\n  <Badge variantColor="magenta" badgeContent={7} />\n  <Badge variantColor="purple" badgeContent={8} />\n  <Badge variantColor="teal" badgeContent={9} />\n  <Badge variantColor="cyan" badgeContent={10} />\n</Stack>\n')),Object(b.b)("h3",null,"Badge border color"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Pass the ",Object(b.b)("inlineCode",{parentName:"li"},"borderColor")," or ",Object(b.b)("inlineCode",{parentName:"li"},"borderWidth")," props to customize the border of the Badge. It only effect on wrapped children.")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-jsx"},'<Stack direction="row" spacing="6x" shouldWrapChildren>\n  <Badge badgeContent="5" borderColor="orange:50">\n    <Icon icon="alert" />\n  </Badge>\n  <Badge badgeContent="5">\n    <Icon icon="alert" borderColor="orange:50" borderWidth={3} />\n  </Badge>\n  <Badge badgeContent="5" borderColor="orange:50">\n    <Icon icon="alert" />\n  </Badge>\n  <Badge variant="dot" offset={[4, 2]} borderColor="orange:50" borderWidth={3}>\n    <Icon icon="alert" />\n  </Badge>\n</Stack>\n')),Object(b.b)("h2",null,"Props"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"Badge")," composes the ",Object(b.b)("a",{parentName:"p",href:"./box"},Object(b.b)("inlineCode",{parentName:"a"},"Box"))," component. You can override the default styles with style props."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"),Object(b.b)("th",{parentName:"tr",align:"left"},"Default"),Object(b.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"variant"),Object(b.b)("td",{parentName:"tr",align:"left"},"string"),Object(b.b)("td",{parentName:"tr",align:"left"},"'badge'"),Object(b.b)("td",{parentName:"tr",align:"left"},"'badge' or 'dot'.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"variantColor"),Object(b.b)("td",{parentName:"tr",align:"left"},"string"),Object(b.b)("td",{parentName:"tr",align:"left"},"'red'"),Object(b.b)("td",{parentName:"tr",align:"left"},"The color scheme to use for the badge. It must be a color key defined in ",Object(b.b)("inlineCode",{parentName:"td"},"theme.colors"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"badgeContent"),Object(b.b)("td",{parentName:"tr",align:"left"},"number","|","string","|","React Element"),Object(b.b)("td",{parentName:"tr",align:"left"}),Object(b.b)("td",{parentName:"tr",align:"left"})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"isHidden"),Object(b.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(b.b)("td",{parentName:"tr",align:"left"},"false"),Object(b.b)("td",{parentName:"tr",align:"left"},"show badge content or not.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"offset"),Object(b.b)("td",{parentName:"tr",align:"left"},"[","number, number","]"),Object(b.b)("td",{parentName:"tr",align:"left"},"-"),Object(b.b)("td",{parentName:"tr",align:"left"},"Set offset of the badge.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"borderColor"),Object(b.b)("td",{parentName:"tr",align:"left"},"string"),Object(b.b)("td",{parentName:"tr",align:"left"},"value of ",Object(b.b)("inlineCode",{parentName:"td"},"variantColor")),Object(b.b)("td",{parentName:"tr",align:"left"},"Set border color of the badge when overlap a children.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"borderWidth"),Object(b.b)("td",{parentName:"tr",align:"left"},"number"),Object(b.b)("td",{parentName:"tr",align:"left"},"1"),Object(b.b)("td",{parentName:"tr",align:"left"},"Set border width of the badge when overlap a children.")))))}d.isMDXComponent=!0},S8Xn:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/badge",function(){return n("M6FF")}])},ZVZ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n("ERkP"),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),d=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"===typeof e?e(t):b(b({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),p=d(n),s=a,u=p["".concat(l,".").concat(s)]||p[s]||g[s]||o;return n?r.a.createElement(u,b(b({ref:t},i),{},{components:n})):r.a.createElement(u,b({ref:t},i))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var o=n.length,l=new Array(o);l[0]=s;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"===typeof e?e:a,l[1]=b;for(var i=2;i<o;i++)l[i]=n[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},m3Bd:function(e,t,n){var a=n("LdEA");e.exports=function(e,t){if(null==e)return{};var n,r,o=a(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o},e.exports.default=e.exports,e.exports.__esModule=!0}},[["S8Xn",0,1]]]);