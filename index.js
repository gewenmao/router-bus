'use strict'

const tracer = require('path-tracer');
const Router = require('koa-router');
const router = new Router();

function getRouterFromFiles(path) {
    let routerList = [];

    tracer
        .getFiles(path, {pattern: /js$/})
        .map(f => {
            const r = require(f);
            if (r) {
                routerList = routerList.concat(r);
            }
        })

    return routerList;
}

function getRouterFromPath(path) {
    getRouterFromFiles(path)
        .map(r => {
            const methods = [].concat(r.method || 'get');
            const urls = [].concat(r.url);

            methods.map(method => {
                urls.map(url => {
                    router[method](url, r.controller);
                });
            });
        });

    return router.routes();
}

module.exports = getRouterFromPath;

