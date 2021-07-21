(self.webpackChunktypegraphql_prisma_website=self.webpackChunktypegraphql_prisma_website||[]).push([[908],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return g}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(n),g=i,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||o;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1725:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a={title:"Configuration",sidebar_position:2},p=void 0,l={unversionedId:"basics/configuration",id:"basics/configuration",isDocsHomePage:!1,title:"Configuration",description:"Creating generator block",source:"@site/../docs/basics/configuration.md",sourceDirName:"basics",slug:"/basics/configuration",permalink:"/docs/basics/configuration",editUrl:"https://github.comichalLytek/typegraphql-prisma/edit/main/docs/../docs/basics/configuration.md",version:"current",sidebarPosition:2,frontMatter:{title:"Configuration",sidebar_position:2},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/basics/installation"},next:{title:"Usage",permalink:"/docs/basics/usage"}},c=[{value:"Creating generator block",id:"creating-generator-block",children:[]},{value:"Changing output folder",id:"changing-output-folder",children:[]},{value:"Emitting transpiled code",id:"emitting-transpiled-code",children:[]}],s={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"creating-generator-block"},"Creating generator block"),(0,o.kt)("p",null,"After installation, you need to update your ",(0,o.kt)("inlineCode",{parentName:"p"},"schema.prisma")," file and then add a new generator section below the ",(0,o.kt)("inlineCode",{parentName:"p"},"client")," one:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"{10-12}","{10-12}":!0},'datasource postgres {\n  provider = "postgresql"\n  url      = env("DATABASE_URL")\n}\n\ngenerator client {\n  provider = "prisma-client-js"\n}\n\ngenerator typegraphql {\n  provider = "typegraphql-prisma"\n}\n')),(0,o.kt)("p",null,"Then run ",(0,o.kt)("inlineCode",{parentName:"p"},"npx prisma generate")," - this will emit the generated TypeGraphQL classes to the ",(0,o.kt)("inlineCode",{parentName:"p"},"@generated/type-graphql")," folder inside ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules"),"."),(0,o.kt)("h2",{id:"changing-output-folder"},"Changing output folder"),(0,o.kt)("p",null,"When you want to emit the generated files into a different folder, you can configure the default output folder via the ",(0,o.kt)("inlineCode",{parentName:"p"},"output")," config option, e.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"{3}","{3}":!0},'generator typegraphql {\n  provider = "typegraphql-prisma"\n  output   = "../prisma/generated/type-graphql"\n}\n')),(0,o.kt)("h2",{id:"emitting-transpiled-code"},"Emitting transpiled code"),(0,o.kt)("p",null,"By default, when the output path contains ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules"),", the generated code is transpiled - consist of ",(0,o.kt)("inlineCode",{parentName:"p"},"*.js")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"*.d.ts")," files that are ready to use (import) in your code."),(0,o.kt)("p",null,"However, if you explicitly choose some other (non ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules"),") folder in ",(0,o.kt)("inlineCode",{parentName:"p"},"output")," config, the generated code will be emitted as a raw TS source code files which you can just use and import like your other source code files."),(0,o.kt)("p",null,"You can overwrite that behavior by explicitly setting ",(0,o.kt)("inlineCode",{parentName:"p"},"emitTranspiledCode")," config option:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"{4}","{4}":!0},'generator typegraphql {\n  provider           = "typegraphql-prisma"\n  output             = "../prisma/generated/type-graphql"\n  emitTranspiledCode = true\n}\n')))}u.isMDXComponent=!0}}]);