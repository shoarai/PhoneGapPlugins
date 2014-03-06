




var notificationCustom = {
  initialize: function() {
   
   
   
  },
  
  // alert dialog dismissed
  alertDismissed: function() {
    // do something
  },
  
  // Show a custom alertDismissed
  //
  showAlert: function() {
    navigator.notification.alert(
      'You are the winner!', // message
      notificationCustom.alertDismissed,     // callback
      'Game Over',      // title
      'Done'         // buttonName
    );
  },
  
  // process the confirmation dialog result
  onConfirm: function(buttonIndex) {
   alert('You selected button ' + buttonIndex);
  },
  
  // Show a custom confirmation dialog
  //
  showConfirm: function() {
    navigator.notification.confirm(
      'You are the winner!', // message
       notificationCustom.onConfirm,      // callback to invoke with index of button pressed
      'Game Over',      // title
      ['Restart','Exit']     // buttonLabels
    );
  },

  // process the promptation dialog result
  onPrompt: function(results) {
    alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
  },

  // Show a custom prompt dialog
  //
  showPrompt: function() {
    navigator.notification.prompt(
      'Please enter your name', // message
      notificationCustom.onPrompt,         // callback to invoke
      'Registration',      // title
      ['Ok','Exit'],       // buttonLabels
      'Jane Doe'         // defaultText
    );
  },

  // Beep three times
  //
  playBeep: function() {
    navigator.notification.beep(3);
  },

  // Vibrate for 2 seconds
  //
  vibrate: function() {
    navigator.notification.vibrate(2000);
  }
};