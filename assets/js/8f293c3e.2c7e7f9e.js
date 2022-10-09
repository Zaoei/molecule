"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[46806],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76199:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={title:"Introduction",sidebar_label:"Introduction",sidebar_position:1},s=void 0,c={unversionedId:"introduction",id:"version-0.9.0-beta.2/introduction",title:"Introduction",description:"Molecule",source:"@site/versioned_docs/version-0.9.0-beta.2/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/molecule/docs/0.9.0-beta.2/introduction",draft:!1,editUrl:"https://github.com/DTStack/molecule/edit/main/website/versioned_docs/version-0.9.0-beta.2/introduction.md",tags:[],version:"0.9.0-beta.2",sidebarPosition:1,frontMatter:{title:"Introduction",sidebar_label:"Introduction",sidebar_position:1},sidebar:"docs",next:{title:"Overview",permalink:"/molecule/docs/0.9.0-beta.2/overview"}},p={},u=[{value:"Features",id:"features",level:2},{value:"Installation",id:"installation",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Development",id:"development",level:2},{value:"Contributing",id:"contributing",level:2},{value:"License",id:"license",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"/molecule/img/logo@3x.png",width:"20%",height:"20%",alt:"Molecule Logo"}),(0,a.kt)("h1",null,"Molecule"),(0,a.kt)("h3",null,"A lightweight Web IDE UI Framework"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/actions/workflows/main.yml"},(0,a.kt)("img",{parentName:"a",src:"https://github.com/DTStack/molecule/actions/workflows/main.yml/badge.svg",alt:"CI"}))," ",(0,a.kt)("a",{parentName:"p",href:"https://codecov.io/gh/DTStack/molecule"},(0,a.kt)("img",{parentName:"a",src:"https://codecov.io/gh/DTStack/molecule/branch/main/graph/badge.svg?token=PDjbCBo6qz",alt:"Codecov"}))," ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@dtinsight/molecule"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/dm/@dtinsight/molecule.svg?style=flat",alt:"NPM downloads"}))," ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@dtinsight/molecule"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@dtinsight/molecule.svg?style=flat-square",alt:"NPM version"})))),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Molecule")," is a lightweight ",(0,a.kt)("strong",{parentName:"p"},"Web IDE UI")," Framework built with React.js\uff0cand inspired by the VSCode. We also provide the Extension APIs the seem like VSCode, to help developers extend the Workbench easily. The Molecule integrates with React.js applications is simple. It has applied to many ",(0,a.kt)("a",{parentName:"p",href:"https://www.dtstack.com/"},"DTStack")," inner projects."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://dtstack.github.io/monaco-sql-languages/"},"Online Preview")),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Built-in the VSCode ",(0,a.kt)("strong",{parentName:"li"},"Workbench")," UI"),(0,a.kt)("li",{parentName:"ul"},"Compatible with the VSCode ",(0,a.kt)("strong",{parentName:"li"},"ColorTheme")),(0,a.kt)("li",{parentName:"ul"},"Customize the Workbench via ",(0,a.kt)("strong",{parentName:"li"},"React Component")," easily"),(0,a.kt)("li",{parentName:"ul"},"Built-in Monaco-Editor ",(0,a.kt)("strong",{parentName:"li"},"Command Palette, Keybinding")," features"),(0,a.kt)("li",{parentName:"ul"},"Support the ",(0,a.kt)("strong",{parentName:"li"},"i18n"),", built-in zhCN, and English"),(0,a.kt)("li",{parentName:"ul"},"Built-in ",(0,a.kt)("strong",{parentName:"li"},"Settings"),", support to edit and extend via the Extension"),(0,a.kt)("li",{parentName:"ul"},"Built-in basic ",(0,a.kt)("strong",{parentName:"li"},"Explorer, Search")," components, and support extending via the Extension"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Typescript")," Ready")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @dtinsight/molecule\n# Or\nyarn add @dtinsight/molecule\n")),(0,a.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport { MoleculeProvider, Workbench } from '@dtinsight/molecule';\nimport '@dtinsight/molecule/esm/style/mo.css';\n\nconst App = () => (\n    <MoleculeProvider extensions={[]}>\n        <Workbench />\n    </MoleculeProvider>\n);\n\nReactDOM.render(<App />, document.getElementById('root'));\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"extension")," is the Extension applications entry, more details about Extension, please read the ",(0,a.kt)("a",{parentName:"p",href:"/molecule/docs/0.9.0-beta.2/quick-start"},"Quick Start"),"."),(0,a.kt)("h2",{id:"development"},"Development"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:DTStack/molecule.git\n")),(0,a.kt)("p",null,"Clone the source code into your local"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Development Mode")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn # Install dependencies\n\nyarn dev # Start dev mode\n")),(0,a.kt)("p",null,"The Molecule using the ",(0,a.kt)("strong",{parentName:"p"},"Storybook")," to manage and develop the React components, the default visiting address is ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:6006/"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Build & Preview")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn build # Compile to ESM\nyarn web # Web Preview Mode\n")),(0,a.kt)("p",null,"We compile the source code into the ES6 modules and output to the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"esm"))," folder. Besides the Storybook development mode, there also builtin a ",(0,a.kt)("strong",{parentName:"p"},"Web Preview")," mode using the ESM modules."),(0,a.kt)("h2",{id:"contributing"},"Contributing"),(0,a.kt)("p",null,"Refer to the ",(0,a.kt)("a",{parentName:"p",href:"/molecule/docs/0.9.0-beta.2/contributing"},"CONTRIBUTING"),"."),(0,a.kt)("h2",{id:"license"},"License"),(0,a.kt)("p",null,"Copyright \xa9 DTStack. All rights reserved."),(0,a.kt)("p",null,"Licensed under the MIT license."))}d.isMDXComponent=!0}}]);