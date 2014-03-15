/**
 * © 2014 shoarai
 */


var notificationCustom = {
  
  // Show a custom _alertDismissed
  //
  showAlert: function() {
    navigator.notification.alert(
      'You are the winner!', // message
      this._alertDismissed,     // callback
      'Game Over',      // title
      'Done'         // buttonName
    );
  },
  
  // alert dialog dismissed
  _alertDismissed: function() {
    // do something
  },
  
  // Show a custom confirmation dialog
  //
  showConfirm: function() {
    navigator.notification.confirm(
      'You are the winner!', // message
       this._onConfirm,      // callback to invoke with index of button pressed
      'Game Over',      // title
      ['Restart','Exit']     // buttonLabels
    );
  },
  
  // process the confirmation dialog result
  _onConfirm: function(buttonIndex) {
   alert('You selected button ' + buttonIndex);
  },
  
  promptText: 'Jane Doe',
  
  // Show a custom prompt dialog
  //
  showPrompt: function() {
    navigator.notification.prompt(
      'Please enter your name', // message
      this._onPrompt,         // callback to invoke
      'Registration',      // title
      ['OK','Exit'],       // buttonLabels
      this.promptText         // defaultText
    );
  },
  
  // process the promptation dialog result
  //
  _onPrompt: function(results) {
    alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
    
    notificationCustom.promptText = results.input1;
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