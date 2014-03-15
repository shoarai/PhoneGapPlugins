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
    var self = this;
    document.addEventListener('deviceready', self.onDeviceReady, false);
    
    // ネットワークの状態が変化したとき、ネットワークの状態を確認する
    document.addEventListener("online", connectionCustom.checkConnection, false);
    document.addEventListener("offline", connectionCustom.checkConnection, false);
  },
  // deviceready Event Handler
  //
  // The scope of 'this' is the event. In order to call the 'receivedEvent'
  // function, we must explicity call 'app.receivedEvent(...);'
  onDeviceReady: function() {
    app.receivedEvent('deviceready');
    
    // デバイス情報を表示する
    deviceCustom.showProperties();
    
    // ネットワーク状況を確認する
    connectionCustom.checkConnection();
    
    // スプラッシュスクリーンを表示する
    splashscreenCustom.showScreen();
    
    // 加速度を取得する
//    accelerometerCustom.getAcceleration();
    
    // 加速度を監視する
    accelerometerCustom.startWatch();
    
    // ボタンを押下可能にする
    app.activeButton();
  },
  
  /**
   * ボタンを押下可能にする
   */
  activeButton: function() {
    var buttonElements = document.getElementsByTagName("button");
    
    for(i=0;i<buttonElements.length;i++){
      buttonElements[i].disabled = false;
    }
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
