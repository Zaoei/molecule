"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[40157],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return k}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(t),k=r,u=d["".concat(s,".").concat(k)]||d[k]||c[k]||o;return t?a.createElement(u,i(i({ref:n},m),{},{components:t})):a.createElement(u,i({ref:n},m))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},42979:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return d}});var a=t(83117),r=t(80102),o=(t(67294),t(3905)),i=["components"],l={title:"\u989c\u8272\u4e3b\u9898\uff08ColorTheme\uff09",sidebar_label:"\u989c\u8272\u4e3b\u9898"},s=void 0,p={unversionedId:"guides/extend-color-theme",id:"version-0.9.0-beta.1/guides/extend-color-theme",title:"\u989c\u8272\u4e3b\u9898\uff08ColorTheme\uff09",description:"\u989c\u8272\u4e3b\u9898\uff08ColorTheme\uff09\u662f Molecule \u975e\u5e38\u91cd\u8981\u7684\u529f\u80fd\uff0c\u6211\u4eec\u505a\u5230\u4e86\u57fa\u672c\u517c\u5bb9 VSCode \u7684\u793e\u533a\u7684\u989c\u8272\u4e3b\u9898\u3002\u672c\u6587\u4e3b\u8981\u662f\u4ecb\u7ecd\u5982\u4f55\u6269\u5c55 VSCode \u6269\u5c55\u5e02\u573a\u4e2d\u7684\u76f8\u5173\u989c\u8272\u4e3b\u9898\u6269\u5c55\u5305\uff0c\u4ee5\u53ca\u5982\u4f55\u5b9e\u73b0\u81ea\u5b9a\u4e49\u989c\u8272\u4e3b\u9898\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.9.0-beta.1/guides/extend-color-theme.md",sourceDirName:"guides",slug:"/guides/extend-color-theme",permalink:"/molecule/zh-CN/docs/0.9.0-beta.1/guides/extend-color-theme",editUrl:"https://github.com/DTStack/molecule/edit/main/website/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.9.0-beta.1/guides/extend-color-theme.md",tags:[],version:"0.9.0-beta.1",frontMatter:{title:"\u989c\u8272\u4e3b\u9898\uff08ColorTheme\uff09",sidebar_label:"\u989c\u8272\u4e3b\u9898"},sidebar:"docs",previous:{title:"\u5185\u7f6e\u90e8\u4ef6",permalink:"/molecule/zh-CN/docs/0.9.0-beta.1/guides/extend-builtin-ui"},next:{title:"\u5feb\u6377\u952e",permalink:"/molecule/zh-CN/docs/0.9.0-beta.1/guides/extend-keybinding"}},m=[{value:"\u4f7f\u7528 VSCode \u793e\u533a\u7684\u4e3b\u9898",id:"\u4f7f\u7528-vscode-\u793e\u533a\u7684\u4e3b\u9898",children:[{value:"\u6539\u9020\u4e3b\u9898\u5305",id:"\u6539\u9020\u4e3b\u9898\u5305",children:[],level:3},{value:"\u5e94\u7528\u989c\u8272\u4e3b\u9898",id:"\u5e94\u7528\u989c\u8272\u4e3b\u9898",children:[],level:3}],level:2},{value:"\u81ea\u5b9a\u4e49\u989c\u8272\u4e3b\u9898",id:"\u81ea\u5b9a\u4e49\u989c\u8272\u4e3b\u9898",children:[{value:"\u521b\u5efa\u989c\u8272\u4e3b\u9898\u6269\u5c55",id:"\u521b\u5efa\u989c\u8272\u4e3b\u9898\u6269\u5c55",children:[],level:3},{value:"\u5e94\u7528\u989c\u8272\u4e3b\u9898\u6269\u5c55",id:"\u5e94\u7528\u989c\u8272\u4e3b\u9898\u6269\u5c55",children:[],level:3}],level:2},{value:"\u989c\u8272\u4e3b\u9898\uff08ColorTheme\uff09 \u670d\u52a1\u5bf9\u8c61",id:"\u989c\u8272\u4e3b\u9898colortheme-\u670d\u52a1\u5bf9\u8c61",children:[],level:2}],c={toc:m};function d(e){var n=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,l,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../api/interfaces/molecule.IColorThemeService"},"\u989c\u8272\u4e3b\u9898\uff08ColorTheme\uff09"),"\u662f Molecule \u975e\u5e38\u91cd\u8981\u7684\u529f\u80fd\uff0c\u6211\u4eec\u505a\u5230\u4e86",(0,o.kt)("strong",{parentName:"p"},"\u57fa\u672c\u517c\u5bb9")," VSCode \u7684\u793e\u533a\u7684",(0,o.kt)("a",{parentName:"p",href:"https://vscodethemes.com/"},"\u989c\u8272\u4e3b\u9898"),"\u3002\u672c\u6587\u4e3b\u8981\u662f\u4ecb\u7ecd\u5982\u4f55\u6269\u5c55 ",(0,o.kt)("strong",{parentName:"p"},"VSCode \u6269\u5c55\u5e02\u573a\u4e2d"),"\u7684\u76f8\u5173\u989c\u8272\u4e3b\u9898\u6269\u5c55\u5305\uff0c\u4ee5\u53ca\u5982\u4f55\u5b9e\u73b0",(0,o.kt)("strong",{parentName:"p"},"\u81ea\u5b9a\u4e49"),"\u989c\u8272\u4e3b\u9898\u3002"),(0,o.kt)("h2",{id:"\u4f7f\u7528-vscode-\u793e\u533a\u7684\u4e3b\u9898"},"\u4f7f\u7528 VSCode \u793e\u533a\u7684\u4e3b\u9898"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u672c\u6587\u5185\u5bb9\u4e2d\u7684\u6240\u6709\u4ee3\u7801\uff0c\u90fd\u4ee5 ",(0,o.kt)("a",{parentName:"p",href:"../quick-start"},"Quick Start")," \u4e2d\u7684 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo"},"molecule-demo")," \u9879\u76ee\u4e3a\u57fa\u7840\u6f14\u793a\u3002"))),(0,o.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u53ef\u4ee5\u6253\u5f00\u8fd9\u4e2a ",(0,o.kt)("a",{parentName:"p",href:"https://vscodethemes.com/"},"VSCode Theme \u5e02\u573a"),", \u5c1d\u8bd5\u627e\u5230\u4e00\u6b3e\u4f60\u559c\u6b22\u7684\u989c\u8272\u4e3b\u9898\u3002"),(0,o.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u4ee5 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Binaryify/OneDark-Pro.git"},"One Dark Pro")," \u4e3b\u9898\u4e3a\u4f8b\uff0c\u6211\u4eec\u9700\u8981\u5728 ",(0,o.kt)("strong",{parentName:"p"},"GitHub")," \u4e0a\u627e\u5230\u8be5\u4e3b\u9898, \u5e76\u786e\u4fdd\u6211\u4eec\u53ef\u4ee5\u83b7\u5f97\u8be5\u989c\u8272\u4e3b\u9898\u7684\u4ee3\u7801\u3002\u627e\u5230\u4e3b\u9898\u4ee3\u7801\u540e\uff0c\u6211\u4eec\u5728\u7ec8\u7aef\u5207\u6362\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"src/extensions")," \u76ee\u5f55\u4e0b\uff0c\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/Binaryify/OneDark-Pro.git")," \u547d\u4ee4\uff0c\u4e0b\u8f7d ",(0,o.kt)("inlineCode",{parentName:"p"},"One Dark Pro")," \u4e3b\u9898\u4ee3\u7801\uff0c \u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ pwd\n~/molecule-demo/src/extensions\n\n$ git clone https://github.com/Binaryify/OneDark-Pro.git\nCloning into 'OneDark-Pro'...\nremote: Enumerating objects: 4493, done.\nremote: Counting objects: 100% (800/800), done.\nremote: Compressing objects: 100% (421/421), done.\nremote: Total 4493 (delta 532), reused 577 (delta 364), pack-reused 3693\nReceiving objects: 100% (4493/4493), 19.68 MiB | 358.00 KiB/s, done.\nResolving deltas: 100% (2830/2830), done.\n")),(0,o.kt)("p",null,"\u4e0b\u8f7d\u5b8c\u6210\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ tree -L 2  ./src\n./src\n\u251c\u2500\u2500 App.css\n\u251c\u2500\u2500 App.js\n\u251c\u2500\u2500 App.test.js\n\u251c\u2500\u2500 extensions\n\u2502   \u2514\u2500\u2500 OneDark-Pro\n\u251c\u2500\u2500 index.css\n\u251c\u2500\u2500 index.js\n\u251c\u2500\u2500 logo.svg\n\u251c\u2500\u2500 reportWebVitals.js\n\u2514\u2500\u2500 setupTests.js\n")),(0,o.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"OneDark-Pro/themes")," \u4e0b\u6709 3 \u4e2a\u6587\u4ef6\u5939\uff0c\u8fd9\u8868\u793a ",(0,o.kt)("inlineCode",{parentName:"p"},"One Dark Pro")," \u4e3b\u9898\u4e2d\u5305\u542b\u4e86 3 \u79cd\u989c\u8272\u4e3b\u9898\u3002"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u7531\u4e8e\u5b9e\u73b0\u6280\u672f\u7684\u539f\u56e0\uff0cMolecule \u5e76\u4e0d\u662f\u65e0\u7f1d\u8854\u63a5 VSCode Color Theme \u6269\u5c55\u7684, \u6211\u4eec\u9700\u8981\u5bf9 ",(0,o.kt)("inlineCode",{parentName:"p"},"One Dark Pro")," \u4e3b\u9898\u7684\u4ee3\u7801\u505a\u4e00\u4e9b\u7b80\u5355",(0,o.kt)("strong",{parentName:"p"},"\u6539\u9020"),"\u3002"))),(0,o.kt)("h3",{id:"\u6539\u9020\u4e3b\u9898\u5305"},"\u6539\u9020\u4e3b\u9898\u5305"),(0,o.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"OneDark-Pro")," \u76ee\u5f55\u4e0b\u65b0\u5efa ",(0,o.kt)("inlineCode",{parentName:"p"},"index.ts")," \u6587\u4ef6\uff0c\u5177\u4f53\u5185\u5bb9\u5982\u4e0b:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \u8bfb\u53d6 package.json \u4e2d\u7684\u5185\u5bb9\nconst OneDarkPro = require('./package.json');\n\n// \u8bfb\u53d6\u8be6\u7ec6\u7684\u4e3b\u9898\u989c\u8272\u5185\u5bb9\nconst themes = [\n    require('./themes/OneDark-Pro.json'),\n    require('./themes/OneDark-Pro-flat.json'),\n    require('./themes/OneDark-Pro-darker.json'),\n];\n\nconst packageThemes = OneDarkPro.contributes?.themes || [];\n\nOneDarkPro.contributes.themes = packageThemes.map((theme, index) => {\n    theme.id = theme.label;\n    theme = Object.assign({}, theme, themes[index]);\n    return theme;\n});\n\n// \u58f0\u660e\u5f53\u524d\u4e3b\u9898\u7684\u552f\u4e00 id\nOneDarkPro.id = 'OneDarkPro';\n\n// \u5bfc\u51fa package.json \u7684\u5185\u5bb9\u4f9b Molecule \u4f7f\u7528\nexport { OneDarkPro };\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"OneDark-Pro")," \u76ee\u5f55\u4e0b\u9664\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"index.js"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"themes")," 3 \u4e2a\u6587\u4ef6\u4e3a\u5fc5\u8981\u4ee5\u5916\uff0c\u5176\u4f59\u6587\u4ef6\u5747\u53ef\u4ee5\u5220\u9664\u3002"))),(0,o.kt)("h3",{id:"\u5e94\u7528\u989c\u8272\u4e3b\u9898"},"\u5e94\u7528\u989c\u8272\u4e3b\u9898"),(0,o.kt)("p",null,"\u6700\u540e\uff0c\u6211\u4eec\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"App.js")," \u4e2d\u6dfb\u52a0\u8be5\u6269\u5c55\u5305"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/App.js"',title:'"src/App.js"'},"import { OneDarkPro } from './extensions/OneDark-Pro';\n\nfunction App() {\n    return (\n        <MoleculeProvider extensions={[OneDarkPro]}>\n            <Workbench />\n        </MoleculeProvider>\n    );\n}\n")),(0,o.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5feb\u6377\u952e ",(0,o.kt)("inlineCode",{parentName:"p"},"Command/Ctrl + K")," \u5feb\u901f\u8bbf\u95ee",(0,o.kt)("strong",{parentName:"p"},"\u300c\u989c\u8272\u4e3b\u9898\u9762\u677f\u300d"),"\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"colorTheme",src:t(47176).Z})),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u9664\u4e86\u5185\u7f6e\u7684\u51e0\u4e2a\u989c\u8272\u4e3b\u9898\u5916\uff0c\u6211\u4eec\u5df2\u7ecf\u53ef\u4ee5\u5728\u989c\u8272\u4e3b\u9898\u9762\u677f\u4e2d\u770b\u5230\u521a\u624d\u6211\u4eec\u65b0\u6dfb\u52a0\u7684\u989c\u8272\u4e3b\u9898\u6269\u5c55\u4e2d\u7684\u4e09\u4e2a\u989c\u8272\u4e3b\u9898\uff0c\u5206\u522b\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"One Dark Pro"),"\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"One Dark Pro Darker")," \u4ee5\u53ca ",(0,o.kt)("inlineCode",{parentName:"p"},"One Dark Pro Flat"),"\u3002"))),(0,o.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u989c\u8272\u4e3b\u9898"},"\u81ea\u5b9a\u4e49\u989c\u8272\u4e3b\u9898"),(0,o.kt)("p",null,"\u5982\u679c\u5f53\u524d VSCode \u6269\u5c55\u5e02\u573a\u6ca1\u6709\u989c\u8272\u4e3b\u9898\u80fd\u6ee1\u8db3\u4f60\uff0c\u90a3\u4e48\u4f60\u53ef\u4ee5\u9009\u62e9",(0,o.kt)("strong",{parentName:"p"},"\u81ea\u5b9a\u4e49\u989c\u8272\u4e3b\u9898"),"\u6269\u5c55\uff0c\u76f8\u6bd4\u4f7f\u7528\u5df2\u5b58\u5728\u7684\u989c\u8272\u4e3b\u9898\u6269\u5c55\uff0c\u81ea\u5b9a\u4e49\u989c\u8272\u4e3b\u9898\u6269\u5c55\u4f1a\u9700\u8981\u66f4\u591a\u7684\u65f6\u95f4\u3002"),(0,o.kt)("h3",{id:"\u521b\u5efa\u989c\u8272\u4e3b\u9898\u6269\u5c55"},"\u521b\u5efa\u989c\u8272\u4e3b\u9898\u6269\u5c55"),(0,o.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"extensions")," \u76ee\u5f55\u4e0b\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6\u5939 ",(0,o.kt)("inlineCode",{parentName:"p"},"MyTheme")," \u7684\u6587\u4ef6\u5939\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ mkdir MyTheme\n$ cd MyTheme\n")),(0,o.kt)("p",null,"\u7136\u540e\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"MyTheme")," \u6587\u4ef6\u5939\u4e0b\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"npm init -y")," \u547d\u4ee4\u65b0\u5efa\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," \u6587\u4ef6."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ tree -L 2\n.\n\u251c\u2500\u2500 MyTheme\n\u2502   \u2514\u2500\u2500 package.json\n\u2514\u2500\u2500 OneDark-Pro\n    \u251c\u2500\u2500 index.js\n    \u251c\u2500\u2500 package.json\n    \u2514\u2500\u2500 themes\n")),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u6dfb\u52a0",(0,o.kt)("strong",{parentName:"p"},"\u5fc5\u8981\u7684\u5c5e\u6027"),"\uff0c\u5982\u4e0b:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'{\n    "name": "my-theme",\n    "version": "1.0.0",\n    "description": "",\n    "main": "index.js",\n    "scripts": {\n        "test": "echo \\"Error: no test specified\\" && exit 1"\n    },\n    "keywords": [],\n    "author": "",\n    "license": "ISC",\n+   "contributes": {\n+     "themes": [\n+       {\n+         "label": "My Theme",\n+         "uiTheme": "vs-dark",\n+         "path": "./themes/MyTheme.json"\n+       }\n+     ]\n+   }\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"label")," \u5c5e\u6027\u7684\u610f\u601d\u662f\u5f53\u8be5\u4e3b\u9898\u88ab Molecule \u52a0\u8f7d\u540e\uff0c\u5728\u989c\u8272\u4e3b\u9898\u9762\u677f\u4e2d\u663e\u793a\u7684\u540d\u79f0 ",(0,o.kt)("inlineCode",{parentName:"li"},"My Theme"),"\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"uiTheme")," \u5c5e\u6027\u7684\u610f\u601d\u662f\u8be5\u4e3b\u9898\u662f\u6697\u9ed1\u4e3b\u9898\u8fd8\u662f\u4eae\u8272\u4e3b\u9898\uff0c\u6291\u6216\u662f\u9ad8\u5bf9\u6bd4\u5ea6\u4e3b\u9898."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"path")," \u5c5e\u6027\u7684\u610f\u601d\u662f\u8be5\u4e3b\u9898\u7684\u8be6\u7ec6\u4e3b\u9898\u914d\u7f6e\u6240\u5728\u7684\u8def\u5f84.")),(0,o.kt)("p",null,"\u7136\u540e\uff0c\u6211\u4eec\u518d\u521b\u5efa\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"themes/MyTheme.json")," \u6587\u4ef6\uff0c\u5177\u4f53\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "My Theme",\n    "type": "dark",\n    "colors": {\n        "statusBar.background": "#ff0000"\n    }\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name")," \u8868\u793a\u5f53\u524d\u989c\u8272\u4e3b\u9898\uff0c\u5efa\u8bae\u4e0e\u4e0a\u9762\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"label")," \u5c5e\u6027\u4fdd\u6301\u4e00\u81f4"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"type")," \u8868\u793a\u5f53\u524d\u989c\u8272\u4e3b\u9898\u7684\u7c7b\u578b"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"colors")," \u8868\u793a\u5f53\u524d\u989c\u8272\u4e3b\u9898\u7684\u5177\u4f53\u989c\u8272")),(0,o.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u53ef\u4ee5\u770b\u5230\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"My Theme")," \u4e3b\u9898\u4fee\u6539\u4e86 ",(0,o.kt)("a",{parentName:"p",href:"extend-workbench#%E7%8A%B6%E6%80%81%E6%A0%8Fstatusbar"},"StatusBar")," \u7684\u80cc\u666f\u989c\u8272\u4e3a\u7ea2\u8272\u3002"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Molecule \u7684 ColorTheme ",(0,o.kt)("strong",{parentName:"p"},"\u517c\u5bb9")," ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/api/references/theme-color"},"VSCode ColorTheme"),"\uff0c\n\u66f4\u591a\u7684",(0,o.kt)("strong",{parentName:"p"},"\u989c\u8272\u4fee\u6539\u9879"),"\uff0c\u8bf7\u67e5\u9605 ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/api/references/theme-color"},"VSCode ColorTheme"),"\u3002"))),(0,o.kt)("p",null,"\u7136\u540e\u6211\u4eec\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"MyTheme")," \u76ee\u5f55\u4e0b\u521b\u5efa ",(0,o.kt)("inlineCode",{parentName:"p"},"index.ts"),"\uff0c\u5177\u4f53\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \u8bfb\u53d6 package.json \u4e2d\u7684\u5185\u5bb9\nconst MyTheme = require('./package.json');\n\n// \u8bfb\u53d6\u8be6\u7ec6\u7684\u4e3b\u9898\u989c\u8272\u5185\u5bb9\nconst themes = [require('./themes/MyTheme.json')];\n\nconst packageThemes = MyTheme.contributes?.themes || [];\n\nMyTheme.contributes.themes = packageThemes.map((theme, index) => {\n    // \u4e3a\u6bcf\u4e2a theme \u6dfb\u52a0 id\n    theme.id = theme.label;\n    theme = Object.assign({}, theme, themes[index]);\n    return theme;\n});\n\n// \u58f0\u660e\u5f53\u524d\u4e3b\u9898\u7684\u552f\u4e00 id\nMyTheme.id = 'MyTheme';\n\n// \u5bfc\u51fa package.json \u7684\u5185\u5bb9\u4f9b Molecule \u4f7f\u7528\nexport { MyTheme };\n")),(0,o.kt)("h3",{id:"\u5e94\u7528\u989c\u8272\u4e3b\u9898\u6269\u5c55"},"\u5e94\u7528\u989c\u8272\u4e3b\u9898\u6269\u5c55"),(0,o.kt)("p",null,"\u540c\u6837, \u81ea\u5b9a\u4e49\u7684\u4e3b\u9898\u6269\u5c55\u7a0b\u5e8f\u4e5f\u662f\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"App.js")," \u4e2d\u7684 ",(0,o.kt)("a",{parentName:"p",href:"../api/classes/MoleculeProvider"},"MoleculeProvider")," \u7ec4\u4ef6\u4e2d\u5f15\u5165\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/App.js"',title:'"src/App.js"'},"import { OneDarkPro } from './extensions/OneDark-Pro';\nimport { MyTheme } from './extensions/MyTheme';\n\nfunction App() {\n    return (\n        <MoleculeProvider extensions={[OneDarkPro, MyTheme]}>\n            <Workbench />\n        </MoleculeProvider>\n    );\n}\n")),(0,o.kt)("p",null,"\u6253\u5f00\u5728",(0,o.kt)("strong",{parentName:"p"},"\u989c\u8272\u4e3b\u9898\u5feb\u901f\u8bbf\u95ee\u9762\u677f"),"\uff0c\u6211\u4eec\u5e94\u8be5\u5c31\u80fd\u770b\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"My Theme")," \u7684\u4e3b\u9898\u4e86\u3002\u9009\u62e9\u8be5\u4e3b\u9898\u540e\uff0c\u5e95\u90e8 ",(0,o.kt)("a",{parentName:"p",href:"extend-workbench#%E7%8A%B6%E6%80%81%E6%A0%8Fstatusbar"},"StatusBar")," \u7684",(0,o.kt)("strong",{parentName:"p"},"\u80cc\u666f\u989c\u8272"),"\u5373\u53d8\u6210\u4e86\u7ea2\u8272\u3002"),(0,o.kt)("h2",{id:"\u989c\u8272\u4e3b\u9898colortheme-\u670d\u52a1\u5bf9\u8c61"},"\u989c\u8272\u4e3b\u9898\uff08ColorTheme\uff09 \u670d\u52a1\u5bf9\u8c61"),(0,o.kt)("p",null,"Molecule \u63d0\u4f9b\u4e86 ",(0,o.kt)("a",{parentName:"p",href:"../api/classes/molecule.ColorThemeService"},"ColorTheme")," \u670d\u52a1\u5bf9\u8c61\uff0c\u652f\u6301\u5f00\u53d1\u8005\u5728\u5fc5\u8981\u7684\u60c5\u51b5\u4e0b\u4e3b\u52a8\u505a\u4e00\u4e9b\u4e3b\u52a8\u64cd\u4f5c\uff0c\u4f8b\u5982",(0,o.kt)("a",{parentName:"p",href:"../api/classes/molecule.ColorThemeService#settheme"},"\u8bbe\u7f6e\u4e3b\u9898"),"\u3001",(0,o.kt)("a",{parentName:"p",href:"../api/classes/molecule.ColorThemeService#getthemebyid"},"\u83b7\u53d6\u4e3b\u9898")," \u7b49\u7b49\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Set the current Color Theme\nmolecule.colorTheme.setTheme(themeId);\n// Get Themes\nmolecule.colorTheme.getThemes();\n")),(0,o.kt)("p",null,"\u66f4\u591a\u6709\u5173 ",(0,o.kt)("a",{parentName:"p",href:"../api/classes/molecule.ColorThemeService"},"ColorTheme")," \u7684\u64cd\u4f5c\uff0c\u8bf7\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"../api/classes/molecule.ColorThemeService"},"API"),"\u3002"))}d.isMDXComponent=!0},47176:function(e,n,t){n.Z=t.p+"assets/images/colorThemePalette-a850bbde1077e9c39634b7b3b53e2b13.jpg"}}]);