(function (window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;


    // var emailInput = document.getElementById("")

    function RemoteDataStore(url) {
        if (!url) { throw new Error('No remote URL supplied.'); }

        this.serverUrl = url;
    }

    RemoteDataStore.prototype.add = function(key, val) {
        // $.post method requires 1) url of server to send request 2) data
        // knows 3 things: 1. who to talk to 2. what to say 3. what to do w/ info it gets back
        $.post(this.serverUrl, val, function(serverResponse) {
            console.log(serverResponse);
        });
        // var collection = firebase.firestore().collection
    };

    RemoteDataStore.prototype.getAll = function(cb) {   //callback function
        // passes server URL and retrieves info (not saving like in $.post)
        $.get(this.serverUrl, function (serverResponse) {
            console.log(serverResponse);
            cb(serverResponse);
        });
    };

    RemoteDataStore.prototype.get = function(key, cb) {
        $.get(this.serverUrl + '/' + key, function(serverResponse) {
            console.log(serverResponse);
            cb(serverResponse);
        });
    };

    RemoteDataStore.prototype.remove = function (key) {
        $.ajax(this.serverUrl + '/' + key, {
            type: 'DELETE'
        });
    };

    App.RemoteDataStore = RemoteDataStore;
    window.App = App;
    
})(window);