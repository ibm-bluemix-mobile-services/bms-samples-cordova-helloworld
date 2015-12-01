/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

var bluemix =  {
    // Bluemix credentials
    route: "https://HelloMatt.mybluemix.net",//"<insert route>"
    guid: "36fe7be8-5eda-42c0-bf2c-19ced26a3278",//"<insert GUID>"
    timeout: 20000,

    // Initialize BMSClient
    initialize: function() {
        BMSClient.initialize(this.route + "/protected", this.guid);
    },
    // Ping Bluemix
    ping: function() {
        var request = new MFPRequest(this.route, MFPRequest.GET, this.timeout);

        var success = function(successResponse) {
          alert("Request success!\n\nStatus: " + successResponse.responseText);
        };

        var failure = function(failureResponse) {
          alert("Request failure!\n\nStatus: " + JSON.stringify(failureResponse));
        };

        request.send(success, failure);
    }
};

app.initialize();