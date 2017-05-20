define('app',['exports', 'aurelia-framework', 'gridstack', './item', 'gridstack.jQueryUI'], function (exports, _aureliaFramework, _gridstack, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.App = undefined;

  var _gridstack2 = _interopRequireDefault(_gridstack);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function () {
    function App() {
      _classCallCheck(this, App);

      this.items = [];
      this.lastId = 0;

      this.items.push(new _item.Item(this.lastId++, 0, 0, 4, 2, 'first'));
      this.items.push(new _item.Item(this.lastId++, 4, 0, 4, 4, 'second'));
      this.items.push(new _item.Item(this.lastId++, 8, 0, 2, 2, 'foo'));
      this.items.push(new _item.Item(this.lastId++, 10, 0, 2, 2, 'bar'));
    }

    App.prototype.findItem = function findItem(id) {};

    App.prototype.refreshItems = function refreshItems(widgets) {
      for (var i in widgets) {
        var widget = widgets[i];
        var currentItem = this.items.find(function (a) {
          return a.id == widget.id;
        });
        currentItem.x = widget.x;
        currentItem.y = widget.y;
        currentItem.width = widget.width;
        currentItem.height = widget.height;
      }
    };

    App.prototype.attached = function attached() {
      var _this = this;

      this.options = {
        cellHeight: 80,
        verticalMargin: 10,
        auto: false
      };

      $('.grid-stack').gridstack(this.options);

      $('.grid-stack').on('change', function (event, items) {
        _this.refreshItems(items);
      });
    };

    App.prototype.printItens = function printItens() {
      console.log(this.items);
    };

    App.prototype.addItem = function addItem() {
      var content = 'new item ' + this.lastId;
      var newItem = new _item.Item(this.lastId++, 0, 0, 2, 2, content);
      this.items.push(newItem);
    };

    App.prototype.itemAttached = function itemAttached(item) {
      var DOMReference = item.DOMref;
      var grid = $('.dynamic-grid-stack').data('gridstack');
      grid.makeWidget(DOMReference);
    };

    App.prototype.itemRemoved = function itemRemoved(item) {
      var index = this.items.indexOf(item);
      if (index > -1) {
        var grid = $('.dynamic-grid-stack').data('gridstack');
        grid.removeWidget(item.DOMref);
        this.items.splice(index, 1);
      }
    };

    return App;
  }();
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('item-view',["exports", "aurelia-framework"], function (exports, _aureliaFramework) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ItemView = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3;

  var ItemView = exports.ItemView = (_dec = (0, _aureliaFramework.containerless)(), _dec(_class = (_class2 = function () {
    function ItemView() {
      _classCallCheck(this, ItemView);

      _initDefineProp(this, "item", _descriptor, this);

      _initDefineProp(this, "rendered", _descriptor2, this);

      _initDefineProp(this, "removed", _descriptor3, this);

      this.widget = {};
    }

    ItemView.prototype.attached = function attached() {
      if (typeof this.rendered == "function") this.rendered(this.item);
    };

    ItemView.prototype.removeItem = function removeItem() {
      if (typeof this.rendered == "function") this.removed(this.item);
    };

    return ItemView;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "item", [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rendered", [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return undefined;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "removed", [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return undefined;
    }
  })), _class2)) || _class);
});
define('item',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Item = exports.Item = function Item(id, x, y, width, height, content) {
    _classCallCheck(this, Item);

    this.id = id;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.content = content;
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\r\n  <require from=\"./app.css\"></require>\r\n  <require from=\"gridstack/gridstack.min.css\"></require>\r\n  <require from=\"./item-view\"></require>\r\n  <h3>Dynamic grid\r\n  <input type=\"button\" click.trigger=\"addItem()\" value=\"Add\" />\r\n  <input type=\"button\" click.trigger=\"printItens()\" value=\"Print List at console\" />\r\n  </h3>\r\n  <div class=\"grid-stack dynamic-grid-stack\" data-gs-width=\"12\" data-gs-animate=\"yes\">\r\n    <item-view repeat.for=\"item of items\" item.bind=\"item\" rendered.call=\"itemAttached($event)\" removed.call=\"itemRemoved($event)\" ></item-view>    \r\n  </div>\r\n  <div repeat.for=\"item of items\" >\r\n    id:${item.id}\r\n    x:${item.x}\r\n    y:${item.y}\r\n    height:${item.height}\r\n    wigth:${item.width}\r\n  </div>\r\n\r\n</template>"; });
define('text!app.css', ['module'], function(module) { module.exports = ".grid-stack-item-content {\n  border: 1px solid black; }\n\n.grid-stack-item {\n  /*border: 1px solid blue;*/ }\n"; });
define('text!item-view.html', ['module'], function(module) { module.exports = "<template>\r\n    <div ref=\"item.DOMref\" data-gs-id.bind=\"item.id\" class=\"grid-stack-item\"  data-gs-x=\"${item.x}\" data-gs-y=\"${item.y}\" data-gs-width=\"${item.width}\" data-gs-height=\"${item.height}\" data-gs-auto-position=\"1\" >        \r\n        <div class=\"grid-stack-item-content\">\r\n            <h1>${item.content}</h1>\r\n            <input type=\"button\" click.trigger=\"removeItem()\" value=\"remove\"></div>\r\n        </div>\r\n    </div>\r\n</template>"; });
//# sourceMappingURL=app-bundle.js.map