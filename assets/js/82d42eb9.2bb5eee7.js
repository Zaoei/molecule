"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[72952],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),d=o,x=u["".concat(l,".").concat(d)]||u[d]||m[d]||r;return t?i.createElement(x,a(a({ref:n},p),{},{components:t})):i.createElement(x,a({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<r;c++)a[c]=t[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},73867:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var i=t(83117),o=t(80102),r=(t(67294),t(3905)),a=["components"],s={title:"Extension",sidebar_label:"Extension"},l=void 0,c={unversionedId:"guides/extension",id:"version-0.9.0-beta.2/guides/extension",title:"Extension",description:"Extension as one of the most important core modules of Molecule, it provides a mechanism for extending the IDE Workbench. Through this mechanism, you can easily implement customization and manage these extended applications.",source:"@site/versioned_docs/version-0.9.0-beta.2/guides/extension.md",sourceDirName:"guides",slug:"/guides/extension",permalink:"/molecule/docs/guides/extension",editUrl:"https://github.com/DTStack/molecule/edit/main/website/versioned_docs/version-0.9.0-beta.2/guides/extension.md",tags:[],version:"0.9.0-beta.2",frontMatter:{title:"Extension",sidebar_label:"Extension"},sidebar:"docs",previous:{title:"The First Extension",permalink:"/molecule/docs/the-first-extension"},next:{title:"Workbench",permalink:"/molecule/docs/guides/extend-workbench"}},p=[{value:"IExtension",id:"iextension",children:[{value:"Literal object",id:"literal-object",children:[],level:3},{value:"Class object",id:"class-object",children:[],level:3}],level:2},{value:"ExtensionService",id:"extensionservice",children:[],level:2},{value:"Disable extension",id:"disable-extension",children:[],level:2}],m={toc:p};function u(e){var n=e.components,t=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../api/interfaces/molecule.model.IExtension"},"Extension")," as one of the most important ",(0,r.kt)("strong",{parentName:"p"},"core")," modules of Molecule, it provides a mechanism for extending the IDE Workbench. Through this mechanism, you can easily implement customization and manage these extended applications."),(0,r.kt)("h2",{id:"iextension"},"IExtension"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../api/interfaces/molecule.model.IExtension"},"Extension")," is an interface that contains ",(0,r.kt)("strong",{parentName:"p"},"attributes")," and ",(0,r.kt)("strong",{parentName:"p"},"methods")," such as ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"activate"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dispose"),", etc. This ",(0,r.kt)("strong",{parentName:"p"},"interface")," can help developers create extensions faster."),(0,r.kt)("p",null,"Molecule supports you to use ",(0,r.kt)("strong",{parentName:"p"},"literal")," or ",(0,r.kt)("strong",{parentName:"p"},"class")," to define extension objects, depending on your preference."),(0,r.kt)("h3",{id:"literal-object"},"Literal object"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { IContributeType, IExtension } from '@dtinsight/molecule/esm/model';\nimport { IExtensionService } from '@dtinsight/molecule/esm/services';\n\nexport const ExampleExt: IExtension = {\n    id: 'ExampleExt',\n    name: 'Example Extension',\n    contributes: {},\n    activate(extensionCtx: IExtensionService) {},\n    dispose(extensionCtx: IExtensionService) {},\n};\n")),(0,r.kt)("h3",{id:"class-object"},"Class object"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import molecule from '@dtinsight/molecule';\nimport { IExtension } from '@dtinsight/molecule/esm/model/extension';\nimport { IExtensionService } from '@dtinsight/molecule/esm/services';\n\nexport class ExampleExt implements IExtension {\n    id: string = 'ExampleExt';\n    name: string = 'Example Extension';\n\n    activate(extensionCtx: IExtensionService): void {\n        // Do something\n    }\n\n    dispose(extensionCtx: IExtensionService): void {\n        // Do something\n    }\n}\n")),(0,r.kt)("h2",{id:"extensionservice"},"ExtensionService"),(0,r.kt)("p",null,"In Molecule, you can manage the ",(0,r.kt)("strong",{parentName:"p"},"addition, query, deletion")," and other operations of extensions through the ",(0,r.kt)("a",{parentName:"p",href:"../api/classes/molecule.ExtensionService"},"ExtensionService")," service object. Examples are as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Add Extension, but no activated\nmolecule.extension.add(extensions);\n// Dispose the Extension\nmolecule.extension.dispose(extensionId);\n// Get an Extension\nmolecule.extension.getExtension(extensionId);\n")),(0,r.kt)("h2",{id:"disable-extension"},"Disable extension"),(0,r.kt)("p",null,"In some cases, you may want to ",(0,r.kt)("strong",{parentName:"p"},"disable")," some built-in extensions in Molecule. Here you can use the ",(0,r.kt)("a",{parentName:"p",href:"../api/interfaces/molecule.IExtensionService#inactive"},(0,r.kt)("inlineCode",{parentName:"a"},"inactive"))," method in ",(0,r.kt)("a",{parentName:"p",href:"../api/classes/molecule.ExtensionService"},"ExtensionService"),", for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import React from 'react';\nimport molecule from '@dtinsight/molecule';\nimport { MoleculeProvider, Workbench } from '@dtinsight/molecule';\nimport '@dtinsight/molecule/esm/style/mo.css';\n\n// All Extension instances\nimport extensions from './extensions';\n\nmolecule.extension.inactive((extension: IExtension) => {\n    // Inactive the Extension which id is ExampleExt\n    if (extension.id === 'ExampleExt') {\n        return true;\n    }\n});\n\nfunction App() {\n    return (\n        <MoleculeProvider extensions={extensions}>\n            <Workbench />\n        </MoleculeProvider>\n    );\n}\n\nexport default App;\n")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"It should be noted that the ",(0,r.kt)("a",{parentName:"p",href:"../api/interfaces/molecule.IExtensionService#inactive"},"inactive")," method needs to be declared before ",(0,r.kt)("a",{parentName:"p",href:"../api/classes/MoleculeProvider"},"MoleculeProvider"),"."))))}u.isMDXComponent=!0}}]);