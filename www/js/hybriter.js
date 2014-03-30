/**
 * © 2014 shoarai
 */

(function(window, document, undefined) {
  
  function Hybriter(elements) {
    return (this instanceof Hybriter)
      ? this.init(elements)
      : new Hybriter(elements);
  }
  
  Hybriter.prototype.init = function(elements) {
    this._viewClickStyle(elements);
  };
  
  /**
   * デバイスがPCか判定する
   * @returns {Boolean} true:PC、false:PC以外
   */
  Hybriter.prototype.isDevicePC = function(element, opts) {
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