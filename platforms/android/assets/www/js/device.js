/**
 * © 2014 shoarai
 */



var deviceCustom = {
  
  drawDevice: function() {
    var element = document.getElementById('deviceProperties');
    alert('Device Name: '     + device.name     + '<br />' +
          'Device Model: '    + device.model    + '<br />' +
          'Device Cordova: '  + device.cordova  + '<br />' +
          'Device Platform: ' + device.platform + '<br />' +
          'Device UUID: '     + device.uuid     + '<br />' +
          'Device Version: '  + device.version  + '<br />');
    
    element.innerHTML = 'Device Name: '     + device.name     + '<br />' +
                        'Device Model: '    + device.model    + '<br />' +
                        'Device Cordova: '  + device.cordova  + '<br />' +
                        'Device Platform: ' + device.platform + '<br />' +
                        'Device UUID: '     + device.uuid     + '<br />' +
                        'Device Version: '  + device.version  + '<br />';
  }
};