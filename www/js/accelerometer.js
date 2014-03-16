/**
 * © 2014 shoarai
 */


var accelerometerCustom = {
  
  // Get the acceleration
  //
  getAcceleration: function() {
    navigator.accelerometer.getCurrentAcceleration(this._onSuccess, this._onError);
  },
  
  // Start watching the acceleration
  //
  startWatch: function() {
    // Update acceleration every 3 seconds
    var options = { frequency: config.ACCELEROMETER_FREAQUENCY };

    this.watchID = navigator.accelerometer.watchAcceleration(this._onSuccess, this._onError, options);
  },

  // Stop watching the acceleration
  //
  stopWatch: function() {
    if (this.watchID) {
      navigator.accelerometer.clearWatch(this.watchID);
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
