// Generated by CoffeeScript 1.6.1

define([], function() {
  var Progress,
    _this = this;
  Progress = (function() {

    Progress.prototype._cnt = 0;

    Progress.prototype._loaded = 0;

    Progress.prototype._total = 0;

    Progress.prototype._imgs = [];

    Progress.prototype._fnc = {};

    function Progress() {
      var _this = this;
      this.loaded = function() {
        return Progress.prototype.loaded.apply(_this, arguments);
      };
    }

    Progress.prototype.load = function(imgs, fnc) {
      var img, _results;
      this._imgs = imgs;
      this._fnc = fnc;
      this._total = this._imgs.length;
      _results = [];
      while (this._cnt < this._total) {
        img = new Image();
        img.src = this._imgs[this._cnt];
        img.addEventListener('load', this.loaded, false);
        _results.push(this._cnt++);
      }
      return _results;
    };

    Progress.prototype.loaded = function() {
      this._loaded++;
      if (this._loaded === this._total) {
        return this._fnc();
      }
    };

    Progress.prototype.start = function() {
      var end;
      $('body>*:not(#progress)').css('opacity', 1);
      end = function() {
        return $('#progress').remove();
      };
      return $('#progress').addClass('pageOut').bind('\
          webkitTransitionEnd\
          transitionend\
          oTransitionEnd\
          msTransitionEnd\
        ', end);
    };

    return Progress;

  })();
  return new Progress();
});
