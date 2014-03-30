/**
 * © 2014 shoarai
 */


var compassCustom = {
  
  // Get the compass
  //
  getHeading: function() {
    if (typeof navigator.compass === 'undefined') { return; }
    if (typeof navigator.compass.getCurrentHeading === 'undefined') { return; }
    
    navigator.compass.getCurrentHeading(this._onSuccess, this._onError);
  },
  
  // Start watching the compass
  //
  startWatch: function() {
    if (typeof navigator.compass === 'undefined') { return; }
    if (typeof navigator.compass.watchHeading === 'undefined') { return; }
    
    // Update compass every 3 seconds
    var options = { frequency: config.HEADING_FREAQUENCY };

    this.watchID = navigator.compass.watchHeading(this._onSuccess, this._onError, options);
  },

  // Stop watching the compass
  //
  stopWatch: function() {
    if (typeof navigator.compass === 'undefined') { return; }
    if (typeof navigator.compass.clearWatch === 'undefined') { return; }
    
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
    console.log('Compass Error: ' + compassError.code);
  }
};
