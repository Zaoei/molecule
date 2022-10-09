"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[38380],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(t),d=o,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return t?i.createElement(k,a(a({ref:n},l),{},{components:t})):i.createElement(k,a({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<r;p++)a[p]=t[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},271:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var i=t(87462),o=t(63366),r=(t(67294),t(3905)),a=["components"],c={title:"\u5feb\u6377\u8bbf\u95ee\uff08QuickAccess)",sidebar_label:"\u5feb\u6377\u8bbf\u95ee"},s=void 0,p={unversionedId:"guides/extend-quick-access",id:"version-0.9.0-beta.2/guides/extend-quick-access",title:"\u5feb\u6377\u8bbf\u95ee\uff08QuickAccess)",description:"\u5f97\u76ca\u4e8e Monaco Editor \u5feb\u6377\u8bbf\u95ee \uff08QuickAccess\uff09 \u5f3a\u5927\u7684\u6269\u5c55\u80fd\u529b\uff0c\u6211\u4eec\u628a\u5141\u8bb8\u5f00\u53d1\u8005\u5728 Molecule \u4e2d\u901a\u8fc7 Extension \u7684\u65b9\u5f0f\uff0c\u53bb\u81ea\u5b9a\u4e49\u5feb\u6377\u8bbf\u95ee\u529f\u80fd\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.9.0-beta.2/guides/extend-quick-access.md",sourceDirName:"guides",slug:"/guides/extend-quick-access",permalink:"/molecule/zh-CN/docs/0.9.0-beta.2/guides/extend-quick-access",draft:!1,editUrl:"https://github.com/DTStack/molecule/edit/main/website/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.9.0-beta.2/guides/extend-quick-access.md",tags:[],version:"0.9.0-beta.2",frontMatter:{title:"\u5feb\u6377\u8bbf\u95ee\uff08QuickAccess)",sidebar_label:"\u5feb\u6377\u8bbf\u95ee"},sidebar:"docs",previous:{title:"\u5feb\u6377\u952e",permalink:"/molecule/zh-CN/docs/0.9.0-beta.2/guides/extend-keybinding"},next:{title:"\u56fd\u9645\u5316",permalink:"/molecule/zh-CN/docs/0.9.0-beta.2/guides/extend-locales"}},l={},u=[{value:"\u5b9a\u4e49\u5feb\u6377\u8bbf\u95ee Action \u5bf9\u8c61",id:"\u5b9a\u4e49\u5feb\u6377\u8bbf\u95ee-action-\u5bf9\u8c61",level:2},{value:"\u6ce8\u518c Action",id:"\u6ce8\u518c-action",level:2}],m={toc:u};function d(e){var n=e.components,c=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},m,c,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5f97\u76ca\u4e8e ",(0,r.kt)("a",{parentName:"p",href:"https://microsoft.github.io/monaco-editor/"},"Monaco Editor")," ",(0,r.kt)("strong",{parentName:"p"},"\u5feb\u6377\u8bbf\u95ee \uff08QuickAccess\uff09")," \u5f3a\u5927\u7684\u6269\u5c55\u80fd\u529b\uff0c\u6211\u4eec\u628a\u5141\u8bb8\u5f00\u53d1\u8005\u5728 Molecule \u4e2d\u901a\u8fc7 ",(0,r.kt)("strong",{parentName:"p"},"Extension")," \u7684\u65b9\u5f0f\uff0c\u53bb\u81ea\u5b9a\u4e49",(0,r.kt)("strong",{parentName:"p"},"\u5feb\u6377\u8bbf\u95ee"),"\u529f\u80fd\u3002"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Molecule \u4e2d\u7684\u5feb\u6377\u8bbf\u95ee\u529f\u80fd\uff0c\u4e0e",(0,r.kt)("a",{parentName:"p",href:"/molecule/zh-CN/docs/0.9.0-beta.2/guides/extend-keybinding"},"\u5feb\u6377\u952e"),"\u529f\u80fd\u4e00\u6837, \u90fd\u5f97\u4f9d\u8d56 ",(0,r.kt)("inlineCode",{parentName:"p"},"Action2")," \u62bd\u8c61\u7c7b\u3002\u76ee\u524d\u5b9e\u73b0\u6b64\u529f\u80fd\u9700\u8981\u5f15\u5165\u76f8\u5173\u7684 monaco-editor \u6a21\u5757\u3002"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Search files by name",src:t(72592).Z,width:"1238",height:"330"})),(0,r.kt)("h2",{id:"\u5b9a\u4e49\u5feb\u6377\u8bbf\u95ee-action-\u5bf9\u8c61"},"\u5b9a\u4e49\u5feb\u6377\u8bbf\u95ee Action \u5bf9\u8c61"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u672c\u6587\u5185\u5bb9\u4e2d\u7684\u6240\u6709\u4ee3\u7801\uff0c\u90fd\u4ee5 ",(0,r.kt)("a",{parentName:"p",href:"../quick-start"},"Quick Start")," \u4e2d\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo"},"molecule-demo")," \u9879\u76ee\u4e3a\u57fa\u7840\u6f14\u793a\u3002"))),(0,r.kt)("p",null,"\u6211\u4eec\u4e00\u8d77\u6765\u770b\u4e2a\u5177\u4f53\u793a\u4f8b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Search files by name",src:t(79362).Z,width:"1236",height:"245"})),(0,r.kt)("p",null,"\u56fe\u4e2d\u7684 ",(0,r.kt)("strong",{parentName:"p"},"\u300c\u5feb\u901f\u8bbf\u95ee\u641c\u7d22\u300d")," \u9762\u677f\uff0c\u901a\u8fc7\u5feb\u6377\u952e ",(0,r.kt)("inlineCode",{parentName:"p"},"Command/Ctrl + P")," \u6253\u5f00\uff0c\u901a\u8fc7\u8f93\u5165\u6587\u4ef6\u540d\u79f0\uff0c\u5373\u53ef\u4ee5 ",(0,r.kt)("strong",{parentName:"p"},"AutoComplete")," \u7684\u6548\u679c\u5c55\u793a\u51fa\u6587\u4ef6\u5217\u8868\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u9009\u4e2d\u6587\u4ef6"),"\u5219\u5728",(0,r.kt)("strong",{parentName:"p"},"\u7f16\u8f91\u5668"),"\u4e2d\u6253\u5f00\u3002"),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u65b0\u5efa\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"quickOpenAction.ts")," \u6587\u4ef6, \u6587\u4ef6\u4e2d\u5b9a\u4e49\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"QuickOpenAction")," Action \u5bf9\u8c61\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="/src/extensions/theFirstExtension/quickOpenAction.ts"',title:'"/src/extensions/theFirstExtension/quickOpenAction.ts"'},"import {\n    Action2,\n    KeybindingWeight,\n} from '@dtinsight/molecule/esm/monaco/common';\nimport { KeyCode, KeyMod } from '@dtinsight/molecule/esm/monaco';\nimport {\n    IQuickInputService,\n    //@ts-ignore\n} from 'monaco-editor/esm/vs/platform/quickinput/common/quickInput';\n//@ts-ignore\nimport { KeyChord } from 'monaco-editor/esm/vs/base/common/keyCodes';\n\nimport molecule from '@dtinsight/molecule';\nimport { debounce } from 'lodash';\n\nimport API from '../../api';\nimport { transformToEditorTab } from '../../common';\n\nexport class QuickOpenAction extends Action2 {\n    static readonly ID = 'QuickOpenFile';\n    static readonly LABEL = 'Search files by name';\n\n    constructor() {\n        super({\n            id: QuickOpenAction.ID,\n            label: QuickOpenAction.LABEL,\n            title: QuickOpenAction.LABEL,\n            alias: QuickOpenAction.LABEL,\n            precondition: undefined,\n            f1: true, // Whether show the QuickOpenFile in Command Palette\n            keybinding: {\n                // Keybinding\n                weight: KeybindingWeight.WorkbenchContrib,\n                when: undefined,\n                primary: KeyChord(KeyMod.CtrlCmd | KeyCode.KEY_P),\n            },\n        });\n    }\n\n    run(accessor: any, ...args: any[]) {\n        const quickInputService = accessor.get(IQuickInputService); // Get the quickInput\n\n        const quickPick = quickInputService.createQuickPick();\n        quickPick.items = [];\n        quickPick.placeholder = QuickOpenAction.LABEL;\n\n        quickPick.activeItems = [];\n        quickPick.canSelectMany = false;\n\n        const queryPick = debounce((value) => {\n            API.query(value).then((res) => {\n                // Query by the name\n                quickPick.items = res.map((item) => {\n                    // Display the result\n                    item.label = item.name;\n                    return item;\n                });\n            });\n        }, 300);\n\n        quickPick.onDidChangeValue(queryPick);\n\n        quickPick.onDidAccept((i: any) => {\n            const item = quickPick.activeItems[0];\n            if (item) {\n                molecule.editor.open(transformToEditorTab(item));\n            }\n            quickPick.hide();\n        });\n        quickPick.show();\n    }\n}\n")),(0,r.kt)("p",null,"\u4ee3\u7801\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"QuickOpenAction "),"\u7ee7\u627f\u4e86\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"Action2")," \u5bf9\u8c61\uff0c\u8be5\u5bf9\u8c61\u9ed8\u8ba4\u5c01\u88c5\u5728\u4e86 Molecule \u4e2d\u3002\u6211\u4eec\u5728\u6784\u9020\u5668\u4e2d\u58f0\u660e ",(0,r.kt)("strong",{parentName:"p"},"Action")," \u7684\u4e00\u4e9b\u57fa\u672c\u4fe1\u606f\u3002\u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," \u4e3a\u5fc5\u8981\u7684\u53c2\u6570\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"label")," \u7528\u4e8e\u663e\u793a\u5f53\u524d\u7684 Action \u540d\u79f0\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"run")," \u65b9\u6cd5\u5904\u7406",(0,r.kt)("strong",{parentName:"p"},"\u89e6\u53d1"),"\u540e\u7684\u903b\u8f91\u3002"),(0,r.kt)("h2",{id:"\u6ce8\u518c-action"},"\u6ce8\u518c Action"),(0,r.kt)("p",null,"\u8ddf\u5176\u4ed6\u7684\u6269\u5c55\u7a0b\u5e8f\u76f8\u540c\uff0c ",(0,r.kt)("inlineCode",{parentName:"p"},"QuickOpenAction")," \u5bf9\u8c61\u9700\u8981\u5728\u6269\u5c55 ",(0,r.kt)("inlineCode",{parentName:"p"},"activate")," \u65b9\u6cd5\u4e2d\u6fc0\u6d3b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"activate(extensionCtx: IExtensionService): void {\n    // Register the Action\n    molecule.extension.registerAction(QuickOpenAction);\n    // Or\n    // extensionCtx.registerAction(QuickOpenAction);\n}\n")),(0,r.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u9700\u8981\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"../api/interfaces/molecule.IExtensionService"},"ExtensionService")," \u5bf9\u8c61\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"registerAction")," \u65b9\u6cd5\u6765\u6ce8\u518c\u3002\u91cd\u65b0\u52a0\u8f7d\n\u5e94\u7528\u754c\u9762\uff0c\u7136\u540e\u6211\u4eec\u53ef\u4ee5\u5728 ",(0,r.kt)("strong",{parentName:"p"},"Command Palette")," \u4e2d\u627e\u5230 ",(0,r.kt)("strong",{parentName:"p"},"Search files by name")," \u9879\uff0c\u540c\u65f6\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5feb\u6377\u952e ",(0,r.kt)("inlineCode",{parentName:"p"},"Command/Ctrl + P")," \u6765\u6fc0\u6d3b\u3002"))}d.isMDXComponent=!0},72592:function(e,n,t){n.Z=t.p+"assets/images/extend-quickAccess-1-290c1da6e5859105294e8f7a95d7cd5c.png"},79362:function(e,n,t){n.Z=t.p+"assets/images/extend-quickAccess-e83d9c445ef4462406b8f424f78281ed.png"}}]);