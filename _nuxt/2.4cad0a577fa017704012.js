webpackJsonp([2],{"/teB":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("JuAn"),i=n("amIw"),o=!1;var a=function(e){o||n("dco/")},s=n("VU/8")(r.a,i.a,!1,a,null,null);s.options.__file="node_modules/@nuxtjs/blog/src/app/pages/Collection.vue",t.default=s.exports},"0D8M":function(e,t,n){"use strict";var r=n("eHgB");t.a={name:"Article",props:{id:{required:!0,type:String},title:{required:!0,type:String},description:{required:!0,type:String},published_at:{required:!0,type:String}},filters:{formatDate:r.a}}},"1z4o":function(e,t,n){"use strict";(function(e){var r=n("0D8M"),i=n("QWNB"),o=!1,a={};e.hot&&e.hot.accept(['!!vue-style-loader?{"sourceMap":false}!css-loader?{"sourceMap":false,"minimize":true,"importLoaders":true,"alias":{"/assets":"/Users/znck/Workspace/OpenSource/aby0/aby0.github.io/assets","/static":"/Users/znck/Workspace/OpenSource/aby0/aby0.github.io/static"},"localIdentName":"[hash:base64]_0","modules":true}!../../../../../vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-f9fa52ae","scoped":false,"hasInlineConfig":true}!../../../../../vue-loader/lib/selector?type=styles&index=0!./Article.vue'],function(){var e=a.$style;if(e){var t=n("U24e");JSON.stringify(t)!==JSON.stringify(e)&&(a.$style=t,n("c37E").rerender("data-v-f9fa52ae"))}});var s=function(e){o||(a.$style=n("U24e"),Object.defineProperty(this,"$style",{get:function(){return a.$style}}))},c=n("VU/8")(r.a,i.a,!1,s,null,null);c.options.__file="node_modules/@nuxtjs/blog/src/app/components/Article.vue",t.a=c.exports}).call(t,n("f1Eh")(e))},"9KbG":function(e,t,n){"use strict";var r=n("Xxa5"),i=n.n(r),o=n("pFYg"),a=n.n(o),s=n("exGp"),c=n.n(s),l=n("eHgB"),u=n("BTka");t.a={name:"CollectionPage",asyncData:function(){var e=c()(i.a.mark(function e(t){var n,r,o;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.params,r=t.payload,o=t.app,"object"!==(void 0===r?"undefined":a()(r))||!r){e.next=3;break}return e.abrupt("return",{collection:r});case 3:return e.next=5,Object(u.a)("/collections/:id",n,o);case 5:return e.t0=e.sent,e.abrupt("return",{collection:e.t0});case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),computed:{articles:function(){return this.collection?this.collection.articles:[]}},filters:{formatDate:l.a}}},BTka:function(e,t,n){"use strict";n.d(t,"a",function(){return h});var r=n("Xxa5"),i=n.n(r),o=n("exGp"),a=n.n(o),s=n("pFYg"),c=n.n(s),l=n("fZjL"),u=n.n(l),p=this,f=function(){var e=a()(i.a.mark(function e(t,n){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n&&"$axios"in n){e.next=5;break}return console.log("Use @nuxtjs/axios or axios plugin.\nthis.$axios is requried to fetch from blog API.\nFalling back to fetch API. https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"),e.next=4,fetch(t);case 4:return e.abrupt("return",e.sent.json());case 5:return e.next=7,n.$axios.get(t);case 7:return e.abrupt("return",e.sent.data);case 8:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),d="https://aby.ninja".replace(/\/$/,"");function v(e,t){return u()(t).forEach(function(n){["number","string"].includes(c()(t[n]))&&(e=e.replace(new RegExp(":"+n,"gi"),""+t[n]))}),e.replace(/\/?:[^/]+/g,"").replace(/\/+/g,"/").replace(/\/$/,"")}var h=function(){var e=a()(i.a.mark(function e(t,n,r){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,f(""+d+v("/_nuxt/api/blog/"+t,n)+".json",r);case 3:return e.abrupt("return",e.sent);case 4:return e.next=6,f(""+d+v("/api/blog/"+t,n),r);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}},e,p)}));return function(t,n,r){return e.apply(this,arguments)}}()},JuAn:function(e,t,n){"use strict";var r=n("9KbG"),i=n("1z4o");t.a={extends:r.a,components:{ArticlePreview:i.a}}},NO5P:function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,".collection-links{margin-bottom:-16px;margin-bottom:-1rem;display:block;text-align:right}.blog-collection-index-meta{opacity:.75;font-size:12px;font-size:.75rem}",""])},QWNB:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",{class:e.$style.preview},[n("router-link",{attrs:{to:{name:"@nuxtjs/blog:article",params:Object.assign({id:e.id},e.$attrs)}}},[e._v(e._s(e.title))]),n("div",{class:e.$style.meta},[n("time",{attrs:{datatime:e.published_at}},[e._v(e._s(e._f("formatDate")(e.published_at)))])]),n("p",[e._v(e._s(e.description))])],1)};r._withStripped=!0;var i={render:r,staticRenderFns:[]};t.a=i},U24e:function(e,t,n){var r=n("ppwG");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n("rjj0")("2696ca83",r,!1,{sourceMap:!1})},amIw:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container mt-3"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-12 col-lg-8 offset-lg-2"},[n("header",[n("small",{staticClass:"collection-links"},[n("small",{staticClass:"text-uppercase"},[n("nuxt-link",{attrs:{to:{name:"@nuxtjs/blog:index"}}},[e._v("Back to blog")])],1)]),n("h1",{staticClass:"collection-header"},[e._v(e._s(e.collection.name))])]),e._l(e.articles,function(t){return n("ArticlePreview",e._b({key:t.id,attrs:{id:t.id,title:t.title,description:t.description,published_at:t.published_at}},"ArticlePreview",t,!1))})],2)])])};r._withStripped=!0;var i={render:r,staticRenderFns:[]};t.a=i},c37E:function(e,t){var n,r,i=Object.create(null);"undefined"!=typeof window&&(window.__VUE_HOT_MAP__=i);var o=!1,a="beforeCreate";function s(e,t){if(t.functional){var n=t.render;t.render=function(t,r){var o=i[e].instances;return r&&o.indexOf(r.parent)<0&&o.push(r.parent),n(t,r)}}else c(t,a,function(){var t=i[e];t.Ctor||(t.Ctor=this.constructor),t.instances.push(this)}),c(t,"beforeDestroy",function(){var t=i[e].instances;t.splice(t.indexOf(this),1)})}function c(e,t,n){var r=e[t];e[t]=r?Array.isArray(r)?r.concat(n):[r,n]:[n]}function l(e){return function(t,n){try{e(t,n)}catch(e){console.error(e),console.warn("Something went wrong during Vue component hot-reload. Full reload required.")}}}function u(e,t){for(var n in e)n in t||delete e[n];for(var r in t)e[r]=t[r]}t.install=function(e,i){o||(o=!0,n=e.__esModule?e.default:e,r=n.version.split(".").map(Number),i,n.config._lifecycleHooks.indexOf("init")>-1&&(a="init"),t.compatible=r[0]>=2,t.compatible||console.warn("[HMR] You are using a version of vue-hot-reload-api that is only compatible with Vue.js core ^2.0.0."))},t.createRecord=function(e,t){if(!i[e]){var n=null;"function"==typeof t&&(t=(n=t).options),s(e,t),i[e]={Ctor:n,options:t,instances:[]}}},t.isRecorded=function(e){return void 0!==i[e]},t.rerender=l(function(e,t){var n=i[e];if(t){if("function"==typeof t&&(t=t.options),n.Ctor)n.Ctor.options.render=t.render,n.Ctor.options.staticRenderFns=t.staticRenderFns,n.instances.slice().forEach(function(e){e.$options.render=t.render,e.$options.staticRenderFns=t.staticRenderFns,e._staticTrees&&(e._staticTrees=[]),Array.isArray(n.Ctor.options.cached)&&(n.Ctor.options.cached=[]),Array.isArray(e.$options.cached)&&(e.$options.cached=[]),e.$forceUpdate()});else if(n.options.render=t.render,n.options.staticRenderFns=t.staticRenderFns,n.options.functional){if(Object.keys(t).length>2)u(n.options,t);else{var r=n.options._injectStyles;if(r){var o=t.render;n.options.render=function(e,t){return r.call(t),o(e,t)}}}n.options._Ctor=null,Array.isArray(n.options.cached)&&(n.options.cached=[]),n.instances.slice().forEach(function(e){e.$forceUpdate()})}}else n.instances.slice().forEach(function(e){e.$forceUpdate()})}),t.reload=l(function(e,t){var n=i[e];if(t)if("function"==typeof t&&(t=t.options),s(e,t),n.Ctor){r[1]<2&&(n.Ctor.extendOptions=t);var o=n.Ctor.super.extend(t);n.Ctor.options=o.options,n.Ctor.cid=o.cid,n.Ctor.prototype=o.prototype,o.release&&o.release()}else u(n.options,t);n.instances.slice().forEach(function(e){e.$vnode&&e.$vnode.context?e.$vnode.context.$forceUpdate():console.warn("Root or manually mounted instance modified. Full reload required.")})})},"dco/":function(e,t,n){var r=n("NO5P");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n("rjj0")("11024cc6",r,!1,{sourceMap:!1})},eHgB:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=function(e){var t=new Date(e);return["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]+" "+t.getDate()+", "+t.getFullYear()}},f1Eh:function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},ppwG:function(e,t,n){(t=e.exports=n("FZ+f")(!1)).push([e.i,"._1hstLU2iZuXH9RQiDatU8D_0{margin-bottom:15px}.jdgVUXgJxRxyCO4JQ0cRJ_0{font-size:12px;font-size:.75rem;opacity:.75}",""]),t.locals={preview:"_1hstLU2iZuXH9RQiDatU8D_0",meta:"jdgVUXgJxRxyCO4JQ0cRJ_0"}}});