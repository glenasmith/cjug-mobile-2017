/**
 * Check out https://googlechrome.github.io/sw-toolbox/docs/master/index.html for
 * more info on how to use sw-toolbox to custom configure your service worker.
 */


'use strict';
importScripts('./build/sw-toolbox.js');

self.toolbox.options.cache = {
  name: 'voter-cache'
};

// pre-cache our key assets
self.toolbox.precache(
  [
    './build/main.js',
    './build/main.css',
    './build/polyfills.js',
    'index.html',
    'manifest.json'
  ]
);

// fetch data network first
self.toolbox.router.any('/assets/data/*.json', self.toolbox.networkFirst);

// use local avatars if you have them
self.toolbox.router.any('/assets/images/avatars/*.png', self.toolbox.cacheFirst);

// dynamically cache any other local assets
self.toolbox.router.any('/*', self.toolbox.networkFirst);


// for any other requests go to the network, cache,
// and then only use that cached resource if your user goes offline
self.toolbox.router.default = self.toolbox.networkFirst;
