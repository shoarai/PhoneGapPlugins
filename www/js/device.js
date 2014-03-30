/**
 * © 2014 shoarai
 */



var deviceCustom = {
  
  showProperties: function() {
    if (typeof device === 'undefined') { return; }
    
    document.getElementById('device-name').innerHTML = device.name;
    document.getElementById('device-model').innerHTML = device.model;
    document.getElementById('device-cordova').innerHTML = device.cordova;
    document.getElementById('device-platform').innerHTML = device.platform;
    document.getElementById('device-uuid').innerHTML = device.uuid;
    document.getElementById('device-version').innerHTML = device.version;
  }
};