/**
 * © 2014 shoarai
 */


var compassCustom = {
  
  // Get the compass
  //
  getHeading: function() {
    navigator.compass.getCurrentHeading(this._onSuccess, this._onError);
  },
  
  // Start watching the compass
  //
  startWatch: function() {
    // Update compass every 3 seconds
    var options = { frequency: config.HEADING_FREAQUENCY };

    this.watchID = navigator.compass.watchHeading(this._onSuccess, this._onError, options);
  },

  // Stop watching the compass
  //
  stopWatch: function() {
    if (this.watchID) {
      navigator.compass.clearWatch(this.watchID);
      this.watchID = null;
    }
  },
  
  // onSuccess: Get a snapshot of the current acceleration
  //
  _onSuccess: function(heading) {
    document.getElementById('heading').innerHTML = heading.magneticHeading;
  },
  
  // onError: Failed to get the acceleration
  //
  _onError: function(compassError) {
    alert('Compass Error: ' + compassError.code);
  }
};
