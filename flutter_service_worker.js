'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "fb4fb35d562c2780d092038a5d376525",
"assets/AssetManifest.json": "41b10eebc394250910c6d9647ad72cee",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_credit_card/icons/mastercard.png": "7e386dc6c169e7164bd6f88bffb733c7",
"assets/packages/flutter_credit_card/icons/chip.png": "5728d5ac34dbb1feac78ebfded493d69",
"assets/packages/flutter_credit_card/icons/visa.png": "9db6b8c16d9afbb27b29ec0596be128b",
"assets/packages/flutter_credit_card/icons/discover.png": "ea70c496dfa0169f6a3e59412472d6c1",
"assets/packages/flutter_credit_card/icons/amex.png": "dad771da6513cec63005d2ef1271189f",
"assets/packages/flutter_credit_card/font/halter.ttf": "4e081134892cd40793ffe67fdc3bed4e",
"assets/packages/flutter_widget_from_html_core/test/images/logo.png": "57838d52c318faff743130c3fcfae0c6",
"assets/packages/themify_flutter/lib/fonts/Themify.ttf": "51d07d6e6e589c77aabe253eeff580d2",
"assets/packages/flutter_paystack/assets/images/mastercard.png": "6aecef820a950ef57140f79e07da916a",
"assets/packages/flutter_paystack/assets/images/otp.png": "99aa2d23b63c65db7565622ce17ef3e9",
"assets/packages/flutter_paystack/assets/images/paystack_icon.png": "5b143d4fa4eb48496adc052b89849025",
"assets/packages/flutter_paystack/assets/images/visa.png": "a8b02279da904c1f40e041b20cbaf49c",
"assets/packages/flutter_paystack/assets/images/successful.png": "bd7cfa16ecd2b480ca4875fbf8d6f9e2",
"assets/packages/flutter_paystack/assets/images/dinners_club.png": "24450426cbb1e5b657356b6cca621956",
"assets/packages/flutter_paystack/assets/images/dob.png": "33734b76a856e9b07934793d83a14cae",
"assets/packages/flutter_paystack/assets/images/jcb.png": "82658437070a16f35238c2f989a00c2a",
"assets/packages/flutter_paystack/assets/images/paystack.png": "0b8db920412edd7d8b40e7e7e01ac439",
"assets/packages/flutter_paystack/assets/images/verve.png": "d9e7f9a5b6987ec61b7c2d0bd7db1271",
"assets/packages/flutter_paystack/assets/images/discover.png": "c3a58509fe14ba54b0ca0ff29ee5619d",
"assets/packages/flutter_paystack/assets/images/american_express.png": "fac1ed63030230003fa52ee8f98aa8dc",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/awesome_card/fonts/MavenPro-Regular.ttf": "ebc7385f9f207b4ad5d0cc4204bf4068",
"assets/packages/awesome_card/fonts/MavenPro-Bold.ttf": "c3c32db501249a4a864e3359d88469fb",
"assets/packages/awesome_card/fonts/MavenPro-Medium.ttf": "06dcc8cf4f85c46c6985b69ed0b6b5b6",
"assets/packages/awesome_card/images/contactless_icon.png": "a092b99c8a1f820436ddf6e540eb632d",
"assets/packages/awesome_card/images/card_provider/diners_club.png": "4288121f0ec6619f2ea56bc7cbb2685a",
"assets/packages/awesome_card/images/card_provider/maestro.png": "6800b310fc27f91d0231ab6556284c5b",
"assets/packages/awesome_card/images/card_provider/visa.png": "b6cf8805abcc16ca2bc2ed401958cce1",
"assets/packages/awesome_card/images/card_provider/rupay.png": "3e3018d92a1b51fde09382939664a22d",
"assets/packages/awesome_card/images/card_provider/master_card.png": "6ecc2a7c3b3d7e1c30ac7cf7a083d5af",
"assets/packages/awesome_card/images/card_provider/jcb.png": "434316972590e7d17d65cd133c018f82",
"assets/packages/awesome_card/images/card_provider/discover.png": "50f59532bededb551c5ed62fb1009e69",
"assets/packages/awesome_card/images/card_provider/american_express.png": "25d34d555cc835f008806163bf889bf9",
"assets/packages/awesome_card/images/card_provider/elo.png": "523ddd31d37dd0cd6727d7006c328f8e",
"assets/packages/loading_more_list/assets/empty.jpeg": "52a69bab9f87bcf0052d8e55ea314977",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/NOTICES": "5b5e06c2dfd7e4c01c1a4e822717b4d4",
"assets/assets/locale/localization_bn.json": "e74e90b180713cad3a0381bc831ff587",
"assets/assets/locale/localization_en.json": "ffd3f9d9147bef63eb1966238e64d3a5",
"assets/assets/config/splash_top_line.png": "fe2bbec074c7039015b669e42b865bad",
"assets/assets/config/app_logo.png": "9fc9b458b49ef4e0c625a00118a14cd2",
"assets/assets/config/favicon.jpg": "51bbcc7b469f7a7a0d0fa002b3bd974f",
"assets/assets/config/splash_bg.png": "a1f5cc46dc1832d91c5a38b4261c9359",
"assets/assets/config/app_icon.jpg": "c31796fe1fab59ad031787d501361f6d",
"assets/assets/config/login_bg.png": "dc9fa6fb5affb7e36726389bad10a3af",
"assets/assets/config/app_toolbar_bg.png": "7ab0311d7e38ee2f4e2e00acb25f9f37",
"assets/assets/config/splash_logo.png": "e2b8421132587ae4c0a0fef13622f06b",
"assets/assets/images/leave.png": "b1c7b2c9e800058a3df66f9834106460",
"assets/assets/images/launcher.png": "cc1dedd3b64474c04769a8e374c3bde8",
"assets/assets/images/dormitory.png": "cfe2cfe86dacc4d17f7a044068a8b052",
"assets/assets/images/myroutine.png": "aafaf1ffa3db17a37622f0fb3d77381b",
"assets/assets/images/googleplay.png": "077bf1beb53e922a595442c573b1037a",
"assets/assets/images/profile.png": "d5cc918cbcbac630f3383174186b7615",
"assets/assets/images/classroutine.png": "e8471919943006124114e7c24c41de46",
"assets/assets/images/googlePayLogo.png": "6346a13a67b69a9d69e5e9d9722d9bc0",
"assets/assets/images/notice.png": "aa4d021d35d21d5cb4faa14610b3ce29",
"assets/assets/images/classattendance.png": "651619c17ec26ecef3d89fa8d46a8681",
"assets/assets/images/homework.png": "7a5cc810461968ea59f8a4251e9fc2e6",
"assets/assets/images/searchattendance.png": "651619c17ec26ecef3d89fa8d46a8681",
"assets/assets/images/paytm.png": "383d267442e5105be3d1f4ce13f162ba",
"assets/assets/images/onlineexam.png": "5462111eef85d46a944ef4d42f4d9eb7",
"assets/assets/images/academics.png": "7b241c7065f703037077d61e9792a8c7",
"assets/assets/images/subjects.png": "33af7f32d24e1dadfa09e89ddcb18642",
"assets/assets/images/fees_icon.png": "f25f66c3eb1dbd10efc80d71a217e7cf",
"assets/assets/images/paypal.png": "0fcd81365b2defe15c482d809cb76e98",
"assets/assets/images/timeline.png": "81accdb415ef37be98ece2bb9451c56e",
"assets/assets/images/students.png": "12fb9b814ae947aeebd5f92b04f361fa",
"assets/assets/images/routine.png": "e8471919943006124114e7c24c41de46",
"assets/assets/images/response-attend.json": "4b9407b08abf5a9dd42ca73cdc4b6732",
"assets/assets/images/teacher.png": "1f1f7fb15544ca453bafefc59376c561",
"assets/assets/images/hwlist.png": "2e6f44a4c975949c36312f6a0276aa0b",
"assets/assets/images/addhw.png": "dba0aebf2b16800ba2248dd0f3347d9e",
"assets/assets/images/myattendance.png": "f6233d977c62cf4f43e799a827c9673f",
"assets/assets/images/library.png": "5a5fd8cbe9225b5d55750781c1dfe904",
"assets/assets/images/downloads.png": "adc2568c02c203e124d8bd62093b9a79",
"assets/assets/images/staff.png": "1f1f7fb15544ca453bafefc59376c561",
"assets/assets/images/transport.png": "e0bb56e53fd4f1a81db195c1c4d48634",
"assets/assets/images/contents.png": "0baaddce83e7e4c612c6466e29ffd116",
"assets/assets/images/about.png": "b40a14e44b210333892d55e80e465dfb",
"assets/assets/images/examination.png": "dd8545954c1d7e13442236d9263a673a",
"assets/assets/images/razorpay.jpeg": "915f47e160c6374d430fe0288b91eac3",
"assets/assets/images/mychild.png": "827d1b8fe085c55d1896414d2f1aaeb9",
"assets/assets/images/applePayLogo.png": "f6f48251a3dc46714a248d536a9d8cdc",
"assets/assets/images/splash_logo.png": "9fc9b458b49ef4e0c625a00118a14cd2",
"assets/assets/images/payumoney.png": "ffa9075a8e8ea64f26a9dcacf8590fa6",
"assets/assets/images/phonepe.jpg": "d5e8dab9b0d186dc8c6b5c383b6ac834",
"assets/assets/images/attendance.png": "46ef0e1857a9de84362b39d766bb3506",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/FontManifest.json": "025817a5af65e1b7aad9eea943cd22e1",
"main.dart.js": "46c46a2d43287a6215f17bc50b761428",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "cb06c3070f60df9b53a4a1e3f6f50738",
"/": "cb06c3070f60df9b53a4a1e3f6f50738",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"version.json": "468fcbb341d1dc1f10e2b7a79b5c594e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
