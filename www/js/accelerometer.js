

var accelerometerCustom = {
  
  
  // Get the acceleration
  //
  getAcceleration: function() {
    var self = this;
    navigator.accelerometer.getCurrentAcceleration(self._onSuccess, self._onError);
  },
  
  
  // Start watching the acceleration
  //
  startWatch: function() {
    // Update acceleration every 3 seconds
    var options = { frequency: config.ACCELEROMETER_FREAQUENCY };

    var self = this;
    this.watchID = navigator.accelerometer.watchAcceleration(self._onSuccess, self._onError, options);
  },

  // Stop watching the acceleration
  //
  stopWatch: function() {
    if (this.watchID) {
      var self = this;
      navigator.accelerometer.clearWatch(self.watchID);
      this.watchID = null;
    }
  },
  
  _onSuccess: function(acceleration) {
    document.getElementById('ax').innerHTML = acceleration.x;
    document.getElementById('ay').innerHTML = acceleration.y;
    document.getElementById('az').innerHTML = acceleration.z;
    
/*
    alert('Acceleration X: ' + acceleration.x + '\n' +
          'Acceleration Y: ' + acceleration.y + '\n' +
          'Acceleration Z: ' + acceleration.z + '\n' +
          'Timestamp: '      + acceleration.timestamp + '\n');
*/          
/*    
    var element = document.getElementById('accelerometer');
    element.innerHTML = 'Acceleration X: ' + acceleration.x         + '<br />' +
                        'Acceleration Y: ' + acceleration.y         + '<br />' +
                        'Acceleration Z: ' + acceleration.z         + '<br />' +
                        'Timestamp: '      + acceleration.timestamp + '<br />';
*/
  },
  
  // onError: Failed to get the acceleration
  //
  _onError: function() {
    alert('onError!');
  }
};
