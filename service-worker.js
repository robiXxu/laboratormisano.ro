"use strict";var precacheConfig=[["/laboratormisano.ro/index.html","7f35c60e18c226702fa3615c0cb533bc"],["/laboratormisano.ro/static/css/main.a0c53991.css","3e6339104725cd857621130f4092628d"],["/laboratormisano.ro/static/js/main.590fdd0e.js","38aab1782cc3b89ab6fdd3d5ba64ba92"],["/laboratormisano.ro/static/media/Certificat_RENAR.9ff28f4d.pdf","9ff28f4d0b1f5d06390b9e1fbfcaa65f"],["/laboratormisano.ro/static/media/LM_349_A_LAM_MISANO.bc607272.pdf","bc607272db88d3c00c52a5552f1d6ecf"],["/laboratormisano.ro/static/media/QRCode.4354059c.png","4354059cc44707c6c2097a7703fdbbff"],["/laboratormisano.ro/static/media/brand-icons.13db00b7.eot","13db00b7a34fee4d819ab7f9838cc428"],["/laboratormisano.ro/static/media/brand-icons.a046592b.woff","a046592bac8f2fd96e994733faf3858c"],["/laboratormisano.ro/static/media/brand-icons.a1a749e8.svg","a1a749e89f578a49306ec2b055c073da"],["/laboratormisano.ro/static/media/brand-icons.c5ebe0b3.ttf","c5ebe0b32dc1b5cc449a76c4204d13bb"],["/laboratormisano.ro/static/media/brand-icons.e8c322de.woff2","e8c322de9658cbeb8a774b6624167c2c"],["/laboratormisano.ro/static/media/equipment1.356202c3.png","356202c3fc851ef736811ece03579843"],["/laboratormisano.ro/static/media/equipment2.c35f3aab.jpg","c35f3aab0f03c045dd15b6ef22bba8a0"],["/laboratormisano.ro/static/media/flags.9c74e172.png","9c74e172f87984c48ddf5c8108cabe67"],["/laboratormisano.ro/static/media/home_image1.f8a29348.jpg","f8a2934825ea31e319f582c85cd6a90f"],["/laboratormisano.ro/static/media/home_image2.25528618.jpg","25528618838cdef08b181c70b4e21268"],["/laboratormisano.ro/static/media/home_map.7cd90a54.png","7cd90a54c8acd0e4bec74e7f05b417e1"],["/laboratormisano.ro/static/media/home_street_view.24ae6fea.png","24ae6feac4317533c679dfa77a6e1c5c"],["/laboratormisano.ro/static/media/icons.0ab54153.woff2","0ab54153eeeca0ce03978cc463b257f7"],["/laboratormisano.ro/static/media/icons.8e3c7f55.eot","8e3c7f5520f5ae906c6cf6d7f3ddcd19"],["/laboratormisano.ro/static/media/icons.962a1bf3.svg","962a1bf31c081691065fe333d9fa8105"],["/laboratormisano.ro/static/media/icons.b87b9ba5.ttf","b87b9ba532ace76ae9f6edfe9f72ded2"],["/laboratormisano.ro/static/media/icons.faff9214.woff","faff92145777a3cbaf8e7367b4807987"],["/laboratormisano.ro/static/media/outline-icons.701ae6ab.eot","701ae6abd4719e9c2ada3535a497b341"],["/laboratormisano.ro/static/media/outline-icons.82f60bd0.svg","82f60bd0b94a1ed68b1e6e309ce2e8c3"],["/laboratormisano.ro/static/media/outline-icons.ad97afd3.ttf","ad97afd3337e8cda302d10ff5a4026b8"],["/laboratormisano.ro/static/media/outline-icons.cd6c777f.woff2","cd6c777f1945164224dee082abaea03a"],["/laboratormisano.ro/static/media/outline-icons.ef60a4f6.woff","ef60a4f6c25ef7f39f2d25a748dbecfe"],["/laboratormisano.ro/static/media/placeholder.12d0fc49.png","12d0fc4905551fb8949f19bd771a932d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,r){var o=new URL(e);return r&&o.pathname.match(r)||(o.search+=(o.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),o.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],r=new URL(a,self.location),o=createCacheKey(r,hashParamName,t,/\.\w{8}\./);return[r.toString(),o]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,r),e=urlsToCacheKeys.has(t));var o="/laboratormisano.ro/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(o,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});