'use strict'

var tracer = require('path-tracer');
var router = require('koa-router')();

function getRouterFromFiles(path) {

    let routerList = [];

    tracer
        .getFiles(path, {pattern: /js$/})
        .map(f => {
            let router = require(f);
            if (router) {
                routerList = routerList.concat(router);
            }
        })

    return routerList;
}

function getRouterFromPath(path) {

    getRouterFromFiles(path)
        .map(r => {
            let methods = [].concat(r.method || 'get');
            let urls = [].concat(r.url);

            methods.map(method => {
                urls.map(url => {
                    router[method](url, r.controller);
                });
            });
        });

    return router.routes();
}

module.exports = getRouterFromPath;

