/**
 *******************************************************
 *                                                     *
 *   Copyright (C) Microsoft. All rights reserved.     *
 *                                                     *
 *******************************************************
 */


var path = require('path');
var Q = require('q');
var fs = require('fs');
var url = require('url');
var logger = require('./utils/logger');
var helpers = require('./utils/helpers');
var merge = require('lodash.merge');

var projectRoot,
    platformWWWDirs;

module.exports = LiveReload;

/**
 * @constructor
 * @param {string} projectRoot - root folder of the project
 * @param {string[]} platformWWWs - www directories of the platforms
 * @param {Object} options - Options to initialize LiveReload with - These are to be passed to the underlying BrowserSync.
 *                           See http://www.browsersync.io/docs/options/ for documentation
 */
function LiveReload(projectRoot, platformWWWs, options) {
    this.projectRoot = projectRoot;
    this.startPage = helpers.GetStartPage(this.projectRoot);
    this.www_dir = path.join(this.projectRoot, 'www');
    platformWWWDirs = platformWWWs;
    this.startServer = startServer;
    this.stopServer = stopServer;
    this.options = options;
    this.browserSync = require('browser-sync').create(); // If this is exposed to users, how would they handle deps install ?
    return this;
};


function startServer() {
    var self = this;
    var deferred = Q.defer();

    var defaultOptions = {
        server: {
            baseDir: self.projectRoot,
            directory: true
        },
        open: false,

        // ToDO: Document that if fn is overriden by another option, multi-device scenario 
        // ... will be lost due to 'monkey patching' going away
        snippetOptions: {
            rule: {
                match: /<\/body>/i,
                fn: function(snippet, match) {
                    return monkeyPatch() + snippet + match;
                }
            }
        },
        minify: false,
        ghostMode: {
            clicks: true,
            forms: true,
            scroll: true
        }
    };


    // User provided options take precedence over the default ones
    self.options = merge(defaultOptions, self.options);

    // Initialize the browser-sync instance
    self.browserSync.init(self.options, function(err, bs) {

        // Once BrowserSync is ready, resolve the promise
        if (err) {
            deferred.reject(err);
            return;
        }

        // If the user specified the '--tunnel' option, use a localtunnel.me address
        var server_url = self.options.tunnel ? bs.options.getIn(['urls', 'tunnel']) : bs.options.getIn(['urls', 'external']);

        // In case there is no external url
        // e.g: When the machine is not connected to any network
        if (!server_url) {
            // Usually, this err msg ends up being null in this case.
            var error = new Error('No External URLs available. Make sure your computer is connected to a network.' + (err ? err.msg : ''));
            deferred.reject(error);
            return;
        }

        deferred.resolve(server_url);
        return;
    });

    return deferred.promise;
}

function stopServer() {
    this.browserSync.exit();
}


/**
 * Private function that adds the code snippet to deal with reloading
 * files when they are served from platform folders
 * This is necessary to allow clicks & scrolls (one of BrowserSync's functionalities) to function well across
 *    different platforms (e.g: IOS and Android)
 */
function monkeyPatch() {
    var script = function() {
        window.__karma__ = true;
        (function patch() {
            if (typeof window.__bs === 'undefined') {
                window.setTimeout(patch, 500);
            } else {
                var oldCanSync = window.__bs.prototype.canSync;
                window.__bs.prototype.canSync = function(data, optPath) {
                    data.url = window.location.pathname.substr(0, window.location.pathname.indexOf('/www')) + data.url.substr(data.url.indexOf('/www'));
                    return oldCanSync.apply(this, [data, optPath]);
                };
            }
        }());
    };
    return '<script>(' + script.toString() + '());</script>';
}
