/**
 * © 2014 shoarai
 */


var notificationCustom = {
  // alert dialog dismissed
  alertDismissed: function() {
    // do something
  },
  
  // Show a custom alertDismissed
  //
  showAlert: function() {
    var self = this;
    navigator.notification.alert(
      'You are the winner!', // message
      self.alertDismissed,     // callback
      'Game Over',      // title
      'Done'         // buttonName
    );
  },
  
  // process the confirmation dialog result
  _onConfirm: function(buttonIndex) {
   alert('You selected button ' + buttonIndex);
  },
  
  // Show a custom confirmation dialog
  //
  showConfirm: function() {
    var self = this;
    navigator.notification.confirm(
      'You are the winner!', // message
       self._onConfirm,      // callback to invoke with index of button pressed
      'Game Over',      // title
      ['Restart','Exit']     // buttonLabels
    );
  },

  // process the promptation dialog result
  //
  _onPrompt: function(results) {
    alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
  },

  // Show a custom prompt dialog
  //
  showPrompt: function() {
    var self = this;
    navigator.notification.prompt(
      'Please enter your name', // message
      self._onPrompt,         // callback to invoke
      'Registration',      // title
      ['Ok','Exit'],       // buttonLabels
      'Jane Doe'         // defaultText
    );
  },

  // Beep three times
  //
  playBeep: function() {
    navigator.notification.beep(config.BEEP_TIME);
  },

  // Vibrate for 2 seconds
  //
  vibrate: function() {
    navigator.notification.vibrate(config.VIBRATE_TIME);
  }
};