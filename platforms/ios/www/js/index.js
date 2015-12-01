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
    route: "https://HelloMatt.mybluemix.net",//"<APPLICATION_ROUTE>"
    guid: "36fe7be8-5eda-42c0-bf2c-19ced26a3278",//"<APPLICATION_GUID>"

    // Initialize BMSClient
    initialize: function() {
        BMSClient.initialize(this.route, this.guid);
    },
    // Ping Bluemix
    ping: function() {
        var request = new MFPRequest("/protected", MFPRequest.GET);

        var header = document.getElementById("text-big");
        var connected = document.getElementById("text-connected");
        var details = document.getElementById("text-details");

        var success = function(successResponse) {
            header.style.display = "block";
            connected.innerHTML = "You are connected!";
            //alert("Request success!\n\nStatus: " + successResponse.responseText);
        };

        var failure = function(failureResponse) {
            header.style.display = "block";
            header.innerHTML = "Bummer";
            connected.innerHTML = "Something Went Wrong";
            details.innerHTML = JSON.stringify(failureResponse.errorDescription);
            //alert("Request failure!\n\nStatus: " + JSON.stringify(failureResponse));
        };

        request.send(success, failure);
    }
};

app.initialize();