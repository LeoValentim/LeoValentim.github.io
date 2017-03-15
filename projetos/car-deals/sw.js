"use strict";

self.addEventListener('install', function(event){
    console.log('From SW: Install Event', event);
});

self.addEventListener('activate', function(event){
    console.log('From SW: Activate State', event);
});