this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["legacy-template"]=function(e){function t(t){for(var r,l,i=t[0],u=t[1],a=t[2],s=0,d=[];s<i.length;s++)l=i[s],Object.prototype.hasOwnProperty.call(c,l)&&c[l]&&d.push(c[l][0]),c[l]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(p&&p(t);d.length;)d.shift()();return n.push.apply(n,a||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],r=!0,i=1;i<o.length;i++){var u=o[i];0!==c[u]&&(r=!1)}r&&(n.splice(t--,1),e=l(l.s=o[0]))}return e}var r={},c={26:0},n=[];function l(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=e,l.c=r,l.d=function(e,t,o){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(o,r,function(t){return e[t]}.bind(null,r));return o},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var i=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var a=0;a<i.length;a++)t(i[a]);var p=u;return n.push([438,0]),o()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},12:function(e,t){e.exports=window.wp.blocks},18:function(e,t){e.exports=window.wp.primitives},2:function(e,t){e.exports=window.wc.wcSettings},24:function(e,t,o){"use strict";o.d(t,"o",(function(){return n})),o.d(t,"m",(function(){return l})),o.d(t,"l",(function(){return i})),o.d(t,"n",(function(){return u})),o.d(t,"j",(function(){return a})),o.d(t,"e",(function(){return p})),o.d(t,"f",(function(){return s})),o.d(t,"g",(function(){return d})),o.d(t,"k",(function(){return m})),o.d(t,"c",(function(){return b})),o.d(t,"d",(function(){return g})),o.d(t,"h",(function(){return w})),o.d(t,"a",(function(){return f})),o.d(t,"i",(function(){return h})),o.d(t,"b",(function(){return O}));var r,c=o(2);const n=Object(c.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),l=n.pluginUrl+"images/",i=n.pluginUrl+"build/",u=n.buildPhase,a=null===(r=c.STORE_PAGES.shop)||void 0===r?void 0:r.permalink,p=c.STORE_PAGES.checkout.id,s=c.STORE_PAGES.checkout.permalink,d=c.STORE_PAGES.privacy.permalink,m=(c.STORE_PAGES.privacy.title,c.STORE_PAGES.terms.permalink),b=(c.STORE_PAGES.terms.title,c.STORE_PAGES.cart.id),g=c.STORE_PAGES.cart.permalink,w=(c.STORE_PAGES.myaccount.permalink?c.STORE_PAGES.myaccount.permalink:Object(c.getSetting)("wpLoginUrl","/wp-login.php"),Object(c.getSetting)("shippingCountries",{})),f=Object(c.getSetting)("allowedCountries",{}),h=Object(c.getSetting)("shippingStates",{}),O=Object(c.getSetting)("allowedStates",{})},3:function(e,t){e.exports=window.wp.components},438:function(e,t,o){e.exports=o(468)},439:function(e,t){},468:function(e,t,o){"use strict";o.r(t);var r=o(0),c=o(12),n=o(24),l=o(7),i=o(3),u=o(1),a=o(498),p=o(485);o(439);const s={"single-product":{title:Object(u.__)("WooCommerce Single Product Block","woo-gutenberg-products-block"),placeholder:"single-product"},"archive-product":{title:Object(u.__)("WooCommerce Product Grid Block","woo-gutenberg-products-block"),placeholder:"archive-product"},"taxonomy-product_cat":{title:Object(u.__)("WooCommerce Product Taxonomy Block","woo-gutenberg-products-block"),placeholder:"archive-product"},"taxonomy-product_tag":{title:Object(u.__)("WooCommerce Product Tag Block","woo-gutenberg-products-block"),placeholder:"archive-product"}};Object(c.registerBlockType)("woocommerce/legacy-template",{title:Object(u.__)("WooCommerce Legacy Template","woo-gutenberg-products-block"),icon:Object(r.createElement)(p.a,{icon:a.a,className:"wc-block-editor-components-block-icon"}),category:"woocommerce",apiVersion:2,keywords:[Object(u.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(u.__)("Renders legacy WooCommerce PHP templates.","woo-gutenberg-products-block"),supports:{align:["wide","full"],html:!1,multiple:!1,reusable:!1,inserter:!1},example:{attributes:{isPreview:!0}},attributes:{template:{type:"string",default:"any"}},edit:e=>{var t,o,c,p;let{attributes:d}=e;const m=Object(l.useBlockProps)(),b=null!==(t=null===(o=s[d.template])||void 0===o?void 0:o.title)&&void 0!==t?t:d.template,g=null!==(c=null===(p=s[d.template])||void 0===p?void 0:p.placeholder)&&void 0!==c?c:"fallback";return Object(r.createElement)("div",m,Object(r.createElement)(i.Placeholder,{icon:a.a,label:b,className:"wp-block-woocommerce-legacy-template__placeholder"},Object(r.createElement)("div",{className:"wp-block-woocommerce-legacy-template__placeholder-copy"},Object(r.createElement)("p",{className:"wp-block-woocommerce-legacy-template__placeholder-warning"},Object(r.createElement)("strong",null,Object(u.__)("Attention: Do not remove this block!","woo-gutenberg-products-block"))," ",Object(u.__)("Removal will cause unintended effects on your store.","woo-gutenberg-products-block")),Object(r.createElement)("p",null,Object(u.sprintf)(
/* translators: %s is the template title */
Object(u.__)("This is an editor placeholder for the %s. On your store this will be replaced by the template and display with your product image(s), title, price, etc. You can move this placeholder around and add further blocks around it to extend the template.","woo-gutenberg-products-block"),b))),Object(r.createElement)("div",{className:"wp-block-woocommerce-legacy-template__placeholder-wireframe"},Object(r.createElement)("img",{className:"wp-block-woocommerce-legacy-template__placeholder-image",src:`${n.m}template-placeholders/${g}.svg`,alt:b}))))},save:()=>null})},7:function(e,t){e.exports=window.wp.blockEditor}});