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
      document.addEventListener("online", app.onOnline, false);
      document.addEventListener("offline", app.onOffline, false);
    },
    
    bindEventsAfterDeviceReady: function() {
      document.addEventListener("pause", app.onPause, false);
      document.addEventListener("resume", app.onResume, false);
      document.addEventListener("offline", app.onOffline, false);
      document.addEventListener("backbutton", app.onBackKeyDown, false);
      document.addEventListener("backbutton", app.onBackKeyDown, false);
      window.addEventListener("batterycritical", app.onBatteryCritical, false);
      window.addEventListener("batterylow", app.onBatteryLow, false);
      window.addEventListener("batterystatus", app.onBatteryStatus, false);
      document.addEventListener("menubutton", app.onMenuKeyDown, false);
      document.addEventListener("searchbutton", app.onSearchKeyDown, false);
      document.addEventListener("startcallbutton", app.onStartCallKeyDown, false);
      document.addEventListener("endcallbutton", app.onEndCallKeyDown, false);
      document.addEventListener("volumedownbutton", app.onVolumeDownKeyDown, false);
      document.addEventListener("volumeupbutton", app.onVolumeUpKeyDown, false);
      alert('after bindEvents2');
    },
    
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
      var newtext = document.createTextNode('ON'),
      p1 = document.getElementById("deviceready2");
      p1.appendChild(newtext);
      
      app.receivedEvent('deviceready');
      
      //
      app.bindEventsAfterDeviceReady();
    },
    
    /**
     * Logを表示する
     */
    drawLog: function(message) {
      alert(message);
    },
    
    // Handle the pause event
    //
    onPause: function() {
      app.drawLog('onPause');
    },
    
    // Handle the resume event
    //
    onResume: function() {
      app.drawLog('onResume');
      
      // for ios
      setTimeout(function() {
        // TODO: do your thing!
      }, 0);
    },
    
    // Handle the online event
    //
    onOnline: function() {
      app.drawLog('onOnline');
    },
    
    // Handle the offline event
    //
    onOffline: function() {
      app.drawLog('onOffline');
    },

    // Handle the back button
    //
    onBackKeyDown: function() {
      app.drawLog('onBackKeyDown');
    },
    
    // Handle the batterycritical event
    //
    onBatteryCritical: function(info) {
      app.drawLog('onBatteryCritical' + 'Battery Level Critical ' + info.level + '%\nRecharge Soon!');
//      alert("Battery Level Critical " + info.level + "%\nRecharge Soon!");
    },

    // Handle the batterylow event
    //
    onBatteryLow: function(info) {
      app.drawLog('onBatteryLow: ' + 'Battery Level Low ' + info.level + '%');
//      alert("Battery Level Low " + info.level + "%");
    },
    
    // Handle the batterystatus event
    //
    onBatteryStatus: function(info) {
      app.drawLog('onBatteryStatus: ' + 'Level: ' + info.level + ' isPlugged: ' + info.isPlugged);
//      console.log("Level: " + info.level + " isPlugged: " + info.isPlugged);
    },

    // Handle the menu button
    //
    onMenuKeyDown: function() {
      app.drawLog('onMenuKeyDown');
    },

    // Handle the search button
    //
    onSearchKeyDown: function() {
      app.drawLog('onSearchKeyDown');
    },

    // Handle the start call button
    //
    onStartCallKeyDown: function() {
      app.drawLog('onStartCallKeyDown');
    },
    
    // Handle the end call button
    //
    onEndCallKeyDown: function() {
      app.drawLog('onEndCallKeyDown');
    },

    // Handle the volume down button
    //
    onVolumeDownKeyDown: function() {
      app.drawLog('onVolumeDownKeyDown');
    },

    // Handle the volume up button
    //
    onVolumeUpKeyDown: function() {
      app.drawLog('onVolumeUpKeyDown');
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
