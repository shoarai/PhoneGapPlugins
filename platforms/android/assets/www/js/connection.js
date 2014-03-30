/**
 * © 2014 shoarai
 */



var connectionCustom = {
  
  
  checkConnection: function() {
    if (typeof navigator.connection === 'undefined') { return; }
    if (typeof navigator.connection.type === 'undefined') { return; }
    
    var networkState = navigator.connection.type;
    
    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown';
    states[Connection.ETHERNET] = 'Ethernet';
    states[Connection.WIFI]     = 'WiFi';
    states[Connection.CELL_2G]  = 'Cell 2G';
    states[Connection.CELL_3G]  = 'Cell 3G';
    states[Connection.CELL_4G]  = 'Cell 4G';
    states[Connection.CELL]     = 'Cell generic';
    states[Connection.NONE]     = 'No network';

    document.getElementById('network-state').innerHTML = states[networkState];
  },
};