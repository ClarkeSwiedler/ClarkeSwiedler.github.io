(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{200:function(n,t,e){"use strict";e.r(t),e.d(t,"default",function(){return c}),e.d(t,"pageQuery",function(){return s});var r=e(0),a=e.n(r),i=e(202),o=e(207),l=e(208);var c=function(n){var t,e;function r(){return n.apply(this,arguments)||this}return e=n,(t=r).prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e,r.prototype.render=function(){var n=this.props.data,t=n.site.siteMetadata.title,e=n.allMarkdownRemark.edges;return a.a.createElement(o.a,{title:t},a.a.createElement(l.a,{title:"All posts",keywords:["blog","gatsby","javascript","react"]}),a.a.createElement("article",null,a.a.createElement("div",{className:"page-content"},e.map(function(n){var t=n.node,e=t.frontmatter.title||t.fields.slug;return a.a.createElement("div",{key:t.fields.slug},a.a.createElement("h3",null,a.a.createElement(i.a,{to:t.fields.slug},e)),a.a.createElement("small",null,t.frontmatter.date),a.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}))}))))},r}(a.a.Component),s="3927474892"},202:function(n,t,e){"use strict";e.d(t,"b",function(){return s});var r=e(0),a=e.n(r),i=e(66),o=e.n(i);e.d(t,"a",function(){return o.a});e(204),e(9).default.enqueue;var l=a.a.createContext({});function c(n){var t=n.staticQueryData,e=n.data,r=n.query,i=n.render,o=e?e.data:t[r]&&t[r].data;return a.a.createElement(a.a.Fragment,null,o&&i(o),!o&&a.a.createElement("div",null,"Loading (StaticQuery)"))}var s=function(n){var t=n.data,e=n.query,r=n.render,i=n.children;return a.a.createElement(l.Consumer,null,function(n){return a.a.createElement(c,{data:t,query:e,render:r||i,staticQueryData:n})})}},204:function(n,t,e){var r;n.exports=(r=e(206))&&r.default||r},205:function(n,t,e){"use strict";e.d(t,"a",function(){return o});var r=e(203);function a(){var n=function(n,t){t||(t=n.slice(0));return n.raw=t,n}(["\n","\n","\n"]);return a=function(){return n},n}e.d(t,"b",function(){return r.b});var i={black:"#000000",background:"#fffff8",contrast:"#111",contrastLightest:"#dad9d9",accent:"red",white:"#ffffff"},o=Object(r.a)(a(),"\nhtml {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n*, *::before, *::after {\n  box-sizing: inherit;\n}\n\nbody {\n  margin: 0 !important;\n  padding: 0;\n}\n\n::selection {\n  background-color: "+i.contrastLightest+";\n  color: rgba(0, 0, 0, 0.70);\n}\n\na.anchor, a.anchor:hover, a.anchor:link {\n  background: none !important;\n}\n\nfigure {\n  a.gatsby-resp-image-link {\n    background: none;\n  }\n\n  span.gatsby-resp-image-wrapper {\n    max-width: 100% !important;\n  }\n}\n","\nhtml {\n  font-size: 15px;\n}\n\nbody {\n  width: 87.5%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 12.5%;\n  font-family: Palatino, 'Palatino Linotype', 'Palatino LT STD', 'Book Antiqua', Georgia, serif;\n  background-color: white;\n  color: #111;\n  max-width: 1400px;\n}\n\nh1 {\n  font-weight: 400;\n  margin-top: 4rem;\n  margin-bottom: 1.5rem;\n  font-size: 3.2rem;\n  line-height: 1;\n}\n\nh2 {\n  font-style: italic;\n  font-weight: 400;\n  margin-top: 2.1rem;\n  margin-bottom: 1.4rem;\n  font-size: 2.2rem;\n  line-height: 1;\n}\n\nh3 {\n  font-style: italic;\n  font-weight: 400;\n  font-size: 1.7rem;\n  margin-top: 2rem;\n  margin-bottom: 1.4rem;\n  line-height: 1;\n}\n\nhr {\n  display: block;\n  height: 1px;\n  width: 55%;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n\narticle {\n  position: relative;\n  padding: 5rem 0rem;\n}\n\nsection {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n\np,\nol,\nul {\n  font-size: 1.4rem;\n  line-height: 2rem;\n}\n\np {\n  margin-top: 1.4rem;\n  margin-bottom: 1.4rem;\n  padding-right: 0;\n  vertical-align: baseline;\n}\n\nblockquote {\n  font-size: 1.4rem;\n}\n\nblockquote p {\n  width: 55%;\n  margin-right: 40px;\n}\n\nblockquote footer {\n  width: 55%;\n  font-size: 1.1rem;\n  text-align: right;\n}\n\nsection > p,\nsection > footer,\nsection > table {\n  width: 55%;\n}\n\nsection > ol,\nsection > ul {\n  width: 50%;\n  -webkit-padding-start: 5%;\n}\n\nli:not(:first-child) {\n  margin-top: 0.25rem;\n}\n\nfigure {\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  max-width: 55%;\n  -webkit-margin-start: 0;\n  -webkit-margin-end: 0;\n  margin: 0 0 3em 0;\n}\n\nfigcaption {\n  float: right;\n  clear: right;\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 1.1rem;\n  line-height: 1.6;\n  vertical-align: baseline;\n  position: relative;\n  max-width: 40%;\n}\n\nfigure.fullwidth figcaption {\n  margin-right: 24%;\n}\n\na:link,\na:visited {\n  color: inherit;\n}\n\nimg {\n  max-width: 100%;\n}\n\ndiv.fullwidth,\ntable.fullwidth {\n  width: 100%;\n}\n\ndiv.table-wrapper {\n  overflow-x: auto;\n  font-family: 'Trebuchet MS', 'Gill Sans', 'Gill Sans MT', sans-serif;\n}\n\ncode {\n  font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;\n  font-size: 1rem;\n  line-height: 1.42;\n}\n\nh1 > code,\nh2 > code,\nh3 > code {\n  font-size: 0.8em;\n}\n\npre.code {\n  font-size: 0.9rem;\n  width: 52.5%;\n  margin-left: 2.5%;\n  overflow-x: auto;\n}\n\npre.code.fullwidth {\n  width: 90%;\n}\n\n.fullwidth {\n  max-width: 100%;\n  clear: both;\n}\n\n.iframe-wrapper {\n  position: relative;\n  padding-bottom: 56.25%; /* 16:9 */\n  padding-top: 25px;\n  height: 0;\n}\n\n.iframe-wrapper iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n@media (max-width: 760px) {\n  body {\n    width: 84%;\n    padding-left: 8%;\n    padding-right: 8%;\n  }\n\n  hr,\n  section > p,\n  section > footer,\n  section > table {\n    width: 100%;\n  }\n\n  pre.code {\n    width: 97%;\n  }\n\n  section > ol {\n    width: 90%;\n  }\n\n  section > ul {\n    width: 90%;\n  }\n\n  figure {\n    max-width: 90%;\n  }\n\n  figcaption,\n  figure.fullwidth figcaption {\n    margin-right: 0%;\n    max-width: none;\n  }\n\n  blockquote {\n    margin-left: 1.5em;\n    margin-right: 0em;\n  }\n\n  blockquote p,\n  blockquote footer {\n    width: 100%;\n  }\n\n  label.margin-toggle:not(.sidenote-number) {\n    display: inline;\n  }\n\n  label {\n    cursor: pointer;\n  }\n\n  div.table-wrapper,\n  table {\n    width: 85%;\n  }\n\n  img {\n    width: 100%;\n  }\n}\n")},206:function(n,t,e){"use strict";e.r(t);e(18);var r=e(0),a=e.n(r),i=e(91);t.default=function(n){var t=n.location,e=n.pageResources;return e?a.a.createElement(i.a,Object.assign({location:t,pageResources:e},e.json)):null}},207:function(n,t,e){"use strict";e.d(t,"a",function(){return p});var r=e(0),a=e.n(r),i=e(202),o=e(205);function l(){var n=s(["\n  padding-bottom: 36px;\n"]);return l=function(){return n},n}function c(){var n=s(["\n  ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n  }\n\n  li {\n    display: inline-block;\n    margin: 16px;\n\n    a {\n      background: none;\n    }\n  }\n"]);return c=function(){return n},n}function s(n,t){return t||(t=n.slice(0)),n.raw=t,n}var d=o.b.nav(c()),u=o.b.footer(l()),p=function(n){var t,e;function r(){return n.apply(this,arguments)||this}return e=n,(t=r).prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e,r.prototype.render=function(){var n=this.props.children;return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a,null),a.a.createElement(d,{className:"navigation"},a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(i.a,{to:"/"},"All Posts")),a.a.createElement("li",null,a.a.createElement(i.a,{to:"/tags"},"Tags")),a.a.createElement("li",null,a.a.createElement(i.a,{to:"/about"},"About")))),a.a.createElement("main",{className:"content",role:"main"},n),a.a.createElement(u,{className:"footer"},"© ",(new Date).getFullYear(),","," ","Clarke Swiedler"))},r}(a.a.Component)},208:function(n,t,e){"use strict";e.d(t,"a",function(){return s});e(38);var r=e(209),a=e(0),i=e.n(a),o=e(210),l=e.n(o),c=e(202);var s=function(n){var t,e;function a(){return n.apply(this,arguments)||this}return e=n,(t=a).prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e,a.prototype.render=function(){var n=this;return i.a.createElement(c.b,{query:"872482878",render:function(t){var e=n.props.description||t.site.siteMetadata.description,r=n.props.lang||"en",a=n.props.title,o=n.props.keywords||[];return i.a.createElement(l.a,{htmlAttributes:{lang:r},title:a,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:e},{property:"og:title",content:a},{property:"og:description",content:e},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author.name},{name:"twitter:title",content:a},{name:"twitter:description",content:e}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[])})},data:r})},a}(i.a.Component)},209:function(n){n.exports={data:{site:{siteMetadata:{title:"Clarke Swiedler",description:"Instructions, tutorials, and memos",author:{name:"Clarke Swiedler"}}}}}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-45774513ead30cb2d736.js.map