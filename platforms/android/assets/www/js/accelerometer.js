

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
  
  // onSuccess: Get a snapshot of the current acceleration
  //
  _onSuccess: function(acceleration) {
    document.getElementById('acceleration-x').innerHTML = acceleration.x;
    document.getElementById('acceleration-y').innerHTML = acceleration.y;
    document.getElementById('acceleration-z').innerHTML = acceleration.z;
    document.getElementById('acceleration-timestamp').innerHTML = acceleration.timestamp;
  },
  
  // onError: Failed to get the acceleration
  //
  _onError: function() {
    alert('onError!');
  }
};
