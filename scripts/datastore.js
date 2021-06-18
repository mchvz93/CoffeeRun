(function (window) {
    'use strict';
    var App = window.App || {} ; 
    // App will refer to a new, empty object, represented by {}
    // If there is already an App property of the window, 
    // you assign the local App to it.

    function DataStore() { // constructor!
        this.data = {}; // property that will be used internally for storing data   
    }

    // calling on these from truck.js
    // using local memory
    // methods for interacting with the data

    // gave DataStore.prototype the property add, get, getAll, and remove. Then assigned a function to it
    DataStore.prototype.add = function (key, val) { this.data[key] = val; };    
    DataStore.prototype.get = function (key)      { return this.data[key]; };
    DataStore.prototype.getAll = function ()      { return this.data; };
    DataStore.prototype.remove = function(key)    { delete this.data[key]; };

    
    App.DataStore = DataStore; // Attached DataStore to the App object and reassigned the global App property
    window.App = App;
    
})(window);