_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[71],{"97Jx":function(n,t){function e(){return n.exports=e=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},n.exports.default=n.exports,n.exports.__esModule=!0,e.apply(this,arguments)}n.exports=e,n.exports.default=n.exports,n.exports.__esModule=!0},Km8e:function(n,t,e){"use strict";var o=Object.assign.bind(Object);n.exports=o,n.exports.default=n.exports},LdEA:function(n,t){n.exports=function(n,t){if(null==n)return{};var e,o,a={},i=Object.keys(n);for(o=0;o<i.length;o++)e=i[o],t.indexOf(e)>=0||(a[e]=n[e]);return a},n.exports.default=n.exports,n.exports.__esModule=!0},ZVZ0:function(n,t,e){"use strict";e.d(t,"a",(function(){return b})),e.d(t,"b",(function(){return d}));var o=e("ERkP"),a=e.n(o);function i(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function r(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,o)}return e}function s(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?r(Object(e),!0).forEach((function(t){i(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function l(n,t){if(null==n)return{};var e,o,a=function(n,t){if(null==n)return{};var e,o,a={},i=Object.keys(n);for(o=0;o<i.length;o++)e=i[o],t.indexOf(e)>=0||(a[e]=n[e]);return a}(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)e=i[o],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(a[e]=n[e])}return a}var c=a.a.createContext({}),p=function(n){var t=a.a.useContext(c),e=t;return n&&(e="function"===typeof n?n(t):s(s({},t),n)),e},b=function(n){var t=p(n.components);return a.a.createElement(c.Provider,{value:t},n.children)},u={inlineCode:"code",wrapper:function(n){var t=n.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(n,t){var e=n.components,o=n.mdxType,i=n.originalType,r=n.parentName,c=l(n,["components","mdxType","originalType","parentName"]),b=p(e),m=o,d=b["".concat(r,".").concat(m)]||b[m]||u[m]||i;return e?a.a.createElement(d,s(s({ref:t},c),{},{components:e})):a.a.createElement(d,s({ref:t},c))}));function d(n,t){var e=arguments,o=t&&t.mdxType;if("string"===typeof n||o){var i=e.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=n,s.mdxType="string"===typeof n?n:o,r[1]=s;for(var c=2;c<i;c++)r[c]=e[c];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,e)}m.displayName="MDXCreateElement"},"kEL/":function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return p}));var o=e("97Jx"),a=e.n(o),i=e("m3Bd"),r=e.n(i),s=(e("ERkP"),e("ZVZ0")),l=["components"],c={};function p(n){var t=n.components,e=r()(n,l);return Object(s.b)("wrapper",a()({},c,e,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",null,"Toast"),Object(s.b)("p",null,"A toast notification is a short message that displays at the  side of the screen and disappears automatically after a few seconds. A toast notification is a status update about an operation for which the current activity remains visibility and interactive. Basically, a toast notification is used inform the user of something that is not critical and that does not require specific attention, and does not prevent the user from using the app."),Object(s.b)("h3",null,"Prerequisite"),Object(s.b)("p",null,"A ",Object(s.b)("inlineCode",{parentName:"p"},"Toast")," element can be used with the ",Object(s.b)("inlineCode",{parentName:"p"},"useToast")," hook to trigger a toast notification."),Object(s.b)("h2",null,"Example of ",Object(s.b)("inlineCode",{parentName:"h2"},"useToast")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js",metastring:"readOnly",readOnly:!0},"import React, { useCallback } from 'react';\nimport toaster from 'toasted-notes';\nimport {\n  ColorModeProvider,\n  ColorStyleProvider,\n  ThemeProvider,\n  useColorMode,\n  useTheme,\n} from '@trendmicro/react-styled-ui';\n\nconst useToast = () => {\n  const theme = useTheme();\n  const [colorMode] = useColorMode();\n  const notify = useCallback(\n    ({\n      position = 'top',\n      duration = 5000,\n      render,\n    }) => {\n      const options = {\n        position,\n        duration,\n      };\n\n      if (typeof render !== 'function') {\n        return null;\n      }\n\n      return toaster.notify(\n        ({ id, onClose }) => (\n          <ThemeProvider theme={theme}>\n            <ColorModeProvider value={colorMode}>\n              <ColorStyleProvider>\n                {render({ id, onClose, position, duration })}\n              </ColorStyleProvider>\n            </ColorModeProvider>\n          </ThemeProvider>\n        ),\n        options,\n      );\n    },\n    [theme, colorMode],\n  );\n  const closeAll = toaster.closeAll;\n\n  return {\n    closeAll,\n    notify,\n  };\n};\n\nexport default useToast;\n\n")),Object(s.b)("h2",null,"Import"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"import { Toast } from '@trendmicro/react-styled-ui';\n")),Object(s.b)("h2",null,"Usage"),Object(s.b)("h3",null,"Layout"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Increase the vertical padding space to ",Object(s.b)("inlineCode",{parentName:"li"},"4x")," (or ",Object(s.b)("inlineCode",{parentName:"li"},"1rem"),") for a multiline paragraph."),Object(s.b)("li",{parentName:"ul"},"Set the minimum horizontal margin space to ",Object(s.b)("inlineCode",{parentName:"li"},"4x")," (or ",Object(s.b)("inlineCode",{parentName:"li"},"1rem"),") before the close button."),Object(s.b)("li",{parentName:"ul"},"Set the minimum horizontal margin space to ",Object(s.b)("inlineCode",{parentName:"li"},"4x")," (or ",Object(s.b)("inlineCode",{parentName:"li"},"1rem"),") between the icon and the content."),Object(s.b)("li",{parentName:"ul"},"Apply vertical margin space with ",Object(s.b)("inlineCode",{parentName:"li"},"2x")," (or ",Object(s.b)("inlineCode",{parentName:"li"},".5rem"),") between the title and its content."),Object(s.b)("li",{parentName:"ul"},"Apply vertical margin space with ",Object(s.b)("inlineCode",{parentName:"li"},"6x")," (or ",Object(s.b)("inlineCode",{parentName:"li"},"1.5rem"),") between the end of the content and the action button (or action link).")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-jsx",metastring:"noInline",noInline:!0},'const ToastSimple = ({ onClose }) => (\n  <Toast isCloseButtonVisible onClose={onClose}>\n    <Text>This is a toast notification.</Text>\n  </Toast>\n);\n\nconst ToastWithIcon = ({ onClose }) => (\n  <Toast isCloseButtonVisible onClose={onClose} py="4x">\n    <Flex align="flex-start">\n      <Box\n        bg="gray:40"\n        height={48}\n        minWidth={48}\n      />\n      <Space minWidth="4x" />\n      <Text>This is a toast notification.</Text>\n    </Flex>\n  </Toast>\n);\n\nconst ToastWithTitle = ({ onClose }) => (\n  <Toast isCloseButtonVisible onClose={onClose} py="4x">\n    <Box mb="2x">\n      <Text fontWeight="bold">Notification Title</Text>\n    </Box>\n    <Box mr={-36}>\n      <Text>This is a toast notification.</Text>\n    </Box>\n  </Toast>\n);\n\nconst ToastWithActionButton = ({ onClose }) => (\n  <Toast isCloseButtonVisible onClose={onClose} py="4x">\n    <Box mb="6x">\n      <Text>This is a toast notification.</Text>\n    </Box>\n    <Flex justify="flex-end" mr={-36}>\n      <FlatButton variant="outline" color="black:primary" size="sm">\n        Action Button\n      </FlatButton>\n    </Flex>\n  </Toast>\n);\n\nconst ToastWithActionLink = ({ onClose }) => (\n  <Toast isCloseButtonVisible onClose={onClose} py="4x">\n    <Box mb="6x">\n      <Text>This is a toast notification.</Text>\n    </Box>\n    <Flex justify="flex-end" mr={-36}>\n      <Link>Action Link</Link>\n    </Flex>\n  </Toast>\n);\n\nconst ToastWithAllTogether = ({ onClose }) => (\n  <Toast isCloseButtonVisible onClose={onClose} py="4x">\n    <Box mb="2x">\n      <Text fontWeight="bold">Notification Title</Text>\n    </Box>\n    <Flex align="flex-start" mb="6x">\n      <Box\n        bg="gray:40"\n        height={48}\n        minWidth={48}\n      />\n      <Space minWidth="4x" />\n      <Text>This is a toast notification.</Text>\n    </Flex>\n    <Flex justify="flex-end" mr={-36}>\n      <FlatButton variant="outline" color="black:primary" size="sm">\n        Action Button\n      </FlatButton>\n    </Flex>\n  </Toast>\n);\n\nconst ToastLayout = (props) => {\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle({ colorMode });\n  const boxShadow = colorStyle.shadow.thin;\n\n  return (\n    <Box\n      fontSize="sm"\n      lineHeight="sm"\n      textAlign="left"\n      boxShadow={boxShadow}\n      width={320}\n      {...props}\n    />\n  );\n};\n\nfunction Example() {\n  const toast = useToast();\n  const handleClickBy = (ToastNotification) => () => {\n    toast.notify({\n      position: \'bottom-right\',\n      duration: 5000,\n      render: ({ onClose, position }) => {\n        const styleProps = {\n          \'top-left\': { mt: \'2x\', mx: \'4x\' },\n          \'top\': { mt: \'2x\', mx: \'4x\' },\n          \'top-right\': { mt: \'2x\', mx: \'4x\' },\n          \'bottom-left\': { mb: \'2x\', mx: \'4x\' },\n          \'bottom\': { mb: \'2x\', mx: \'4x\' },\n          \'bottom-right\': { mb: \'2x\', mx: \'4x\' },\n        }[position];\n\n        return (\n          <ToastLayout {...styleProps}>\n            <ToastNotification onClose={onClose} />\n          </ToastLayout>\n        );\n      },\n    });\n  };\n\n  return (\n    <>\n      <Stack direction="column" spacing="6x">\n        <Box>\n          <Button\n            variant="secondary"\n            onClick={handleClickBy(ToastSimple)}\n          >\n            Show\n          </Button>\n          <ToastLayout mt="4x">\n            <ToastSimple />\n          </ToastLayout>\n        </Box>\n        <Box>\n          <Button\n            variant="secondary"\n            onClick={handleClickBy(ToastWithIcon)}\n          >\n            Show\n          </Button>\n          <ToastLayout mt="4x">\n            <ToastWithIcon />\n          </ToastLayout>\n        </Box>\n        <Box>\n          <Button\n            variant="secondary"\n            onClick={handleClickBy(ToastWithTitle)}\n          >\n            Show\n          </Button>\n          <ToastLayout mt="4x">\n            <ToastWithTitle />\n          </ToastLayout>\n        </Box>\n        <Box>\n          <Button\n            variant="secondary"\n            onClick={handleClickBy(ToastWithActionButton)}\n          >\n            Show\n          </Button>\n          <ToastLayout mt="4x">\n            <ToastWithActionButton />\n          </ToastLayout>\n        </Box>\n        <Box>\n          <Button\n            variant="secondary"\n            onClick={handleClickBy(ToastWithActionLink)}\n          >\n            Show\n          </Button>\n          <ToastLayout mt="4x">\n            <ToastWithActionLink />\n          </ToastLayout>\n        </Box>\n        <Box>\n          <Button\n            variant="secondary"\n            onClick={handleClickBy(ToastWithAllTogether)}\n          >\n            Show\n          </Button>\n          <ToastLayout mt="4x">\n            <ToastWithAllTogether />\n          </ToastLayout>\n        </Box>\n      </Stack>\n    </>\n  );\n}\n\nrender(<Example />);\n')),Object(s.b)("h3",null,"Appearances"),Object(s.b)("p",null,"You can control the appearance of a toast notification. If specified, the value can be one of ",Object(s.b)("inlineCode",{parentName:"p"},"success"),", ",Object(s.b)("inlineCode",{parentName:"p"},"info"),", ",Object(s.b)("inlineCode",{parentName:"p"},"warning"),", or ",Object(s.b)("inlineCode",{parentName:"p"},"error"),"."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-jsx",metastring:"noInline",noInline:!0},"const ToastSuccess = ({ onClose }) => (\n  <Toast\n    isCloseButtonVisible\n    onClose={onClose}\n    appearance=\"success\"\n  >\n    This is a success toast alert.\n  </Toast>\n);\n\nconst ToastInfo = ({ onClose }) => (\n  <Toast\n    isCloseButtonVisible\n    onClose={onClose}\n    appearance=\"info\"\n  >\n    This is an info toast alert.\n  </Toast>\n);\n\nconst ToastWarning = ({ onClose }) => (\n  <Toast\n    isCloseButtonVisible\n    onClose={onClose}\n    appearance=\"warning\"\n  >\n    This is a warning toast alert.\n  </Toast>\n);\n\nconst ToastError = ({ onClose }) => (\n  <Toast\n    isCloseButtonVisible\n    onClose={onClose}\n    appearance=\"error\"\n  >\n    This is an error toast alert.\n  </Toast>\n);\n\nconst ToastLayout = (props) => {\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle({ colorMode });\n  const boxShadow = colorStyle.shadow.thin;\n\n  return (\n    <Box\n      fontSize=\"sm\"\n      lineHeight=\"sm\"\n      textAlign=\"left\"\n      boxShadow={boxShadow}\n      width={320}\n      {...props}\n    />\n  );\n};\n\nfunction Example() {\n  const toast = useToast();\n  const handleClickBy = (ToastNotification) => () => {\n    toast.notify({\n      position: 'bottom-right',\n      duration: 5000,\n      render: ({ onClose, position }) => {\n        const styleProps = {\n          'top-left': { mt: '2x', mx: '4x' },\n          'top': { mt: '2x', mx: '4x' },\n          'top-right': { mt: '2x', mx: '4x' },\n          'bottom-left': { mb: '2x', mx: '4x' },\n          'bottom': { mb: '2x', mx: '4x' },\n          'bottom-right': { mb: '2x', mx: '4x' },\n        }[position];\n\n        return (\n          <ToastLayout {...styleProps}>\n            <ToastNotification onClose={onClose} />\n          </ToastLayout>\n        );\n      },\n    });\n  };\n  const toastComponents = [\n    ToastSuccess,\n    ToastInfo,\n    ToastWarning,\n    ToastError,\n  ];\n\n  return (\n    <Stack direction=\"column\" spacing=\"6x\">\n      {toastComponents.map((ToastNotification, idx) => (\n        <Box key={idx}>\n          <Button variant=\"secondary\" onClick={handleClickBy(ToastNotification)}>\n            Show\n          </Button>\n          <ToastLayout mt=\"4x\">\n            <ToastNotification />\n          </ToastLayout>\n        </Box>\n      ))}\n    </Stack>\n  );\n}\n\nrender(<Example />);\n")),Object(s.b)("h3",null,"Icons"),Object(s.b)("p",null,"The ",Object(s.b)("inlineCode",{parentName:"p"},"icon")," prop allows you to override the default icon for the specified appearance."),Object(s.b)("p",null,"Setting the ",Object(s.b)("inlineCode",{parentName:"p"},"icon")," prop to ",Object(s.b)("inlineCode",{parentName:"p"},"false")," will remove the icon altogether."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-jsx",metastring:"noInline",noInline:!0},"const ToastWithDefaultIcon = ({ onClose }) => (\n  <Toast\n    isCloseButtonVisible\n    onClose={onClose}\n    appearance=\"success\"\n  >\n    This is a success toast alert.\n  </Toast>\n);\n\nconst ToastWithAnotherIcon = ({ onClose }) => (\n  <Toast\n    isCloseButtonVisible\n    onClose={onClose}\n    appearance=\"success\"\n    icon=\"success\"\n  >\n    This is a success toast alert.\n  </Toast>\n);\n\nconst ToastWithProprietaryIcon = ({ onClose }) => (\n  <Toast\n    isCloseButtonVisible\n    onClose={onClose}\n    appearance=\"success\"\n    icon={<Icon icon=\"check-circle-o\" color=\"gray:80\" />}\n  >\n    This is a success toast alert.\n  </Toast>\n);\n\nconst ToastWithoutIcon = ({ onClose }) => (\n  <Toast\n    isCloseButtonVisible\n    onClose={onClose}\n    appearance=\"success\"\n    icon={false}\n  >\n    This is a success toast alert.\n  </Toast>\n);\n\nconst ToastLayout = (props) => {\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle({ colorMode });\n  const boxShadow = colorStyle.shadow.thin;\n\n  return (\n    <Box\n      fontSize=\"sm\"\n      lineHeight=\"sm\"\n      textAlign=\"left\"\n      boxShadow={boxShadow}\n      width={320}\n      {...props}\n    />\n  );\n};\n\nfunction Example() {\n  const toast = useToast();\n  const handleClickBy = (ToastNotification) => () => {\n    toast.notify({\n      position: 'bottom-right',\n      duration: 5000,\n      render: ({ onClose, position }) => {\n        const styleProps = {\n          'top-left': { mt: '2x', mx: '4x' },\n          'top': { mt: '2x', mx: '4x' },\n          'top-right': { mt: '2x', mx: '4x' },\n          'bottom-left': { mb: '2x', mx: '4x' },\n          'bottom': { mb: '2x', mx: '4x' },\n          'bottom-right': { mb: '2x', mx: '4x' },\n        }[position];\n\n        return (\n          <ToastLayout {...styleProps}>\n            <ToastNotification onClose={onClose} />\n          </ToastLayout>\n        );\n      },\n    });\n  };\n  const alertToasts = [\n    ToastWithDefaultIcon,\n    ToastWithAnotherIcon,\n    ToastWithProprietaryIcon,\n    ToastWithoutIcon,\n  ];\n\n  return (\n    <Stack direction=\"column\" spacing=\"6x\">\n      {alertToasts.map((ToastNotification, idx) => (\n        <Box key={idx}>\n          <Button variant=\"secondary\" onClick={handleClickBy(ToastNotification)}>\n            Show\n          </Button>\n          <ToastLayout mt=\"4x\">\n            <ToastNotification />\n          </ToastLayout>\n        </Box>\n      ))}\n    </Stack>\n  );\n}\n\nrender(<Example />);\n")),Object(s.b)("h2",null,"Props"),Object(s.b)("p",null,"A ",Object(s.b)("inlineCode",{parentName:"p"},"Toast")," element is composed of the ",Object(s.b)("a",{parentName:"p",href:"./box"},Object(s.b)("inlineCode",{parentName:"a"},"Box"))," component. You can override the default styles using the style props."),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:"left"},"Name"),Object(s.b)("th",{parentName:"tr",align:"left"},"Type"),Object(s.b)("th",{parentName:"tr",align:"left"},"Default"),Object(s.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:"left"},"isCloseButtonVisible"),Object(s.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(s.b)("td",{parentName:"tr",align:"left"}),Object(s.b)("td",{parentName:"tr",align:"left"},"If ",Object(s.b)("inlineCode",{parentName:"td"},"true"),", a close button will appear on the right side.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:"left"},"onClose"),Object(s.b)("td",{parentName:"tr",align:"left"},"function"),Object(s.b)("td",{parentName:"tr",align:"left"}),Object(s.b)("td",{parentName:"tr",align:"left"},"A callback called when the close button is clicked.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:"left"},"appearance"),Object(s.b)("td",{parentName:"tr",align:"left"},"string"),Object(s.b)("td",{parentName:"tr",align:"left"},"'none'"),Object(s.b)("td",{parentName:"tr",align:"left"},"One of: ",Object(s.b)("inlineCode",{parentName:"td"},"'none'"),", ",Object(s.b)("inlineCode",{parentName:"td"},"'success'"),", ",Object(s.b)("inlineCode",{parentName:"td"},"'info'"),", ",Object(s.b)("inlineCode",{parentName:"td"},"'warning'"),", ",Object(s.b)("inlineCode",{parentName:"td"},"'error'"))),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:"left"},"icon"),Object(s.b)("td",{parentName:"tr",align:"left"},"string ","|"," ReactNode ","|"," false"),Object(s.b)("td",{parentName:"tr",align:"left"}),Object(s.b)("td",{parentName:"tr",align:"left"},"Override the icon displayed before the children. Unless provided, the icon is mapped to the value of the ",Object(s.b)("inlineCode",{parentName:"td"},"appearance")," prop.")))))}p.isMDXComponent=!0},m3Bd:function(n,t,e){var o=e("LdEA");n.exports=function(n,t){if(null==n)return{};var e,a,i=o(n,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)e=r[a],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i},n.exports.default=n.exports,n.exports.__esModule=!0},q87K:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/toast",function(){return e("kEL/")}])}},[["q87K",0,1]]]);