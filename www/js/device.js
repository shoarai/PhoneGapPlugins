/**
 * © 2014 shoarai
 */



var deviceCustom = {
  
  showProperties: function() {
    var element = document.getElementById('deviceProperties');
    element.innerHTML = 'Device Name: '     + device.name     + '<br />' +
                        'Device Model: '    + device.model    + '<br />' +
                        'Device Cordova: '  + device.cordova  + '<br />' +
                        'Device Platform: ' + device.platform + '<br />' +
                        'Device UUID: '     + device.uuid     + '<br />' +
                        'Device Version: '  + device.version  + '<br />';
  }
};