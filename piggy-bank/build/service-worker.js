<<<<<<< HEAD
"use strict";var precacheConfig=[["/index.html","907d6f32752e580585c54ec9b91ec182"],["/static/css/main.9970e6fa.css","d6ac59697e3b56a8041064c1fb875fca"],["/static/js/main.38c3ea7c.js","2413b8aa639bf1a56b30ee33a21ceba4"],["/static/media/add-btn.5721bbbe.svg","5721bbbe3244f9f3ed7f5ee842e5f180"],["/static/media/btnDaily-05.47207392.svg","4720739259670b123fba4f2ecb9c4300"],["/static/media/btnbudget-05.59053b15.svg","59053b1519dd404fcd2ecd10bfda8236"],["/static/media/budget-btn.2e55f71c.svg","2e55f71cc489480a51eac8d862837275"],["/static/media/createNew.821c41e3.svg","821c41e3d3688b480ced836b32b35b95"],["/static/media/degradado.6a3e0c3b.png","6a3e0c3bde6d2384ff49568b22c774a7"],["/static/media/diary-btn.740f922a.svg","740f922a2faa1a1f8f0dcf3da4ba3788"],["/static/media/foto.9396fca3.png","9396fca32c4f74122dbc82099b1d15e4"],["/static/media/home-btn.4e92ecd9.svg","4e92ecd97acce2d94ddb217c420a09a8"],["/static/media/lapiz-05.49d78b96.svg","49d78b961b1c6be677bd2e310422e3ac"],["/static/media/pigu-green.a167c906.svg","a167c906ccacb5a923ebd3cd336358ef"],["/static/media/pigu-pink-01.be550305.svg","be550305bc474b686127c902299b4dcc"],["/static/media/piguBlue.b5eda777.svg","b5eda777e53ce78c9ac009bb6a4175df"],["/static/media/piguRegister-01.6db9b541.svg","6db9b541d24d6e98c604f4abbe4dfb58"],["/static/media/piguTips-01.302b70cb.svg","302b70cbdd91988d47737f42a6d06627"],["/static/media/settings-btn.d0954639.svg","d0954639d07f15d17afcdda1e05ea8c6"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});
=======
"use strict";var precacheConfig=[["/index.html","ed72413790fc001f352e95ad3ff8be4c"],["/static/css/main.49849be4.css","12f1674280484673cbd6a7382c02b63e"],["/static/js/main.89e56d0d.js","72ff27ccb2be9169e2c1a756f7ff0e1a"],["/static/media/add-btn.5721bbbe.svg","5721bbbe3244f9f3ed7f5ee842e5f180"],["/static/media/btnDaily-05.47207392.svg","4720739259670b123fba4f2ecb9c4300"],["/static/media/btnbudget-05.59053b15.svg","59053b1519dd404fcd2ecd10bfda8236"],["/static/media/budget-btn.2e55f71c.svg","2e55f71cc489480a51eac8d862837275"],["/static/media/createNew.821c41e3.svg","821c41e3d3688b480ced836b32b35b95"],["/static/media/degradado.6a3e0c3b.png","6a3e0c3bde6d2384ff49568b22c774a7"],["/static/media/diary-btn.740f922a.svg","740f922a2faa1a1f8f0dcf3da4ba3788"],["/static/media/foto.9396fca3.png","9396fca32c4f74122dbc82099b1d15e4"],["/static/media/home-btn.4e92ecd9.svg","4e92ecd97acce2d94ddb217c420a09a8"],["/static/media/lapiz-05.49d78b96.svg","49d78b961b1c6be677bd2e310422e3ac"],["/static/media/lightbulb.fdbcc1c5.svg","fdbcc1c579b8cc64b9814fe321d6ab22"],["/static/media/pigu-green.a167c906.svg","a167c906ccacb5a923ebd3cd336358ef"],["/static/media/pigu-pink-01.be550305.svg","be550305bc474b686127c902299b4dcc"],["/static/media/piguBlue.b5eda777.svg","b5eda777e53ce78c9ac009bb6a4175df"],["/static/media/piguRegister-01.6db9b541.svg","6db9b541d24d6e98c604f4abbe4dfb58"],["/static/media/piguTips-01.302b70cb.svg","302b70cbdd91988d47737f42a6d06627"],["/static/media/settings-btn.d0954639.svg","d0954639d07f15d17afcdda1e05ea8c6"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});
>>>>>>> master
