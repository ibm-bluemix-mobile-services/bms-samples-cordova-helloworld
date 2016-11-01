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

var app =  {
    // Bluemix credentials
    //
    // Create a MobileFirst Services starter service instance and copy the route e.g. "myhostname.mybluemix.net"
    route: "SERVER_URL",

    // Initialize BMSClient
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
    // Set the region: BMSClient.REGION_US_SOUTH, BMSClient.REGION_UK, or BMSClient.REGION_SYDNEY
    onDeviceReady: function() {
        BMSClient.initialize(BMSClient.REGION_US_SOUTH);
    },

    // Ping Bluemix
    //
    // Sends a request to the Bluemix backend
    // The success and failure variables handle the callback response for each case
    ping: function() {
        var request = new BMSRequest(this.route, BMSRequest.GET);

        var header = document.getElementById("text-big");
        var connected = document.getElementById("text-connected");
        var details = document.getElementById("text-details");

        var success = function(successResponse) {
            header.style.display = "block";
            header.innerHTML = "Yay!";
            connected.innerHTML = "You are connected!";
        };

        var failure = function(failureResponse) {
            header.style.display = "block";
            header.innerHTML = "Bummer";
            connected.innerHTML = "Something Went Wrong";
            details.innerHTML = "<h4>Response:</h4><i>" + failureResponse.errorDescription + "</i>";
        };

        request.send(success, failure);
    }
};

app.initialize();
