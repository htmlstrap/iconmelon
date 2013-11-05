// Generated by CoffeeScript 1.6.2
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define('models/IconModel', ['models/ProtoModel'], function(ProtoModel) {
    var IconModel, _ref;

    IconModel = (function(_super) {
      __extends(IconModel, _super);

      function IconModel() {
        _ref = IconModel.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      IconModel.prototype.defaults = {
        isSelected: false,
        isFiltered: false,
        hover: false,
        active: false,
        focus: false,
        name: '',
        shape: null,
        hash: null,
        isNameValid: false,
        isShapeValid: false,
        isValid: false
      };

      IconModel.prototype.toggleSelected = function() {
        var _base, _ref1;

        this.toggleAttr('isSelected');
        if ((_ref1 = (_base = this.collection).selectedCnt) == null) {
          _base.selectedCnt = 0;
        }
        if (this.get('isSelected')) {
          this.collection.selectedCnt++;
        } else {
          this.collection.selectedCnt--;
        }
        return App.vent.trigger('icon:select');
      };

      return IconModel;

    })(ProtoModel);
    return IconModel;
  });

}).call(this);