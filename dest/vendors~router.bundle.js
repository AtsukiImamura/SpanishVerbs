(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{163:function(t,e,r){"use strict";
/*!
  * vue-router v3.0.6
  * (c) 2019 Evan You
  * @license MIT
  */function n(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function o(t,e){for(var r in e)t[r]=e[r];return t}var i={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var r=e.props,n=e.children,i=e.parent,a=e.data;a.routerView=!0;for(var u=i.$createElement,c=r.name,s=i.$route,p=i._routerViewCache||(i._routerViewCache={}),f=0,h=!1;i&&i._routerRoot!==i;){var l=i.$vnode&&i.$vnode.data;l&&(l.routerView&&f++,l.keepAlive&&i._inactive&&(h=!0)),i=i.$parent}if(a.routerViewDepth=f,h)return u(p[c],a,n);var d=s.matched[f];if(!d)return p[c]=null,u();var v=p[c]=d.components[c];a.registerRouteInstance=function(t,e){var r=d.instances[c];(e&&r!==t||!e&&r===t)&&(d.instances[c]=e)},(a.hook||(a.hook={})).prepatch=function(t,e){d.instances[c]=e.componentInstance},a.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==d.instances[c]&&(d.instances[c]=t.componentInstance)};var y=a.props=function(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}(s,d.props&&d.props[c]);if(y){y=a.props=o({},y);var m=a.attrs=a.attrs||{};for(var g in y)v.props&&g in v.props||(m[g]=y[g],delete y[g])}return u(v,a,n)}};var a=/[!'()*]/g,u=function(t){return"%"+t.charCodeAt(0).toString(16)},c=/%2C/g,s=function(t){return encodeURIComponent(t).replace(a,u).replace(c,",")},p=decodeURIComponent;function f(t){var e={};return(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach(function(t){var r=t.replace(/\+/g," ").split("="),n=p(r.shift()),o=r.length>0?p(r.join("=")):null;void 0===e[n]?e[n]=o:Array.isArray(e[n])?e[n].push(o):e[n]=[e[n],o]}),e):e}function h(t){var e=t?Object.keys(t).map(function(e){var r=t[e];if(void 0===r)return"";if(null===r)return s(e);if(Array.isArray(r)){var n=[];return r.forEach(function(t){void 0!==t&&(null===t?n.push(s(e)):n.push(s(e)+"="+s(t)))}),n.join("&")}return s(e)+"="+s(r)}).filter(function(t){return t.length>0}).join("&"):null;return e?"?"+e:""}var l=/\/?$/;function d(t,e,r,n){var o=n&&n.options.stringifyQuery,i=e.query||{};try{i=v(i)}catch(t){}var a={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:i,params:e.params||{},fullPath:g(e,o),matched:t?m(t):[]};return r&&(a.redirectedFrom=g(r,o)),Object.freeze(a)}function v(t){if(Array.isArray(t))return t.map(v);if(t&&"object"==typeof t){var e={};for(var r in t)e[r]=v(t[r]);return e}return t}var y=d(null,{path:"/"});function m(t){for(var e=[];t;)e.unshift(t),t=t.parent;return e}function g(t,e){var r=t.path,n=t.query;void 0===n&&(n={});var o=t.hash;return void 0===o&&(o=""),(r||"/")+(e||h)(n)+o}function b(t,e){return e===y?t===e:!!e&&(t.path&&e.path?t.path.replace(l,"")===e.path.replace(l,"")&&t.hash===e.hash&&w(t.query,e.query):!(!t.name||!e.name)&&(t.name===e.name&&t.hash===e.hash&&w(t.query,e.query)&&w(t.params,e.params)))}function w(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var r=Object.keys(t),n=Object.keys(e);return r.length===n.length&&r.every(function(r){var n=t[r],o=e[r];return"object"==typeof n&&"object"==typeof o?w(n,o):String(n)===String(o)})}var x,k=[String,Object],R=[String,Array],E={name:"RouterLink",props:{to:{type:k,required:!0},tag:{type:String,default:"a"},exact:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,event:{type:R,default:"click"}},render:function(t){var e=this,r=this.$router,n=this.$route,i=r.resolve(this.to,n,this.append),a=i.location,u=i.route,c=i.href,s={},p=r.options.linkActiveClass,f=r.options.linkExactActiveClass,h=null==p?"router-link-active":p,v=null==f?"router-link-exact-active":f,y=null==this.activeClass?h:this.activeClass,m=null==this.exactActiveClass?v:this.exactActiveClass,g=a.path?d(null,a,null,r):u;s[m]=b(n,g),s[y]=this.exact?s[m]:function(t,e){return 0===t.path.replace(l,"/").indexOf(e.path.replace(l,"/"))&&(!e.hash||t.hash===e.hash)&&function(t,e){for(var r in e)if(!(r in t))return!1;return!0}(t.query,e.query)}(n,g);var w=function(t){O(t)&&(e.replace?r.replace(a):r.push(a))},x={click:O};Array.isArray(this.event)?this.event.forEach(function(t){x[t]=w}):x[this.event]=w;var k={class:s};if("a"===this.tag)k.on=x,k.attrs={href:c};else{var R=function t(e){if(e)for(var r,n=0;n<e.length;n++){if("a"===(r=e[n]).tag)return r;if(r.children&&(r=t(r.children)))return r}}(this.$slots.default);if(R)R.isStatic=!1,(R.data=o({},R.data)).on=x,(R.data.attrs=o({},R.data.attrs)).href=c;else k.on=x}return t(this.tag,k,this.$slots.default)}};function O(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||t.defaultPrevented||void 0!==t.button&&0!==t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}var A="undefined"!=typeof window;function C(t,e,r){var n=t.charAt(0);if("/"===n)return t;if("?"===n||"#"===n)return e+t;var o=e.split("/");r&&o[o.length-1]||o.pop();for(var i=t.replace(/^\//,"").split("/"),a=0;a<i.length;a++){var u=i[a];".."===u?o.pop():"."!==u&&o.push(u)}return""!==o[0]&&o.unshift(""),o.join("/")}function _(t){return t.replace(/\/\//g,"/")}var j=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},T=F,S=P,$=function(t,e){return M(P(t,e))},L=M,q=D,U=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function P(t,e){for(var r,n=[],o=0,i=0,a="",u=e&&e.delimiter||"/";null!=(r=U.exec(t));){var c=r[0],s=r[1],p=r.index;if(a+=t.slice(i,p),i=p+c.length,s)a+=s[1];else{var f=t[i],h=r[2],l=r[3],d=r[4],v=r[5],y=r[6],m=r[7];a&&(n.push(a),a="");var g=null!=h&&null!=f&&f!==h,b="+"===y||"*"===y,w="?"===y||"*"===y,x=r[2]||u,k=d||v;n.push({name:l||o++,prefix:h||"",delimiter:x,optional:w,repeat:b,partial:g,asterisk:!!m,pattern:k?B(k):m?".*":"[^"+V(x)+"]+?"})}}return i<t.length&&(a+=t.substr(i)),a&&n.push(a),n}function I(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function M(t){for(var e=new Array(t.length),r=0;r<t.length;r++)"object"==typeof t[r]&&(e[r]=new RegExp("^(?:"+t[r].pattern+")$"));return function(r,n){for(var o="",i=r||{},a=(n||{}).pretty?I:encodeURIComponent,u=0;u<t.length;u++){var c=t[u];if("string"!=typeof c){var s,p=i[c.name];if(null==p){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(j(p)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var f=0;f<p.length;f++){if(s=a(p[f]),!e[u].test(s))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(s)+"`");o+=(0===f?c.prefix:c.delimiter)+s}}else{if(s=c.asterisk?encodeURI(p).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):a(p),!e[u].test(s))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+s+'"');o+=c.prefix+s}}else o+=c}return o}}function V(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function B(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function H(t,e){return t.keys=e,t}function z(t){return t.sensitive?"":"i"}function D(t,e,r){j(e)||(r=e||r,e=[]);for(var n=(r=r||{}).strict,o=!1!==r.end,i="",a=0;a<t.length;a++){var u=t[a];if("string"==typeof u)i+=V(u);else{var c=V(u.prefix),s="(?:"+u.pattern+")";e.push(u),u.repeat&&(s+="(?:"+c+s+")*"),i+=s=u.optional?u.partial?c+"("+s+")?":"(?:"+c+"("+s+"))?":c+"("+s+")"}}var p=V(r.delimiter||"/"),f=i.slice(-p.length)===p;return n||(i=(f?i.slice(0,-p.length):i)+"(?:"+p+"(?=$))?"),i+=o?"$":n&&f?"":"(?="+p+"|$)",H(new RegExp("^"+i,z(r)),e)}function F(t,e,r){return j(e)||(r=e||r,e=[]),r=r||{},t instanceof RegExp?function(t,e){var r=t.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)e.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return H(t,e)}(t,e):j(t)?function(t,e,r){for(var n=[],o=0;o<t.length;o++)n.push(F(t[o],e,r).source);return H(new RegExp("(?:"+n.join("|")+")",z(r)),e)}(t,e,r):function(t,e,r){return D(P(t,r),e,r)}(t,e,r)}T.parse=S,T.compile=$,T.tokensToFunction=L,T.tokensToRegExp=q;var J=Object.create(null);function K(t,e,r){e=e||{};try{var n=J[t]||(J[t]=T.compile(t));return e.pathMatch&&(e[0]=e.pathMatch),n(e,{pretty:!0})}catch(t){return""}finally{delete e[0]}}function N(t,e,r,n){var o=e||[],i=r||Object.create(null),a=n||Object.create(null);t.forEach(function(t){!function t(e,r,n,o,i,a){var u=o.path;var c=o.name;0;var s=o.pathToRegexpOptions||{};var p=function(t,e,r){r||(t=t.replace(/\/$/,""));if("/"===t[0])return t;if(null==e)return t;return _(e.path+"/"+t)}(u,i,s.strict);"boolean"==typeof o.caseSensitive&&(s.sensitive=o.caseSensitive);var f={path:p,regex:Q(p,s),components:o.components||{default:o.component},instances:{},name:c,parent:i,matchAs:a,redirect:o.redirect,beforeEnter:o.beforeEnter,meta:o.meta||{},props:null==o.props?{}:o.components?o.props:{default:o.props}};o.children&&o.children.forEach(function(o){var i=a?_(a+"/"+o.path):void 0;t(e,r,n,o,f,i)});if(void 0!==o.alias){var h=Array.isArray(o.alias)?o.alias:[o.alias];h.forEach(function(a){var u={path:a,children:o.children};t(e,r,n,u,i,f.path||"/")})}r[f.path]||(e.push(f.path),r[f.path]=f);c&&(n[c]||(n[c]=f))}(o,i,a,t)});for(var u=0,c=o.length;u<c;u++)"*"===o[u]&&(o.push(o.splice(u,1)[0]),c--,u--);return{pathList:o,pathMap:i,nameMap:a}}function Q(t,e){return T(t,[],e)}function X(t,e,r,n){var i="string"==typeof t?{path:t}:t;if(i._normalized)return i;if(i.name)return o({},t);if(!i.path&&i.params&&e){(i=o({},i))._normalized=!0;var a=o(o({},e.params),i.params);if(e.name)i.name=e.name,i.params=a;else if(e.matched.length){var u=e.matched[e.matched.length-1].path;i.path=K(u,a,e.path)}else 0;return i}var c=function(t){var e="",r="",n=t.indexOf("#");n>=0&&(e=t.slice(n),t=t.slice(0,n));var o=t.indexOf("?");return o>=0&&(r=t.slice(o+1),t=t.slice(0,o)),{path:t,query:r,hash:e}}(i.path||""),s=e&&e.path||"/",p=c.path?C(c.path,s,r||i.append):s,h=function(t,e,r){void 0===e&&(e={});var n,o=r||f;try{n=o(t||"")}catch(t){n={}}for(var i in e)n[i]=e[i];return n}(c.query,i.query,n&&n.options.parseQuery),l=i.hash||c.hash;return l&&"#"!==l.charAt(0)&&(l="#"+l),{_normalized:!0,path:p,query:h,hash:l}}function Y(t,e){var r=N(t),n=r.pathList,o=r.pathMap,i=r.nameMap;function a(t,r,a){var u=X(t,r,!1,e),s=u.name;if(s){var p=i[s];if(!p)return c(null,u);var f=p.regex.keys.filter(function(t){return!t.optional}).map(function(t){return t.name});if("object"!=typeof u.params&&(u.params={}),r&&"object"==typeof r.params)for(var h in r.params)!(h in u.params)&&f.indexOf(h)>-1&&(u.params[h]=r.params[h]);if(p)return u.path=K(p.path,u.params),c(p,u,a)}else if(u.path){u.params={};for(var l=0;l<n.length;l++){var d=n[l],v=o[d];if(W(v.regex,u.path,u.params))return c(v,u,a)}}return c(null,u)}function u(t,r){var n=t.redirect,o="function"==typeof n?n(d(t,r,null,e)):n;if("string"==typeof o&&(o={path:o}),!o||"object"!=typeof o)return c(null,r);var u=o,s=u.name,p=u.path,f=r.query,h=r.hash,l=r.params;if(f=u.hasOwnProperty("query")?u.query:f,h=u.hasOwnProperty("hash")?u.hash:h,l=u.hasOwnProperty("params")?u.params:l,s){i[s];return a({_normalized:!0,name:s,query:f,hash:h,params:l},void 0,r)}if(p){var v=function(t,e){return C(t,e.parent?e.parent.path:"/",!0)}(p,t);return a({_normalized:!0,path:K(v,l),query:f,hash:h},void 0,r)}return c(null,r)}function c(t,r,n){return t&&t.redirect?u(t,n||r):t&&t.matchAs?function(t,e,r){var n=a({_normalized:!0,path:K(r,e.params)});if(n){var o=n.matched,i=o[o.length-1];return e.params=n.params,c(i,e)}return c(null,e)}(0,r,t.matchAs):d(t,r,n,e)}return{match:a,addRoutes:function(t){N(t,n,o,i)}}}function W(t,e,r){var n=e.match(t);if(!n)return!1;if(!r)return!0;for(var o=1,i=n.length;o<i;++o){var a=t.keys[o-1],u="string"==typeof n[o]?decodeURIComponent(n[o]):n[o];a&&(r[a.name||"pathMatch"]=u)}return!0}var G=Object.create(null);function Z(){window.history.replaceState({key:ft()},"",window.location.href.replace(window.location.origin,"")),window.addEventListener("popstate",function(t){var e;et(),t.state&&t.state.key&&(e=t.state.key,st=e)})}function tt(t,e,r,n){if(t.app){var o=t.options.scrollBehavior;o&&t.app.$nextTick(function(){var i=function(){var t=ft();if(t)return G[t]}(),a=o.call(t,e,r,n?i:null);a&&("function"==typeof a.then?a.then(function(t){it(t,i)}).catch(function(t){0}):it(a,i))})}}function et(){var t=ft();t&&(G[t]={x:window.pageXOffset,y:window.pageYOffset})}function rt(t){return ot(t.x)||ot(t.y)}function nt(t){return{x:ot(t.x)?t.x:window.pageXOffset,y:ot(t.y)?t.y:window.pageYOffset}}function ot(t){return"number"==typeof t}function it(t,e){var r,n="object"==typeof t;if(n&&"string"==typeof t.selector){var o=document.querySelector(t.selector);if(o){var i=t.offset&&"object"==typeof t.offset?t.offset:{};e=function(t,e){var r=document.documentElement.getBoundingClientRect(),n=t.getBoundingClientRect();return{x:n.left-r.left-e.x,y:n.top-r.top-e.y}}(o,i={x:ot((r=i).x)?r.x:0,y:ot(r.y)?r.y:0})}else rt(t)&&(e=nt(t))}else n&&rt(t)&&(e=nt(t));e&&window.scrollTo(e.x,e.y)}var at,ut=A&&((-1===(at=window.navigator.userAgent).indexOf("Android 2.")&&-1===at.indexOf("Android 4.0")||-1===at.indexOf("Mobile Safari")||-1!==at.indexOf("Chrome")||-1!==at.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history),ct=A&&window.performance&&window.performance.now?window.performance:Date,st=pt();function pt(){return ct.now().toFixed(3)}function ft(){return st}function ht(t,e){et();var r=window.history;try{e?r.replaceState({key:st},"",t):(st=pt(),r.pushState({key:st},"",t))}catch(r){window.location[e?"replace":"assign"](t)}}function lt(t){ht(t,!0)}function dt(t,e,r){var n=function(o){o>=t.length?r():t[o]?e(t[o],function(){n(o+1)}):n(o+1)};n(0)}function vt(t){return function(e,r,o){var i=!1,a=0,u=null;yt(t,function(t,e,r,c){if("function"==typeof t&&void 0===t.cid){i=!0,a++;var s,p=bt(function(e){var n;((n=e).__esModule||gt&&"Module"===n[Symbol.toStringTag])&&(e=e.default),t.resolved="function"==typeof e?e:x.extend(e),r.components[c]=e,--a<=0&&o()}),f=bt(function(t){var e="Failed to resolve async component "+c+": "+t;u||(u=n(t)?t:new Error(e),o(u))});try{s=t(p,f)}catch(t){f(t)}if(s)if("function"==typeof s.then)s.then(p,f);else{var h=s.component;h&&"function"==typeof h.then&&h.then(p,f)}}}),i||o()}}function yt(t,e){return mt(t.map(function(t){return Object.keys(t.components).map(function(r){return e(t.components[r],t.instances[r],t,r)})}))}function mt(t){return Array.prototype.concat.apply([],t)}var gt="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag;function bt(t){var e=!1;return function(){for(var r=[],n=arguments.length;n--;)r[n]=arguments[n];if(!e)return e=!0,t.apply(this,r)}}var wt=function(t,e){this.router=t,this.base=function(t){if(!t)if(A){var e=document.querySelector("base");t=(t=e&&e.getAttribute("href")||"/").replace(/^https?:\/\/[^\/]+/,"")}else t="/";"/"!==t.charAt(0)&&(t="/"+t);return t.replace(/\/$/,"")}(e),this.current=y,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[]};function xt(t,e,r,n){var o=yt(t,function(t,n,o,i){var a=function(t,e){"function"!=typeof t&&(t=x.extend(t));return t.options[e]}(t,e);if(a)return Array.isArray(a)?a.map(function(t){return r(t,n,o,i)}):r(a,n,o,i)});return mt(n?o.reverse():o)}function kt(t,e){if(e)return function(){return t.apply(e,arguments)}}wt.prototype.listen=function(t){this.cb=t},wt.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},wt.prototype.onError=function(t){this.errorCbs.push(t)},wt.prototype.transitionTo=function(t,e,r){var n=this,o=this.router.match(t,this.current);this.confirmTransition(o,function(){n.updateRoute(o),e&&e(o),n.ensureURL(),n.ready||(n.ready=!0,n.readyCbs.forEach(function(t){t(o)}))},function(t){r&&r(t),t&&!n.ready&&(n.ready=!0,n.readyErrorCbs.forEach(function(e){e(t)}))})},wt.prototype.confirmTransition=function(t,e,r){var o=this,i=this.current,a=function(t){n(t)&&(o.errorCbs.length?o.errorCbs.forEach(function(e){e(t)}):console.error(t)),r&&r(t)};if(b(t,i)&&t.matched.length===i.matched.length)return this.ensureURL(),a();var u=function(t,e){var r,n=Math.max(t.length,e.length);for(r=0;r<n&&t[r]===e[r];r++);return{updated:e.slice(0,r),activated:e.slice(r),deactivated:t.slice(r)}}(this.current.matched,t.matched),c=u.updated,s=u.deactivated,p=u.activated,f=[].concat(function(t){return xt(t,"beforeRouteLeave",kt,!0)}(s),this.router.beforeHooks,function(t){return xt(t,"beforeRouteUpdate",kt)}(c),p.map(function(t){return t.beforeEnter}),vt(p));this.pending=t;var h=function(e,r){if(o.pending!==t)return a();try{e(t,i,function(t){!1===t||n(t)?(o.ensureURL(!0),a(t)):"string"==typeof t||"object"==typeof t&&("string"==typeof t.path||"string"==typeof t.name)?(a(),"object"==typeof t&&t.replace?o.replace(t):o.push(t)):r(t)})}catch(t){a(t)}};dt(f,h,function(){var r=[];dt(function(t,e,r){return xt(t,"beforeRouteEnter",function(t,n,o,i){return function(t,e,r,n,o){return function(i,a,u){return t(i,a,function(t){u(t),"function"==typeof t&&n.push(function(){!function t(e,r,n,o){r[n]&&!r[n]._isBeingDestroyed?e(r[n]):o()&&setTimeout(function(){t(e,r,n,o)},16)}(t,e.instances,r,o)})})}}(t,o,i,e,r)})}(p,r,function(){return o.current===t}).concat(o.router.resolveHooks),h,function(){if(o.pending!==t)return a();o.pending=null,e(t),o.router.app&&o.router.app.$nextTick(function(){r.forEach(function(t){t()})})})})},wt.prototype.updateRoute=function(t){var e=this.current;this.current=t,this.cb&&this.cb(t),this.router.afterHooks.forEach(function(r){r&&r(t,e)})};var Rt=function(t){function e(e,r){var n=this;t.call(this,e,r);var o=e.options.scrollBehavior,i=ut&&o;i&&Z();var a=Et(this.base);window.addEventListener("popstate",function(t){var r=n.current,o=Et(n.base);n.current===y&&o===a||n.transitionTo(o,function(t){i&&tt(e,t,r,!0)})})}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,function(t){ht(_(n.base+t.fullPath)),tt(n.router,t,o,!1),e&&e(t)},r)},e.prototype.replace=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,function(t){lt(_(n.base+t.fullPath)),tt(n.router,t,o,!1),e&&e(t)},r)},e.prototype.ensureURL=function(t){if(Et(this.base)!==this.current.fullPath){var e=_(this.base+this.current.fullPath);t?ht(e):lt(e)}},e.prototype.getCurrentLocation=function(){return Et(this.base)},e}(wt);function Et(t){var e=decodeURI(window.location.pathname);return t&&0===e.indexOf(t)&&(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var Ot=function(t){function e(e,r,n){t.call(this,e,r),n&&function(t){var e=Et(t);if(!/^\/#/.test(e))return window.location.replace(_(t+"/#"+e)),!0}(this.base)||At()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this,e=this.router.options.scrollBehavior,r=ut&&e;r&&Z(),window.addEventListener(ut?"popstate":"hashchange",function(){var e=t.current;At()&&t.transitionTo(Ct(),function(n){r&&tt(t.router,n,e,!0),ut||Tt(n.fullPath)})})},e.prototype.push=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,function(t){jt(t.fullPath),tt(n.router,t,o,!1),e&&e(t)},r)},e.prototype.replace=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,function(t){Tt(t.fullPath),tt(n.router,t,o,!1),e&&e(t)},r)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;Ct()!==e&&(t?jt(e):Tt(e))},e.prototype.getCurrentLocation=function(){return Ct()},e}(wt);function At(){var t=Ct();return"/"===t.charAt(0)||(Tt("/"+t),!1)}function Ct(){var t=window.location.href,e=t.indexOf("#");if(e<0)return"";var r=(t=t.slice(e+1)).indexOf("?");if(r<0){var n=t.indexOf("#");t=n>-1?decodeURI(t.slice(0,n))+t.slice(n):decodeURI(t)}else r>-1&&(t=decodeURI(t.slice(0,r))+t.slice(r));return t}function _t(t){var e=window.location.href,r=e.indexOf("#");return(r>=0?e.slice(0,r):e)+"#"+t}function jt(t){ut?ht(_t(t)):window.location.hash=t}function Tt(t){ut?lt(_t(t)):window.location.replace(_t(t))}var St=function(t){function e(e,r){t.call(this,e,r),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,r){var n=this;this.transitionTo(t,function(t){n.stack=n.stack.slice(0,n.index+1).concat(t),n.index++,e&&e(t)},r)},e.prototype.replace=function(t,e,r){var n=this;this.transitionTo(t,function(t){n.stack=n.stack.slice(0,n.index).concat(t),e&&e(t)},r)},e.prototype.go=function(t){var e=this,r=this.index+t;if(!(r<0||r>=this.stack.length)){var n=this.stack[r];this.confirmTransition(n,function(){e.index=r,e.updateRoute(n)})}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(wt),$t=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=Y(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!ut&&!1!==t.fallback,this.fallback&&(e="hash"),A||(e="abstract"),this.mode=e,e){case"history":this.history=new Rt(this,t.base);break;case"hash":this.history=new Ot(this,t.base,this.fallback);break;case"abstract":this.history=new St(this,t.base);break;default:0}},Lt={currentRoute:{configurable:!0}};function qt(t,e){return t.push(e),function(){var r=t.indexOf(e);r>-1&&t.splice(r,1)}}$t.prototype.match=function(t,e,r){return this.matcher.match(t,e,r)},Lt.currentRoute.get=function(){return this.history&&this.history.current},$t.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",function(){var r=e.apps.indexOf(t);r>-1&&e.apps.splice(r,1),e.app===t&&(e.app=e.apps[0]||null)}),!this.app){this.app=t;var r=this.history;if(r instanceof Rt)r.transitionTo(r.getCurrentLocation());else if(r instanceof Ot){var n=function(){r.setupListeners()};r.transitionTo(r.getCurrentLocation(),n,n)}r.listen(function(t){e.apps.forEach(function(e){e._route=t})})}},$t.prototype.beforeEach=function(t){return qt(this.beforeHooks,t)},$t.prototype.beforeResolve=function(t){return qt(this.resolveHooks,t)},$t.prototype.afterEach=function(t){return qt(this.afterHooks,t)},$t.prototype.onReady=function(t,e){this.history.onReady(t,e)},$t.prototype.onError=function(t){this.history.onError(t)},$t.prototype.push=function(t,e,r){this.history.push(t,e,r)},$t.prototype.replace=function(t,e,r){this.history.replace(t,e,r)},$t.prototype.go=function(t){this.history.go(t)},$t.prototype.back=function(){this.go(-1)},$t.prototype.forward=function(){this.go(1)},$t.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map(function(t){return Object.keys(t.components).map(function(e){return t.components[e]})})):[]},$t.prototype.resolve=function(t,e,r){var n=X(t,e=e||this.history.current,r,this),o=this.match(n,e),i=o.redirectedFrom||o.fullPath;return{location:n,route:o,href:function(t,e,r){var n="hash"===r?"#"+e:e;return t?_(t+"/"+n):n}(this.history.base,i,this.mode),normalizedTo:n,resolved:o}},$t.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==y&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties($t.prototype,Lt),$t.install=function t(e){if(!t.installed||x!==e){t.installed=!0,x=e;var r=function(t){return void 0!==t},n=function(t,e){var n=t.$options._parentVnode;r(n)&&r(n=n.data)&&r(n=n.registerRouteInstance)&&n(t,e)};e.mixin({beforeCreate:function(){r(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),e.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(e.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(e.prototype,"$route",{get:function(){return this._routerRoot._route}}),e.component("RouterView",i),e.component("RouterLink",E);var o=e.config.optionMergeStrategies;o.beforeRouteEnter=o.beforeRouteLeave=o.beforeRouteUpdate=o.created}},$t.version="3.0.6",A&&window.Vue&&window.Vue.use($t),e.a=$t}}]);