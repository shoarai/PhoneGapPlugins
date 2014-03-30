/**
 * © 2014 shoarai
 */

(function(window, document, undefined) {
  
  function Hybriter(elements) {
    return (this instanceof Hybriter)
      ? this.initialize(elements)
      : new Hybriter(elements);
  }
  
  Hybriter.prototype.initialize = function(elements) {
    this._viewClickStyle(elements);
    
    var self = this;
    function callback() {
    };
    
/*    this.alert({title:'title', message:'messa', button:'OKKKKK', callback:callback});
    this.confirm({message:'messa', title:'title', buttons:['OKKKKK','Cancel'], callbacks:[callback,null]});
    this.prompt({message:'messa', title:'title', buttons:['OKKKKK','Cancel'], callbacks:[callback,null], text:'default'});
*/
    return self;
  };
  
  Hybriter.alert = function(obj) {

    if (typeof obj !== 'object') { return; }
    
    if (typeof obj.message  !== 'string') {
      obj.message = 'Alert';
    }
    if (typeof obj.callback !== 'function') {
      obj.callback = function() {};
    }
    
    if (typeof navigator === 'undefined'
     || typeof navigator.notification === 'undefined'
     || typeof navigator.notification.alert === 'undefined') {
      window.alert(obj.message);
      obj.callback();
      return;
    }
    
    if (typeof obj.title !== 'string') {
      obj.title = 'Title';
    }
    if (typeof obj.buttonName !== 'string') {
      obj.button = 'OK';
    }
    
    navigator.notification.alert(
      obj.message,
      obj.callback,
      obj.title,
      obj.button
    );
  };
  
  Hybriter.confirm = function(obj) {

    if (typeof obj !== 'object') { return; }
    
    if (typeof obj.message  !== 'string') {
      obj.message = 'Confirm';
    }
    if (typeof obj.callbacks !== 'object') {
      obj.callbacks = [];
    }
    
    if (typeof navigator === 'undefined'
     || typeof navigator.notification === 'undefined'
     || typeof navigator.notification.alert === 'undefined') {
      
      var ok = window.confirm(obj.message);
      if (ok) {
        if (typeof obj.callbacks[0] === 'function') {
          obj.callbacks[0]();
        }
      } else {
        if (typeof obj.callbacks[1] === 'function') {
          obj.callbacks[1]();
        }
      }
      return;
    }
    
    function callback(results) {
      if (typeof obj.callbacks[results.buttonIndex] === 'function') {
        obj.callbacks[results.buttonIndex];
      }
    }
    
    if (typeof obj.title !== 'string') {
      obj.title = 'Title';
    }
    
    navigator.notification.confirm(
      obj.message,
      obj.callback,
      obj.title,
      obj.buttons
    );
  };
  
  Hybriter.prompt = function(obj) {

    if (typeof obj !== 'object') { return; }
    
    if (typeof obj.message  !== 'string') {
      obj.message = 'Prompt';
    }
    if (typeof obj.callbacks !== 'object') {
      obj.callbacks = [];
    }
    if (typeof obj.text !== 'string') {
      obj.text = '';
    }
    
    if (typeof navigator === 'undefined'
     || typeof navigator.notification === 'undefined'
     || typeof navigator.notification.alert === 'undefined') {

      var text = window.prompt(obj.message, obj.text);
      if (text) {
        if (typeof obj.callbacks[0] === 'function') {
          obj.callbacks[0](text);
        }
      } else {
        if (typeof obj.callbacks[1] === 'function') {
          obj.callbacks[1]();
        }
      }
      return;
    }
    
    function callback(results) {
      if (typeof obj.callbacks[results.buttonIndex] === 'function') {
        obj.callbacks[results.buttonIndex](results.input1);
      }
    }
    
    if (typeof obj.title !== 'string') {
      obj.title = 'Title';
    }
    
    navigator.notification.prompt(
      obj.message,
      obj.callback,
      obj.title,
      obj.buttons,
      obj.text
    );
  };
  
  /**
   * デバイスがPCか判定する
   * @returns {Boolean} true:PC、false:PC以外
   */
  Hybriter.isDevicePC = function(element, opts) {
    if (navigator.userAgent.indexOf('iPhone') < 0
     && navigator.userAgent.indexOf('iPad') < 0
     && navigator.userAgent.indexOf('Android') < 0) {
      return true;
    } else {
      return false;
    }
  };
  
  /**
   * 要素のクリック時にクラスを追加する
   * @param {Array<String>} elements 要素名の配列
   */
  Hybriter.prototype._viewClickStyle = function(elements) {
    if (typeof elements !== 'object' ) { return; }
    
    var className = 'click-down';
    var ontouchstart = function(e) {
      $(e.target).addClass(className);
    };
    var ontouchend = function(e) {
      $(e.target).removeClass(className);
    };
    
    $.each(elements, function(i, element) {
      if (typeof element !== 'string' ) {
        return true;    // continue
      }
      $(document).on('touchstart', element, ontouchstart);
      $(document).on('touchend'  , element, ontouchend);
    });
  };
    
  if (typeof exports == 'object') {
    module.exports = Hybriter;
  } else if (typeof define == 'function' && define.amd) {
    define(function() {
      return Hybriter;
    });
  } else {
    window.Hybriter = Hybriter;
  }
})(window, window.document);