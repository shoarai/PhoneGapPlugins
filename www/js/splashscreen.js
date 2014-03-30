/**
 * © 2014 shoarai
 */

var splashscreenCustom = {
  
  showScreen: function() {
    if (typeof navigator.splashscreen === 'undefined') { return; }
    if (typeof navigator.splashscreen.show === 'undefined') { return; }
    
    navigator.splashscreen.show();  
  }
  
};
