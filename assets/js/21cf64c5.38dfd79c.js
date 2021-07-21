(self.webpackChunktypegraphql_prisma_website=self.webpackChunktypegraphql_prisma_website||[]).push([[202],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,f=u["".concat(p,".").concat(m)]||u[m]||c[m]||a;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2661:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o={title:"Hiding Prisma model field in GraphQL schema",sidebar_label:"Hiding field",sidebar_position:3},l=void 0,p={unversionedId:"advanced/hiding-field",id:"advanced/hiding-field",isDocsHomePage:!1,title:"Hiding Prisma model field in GraphQL schema",description:"Sometimes you may want to not expose some fields in GraphQL schema.",source:"@site/../docs/advanced/hiding-field.md",sourceDirName:"advanced",slug:"/advanced/hiding-field",permalink:"/docs/advanced/hiding-field",editUrl:"https://github.comichalLytek/typegraphql-prisma/edit/main/docs/../docs/advanced/hiding-field.md",version:"current",sidebarPosition:3,frontMatter:{title:"Hiding Prisma model field in GraphQL schema",sidebar_label:"Hiding field",sidebar_position:3},sidebar:"docs",previous:{title:"Simple resolvers",permalink:"/docs/advanced/simple-resolvers"},next:{title:"Adding model fields",permalink:"/docs/advanced/adding-fields"}},s=[],d={toc:s};function c(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Sometimes you may want to not expose some fields in GraphQL schema.\nTo achieve this, just put the ",(0,a.kt)("inlineCode",{parentName:"p"},"@TypeGraphQL.omit")," doc line above the model field definition in ",(0,a.kt)("inlineCode",{parentName:"p"},"schema.prisma")," file, e.g:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-prisma"},"model User {\n  id        Int     @default(autoincrement()) @id\n  email     String  @unique\n  /// @TypeGraphQL.omit(output: true)\n  password  String\n  posts     Post[]\n}\n")),(0,a.kt)("p",null,"Thanks to that, the field won't show up in the GraphQL schema representation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type User {\n  id: Int!\n  email: String!\n  posts: [Post!]!\n}\n")),(0,a.kt)("p",null,"However, the prisma model field will be still visible in all input types, like ",(0,a.kt)("inlineCode",{parentName:"p"},"UserWhereInput")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"UserCreateInput"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input UserCreateInput {\n  email: String!\n  password: String!\n  posts: PostCreateManyWithoutAuthorInput!\n}\n")),(0,a.kt)("p",null,"This behavior is temporary and will be improved soon by introducing ",(0,a.kt)("inlineCode",{parentName:"p"},"input: true")," option to ",(0,a.kt)("inlineCode",{parentName:"p"},"@TypeGraphQL.omit"),"."))}c.isMDXComponent=!0}}]);