define('app',['exports', 'gridstack'], function (exports, _gridstack) {
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
      this.lastAddTop = 2;

      this.message = 'Hello World!';

      this.items.push(new Item(0, 0, 4, 2, 'first'));
      this.items.push(new Item(4, 0, 4, 4, 'second'));
      this.items.push(new Item(8, 0, 2, 2, 'foo'));
      this.items.push(new Item(10, 0, 2, 2, 'bar'));
    }

    App.prototype.attached = function attached() {
      var options = {
        cellHeight: 80,
        verticalMargin: 10
      };
      $('.grid-stack').gridstack(options);
    };

    App.prototype.addItem = function addItem() {
      var content = 'new item ' + this.items.length;
      this.items.push(new Item(0, this.lastAddTop, 2, 2, content));
      this.lastAddTop += 2;
    };

    return App;
  }();

  var Item = function Item(x, y, width, height, content) {
    _classCallCheck(this, Item);

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.content = content;
  };
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
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./app.css\"></require>\n  <require from=\"gridstack/gridstack.min.css\"></require>\n  <h1>${message}</h1>\n  <h3>Fixed grid</h3>\n  <div class=\"grid-stack\" data-gs-width=\"12\" data-gs-animate=\"yes\">\n    <div class=\"grid-stack-item\" data-gs-x=\"0\" data-gs-y=\"0\" data-gs-width=\"4\" data-gs-height=\"2\">\n      <div class=\"grid-stack-item-content\">1</div>\n    </div>\n    <div class=\"grid-stack-item\" data-gs-x=\"4\" data-gs-y=\"0\" data-gs-width=\"4\" data-gs-height=\"4\">\n      <div class=\"grid-stack-item-content\">2</div>\n    </div>\n    <div class=\"grid-stack-item\" data-gs-x=\"8\" data-gs-y=\"0\" data-gs-width=\"2\" data-gs-height=\"2\" data-gs-min-width=\"2\" data-gs-no-resize=\"yes\">\n      <div class=\"grid-stack-item-content\"> <span class=\"fa fa-hand-o-up\"></span> Drag me! </div>\n    </div>\n    <div class=\"grid-stack-item\" data-gs-x=\"10\" data-gs-y=\"0\" data-gs-width=\"2\" data-gs-height=\"2\">\n      <div class=\"grid-stack-item-content\">4</div>\n    </div>\n    <div class=\"grid-stack-item\" data-gs-x=\"0\" data-gs-y=\"2\" data-gs-width=\"2\" data-gs-height=\"2\">\n      <div class=\"grid-stack-item-content\">5</div>\n    </div>\n    <div class=\"grid-stack-item\" data-gs-x=\"2\" data-gs-y=\"2\" data-gs-width=\"2\" data-gs-height=\"4\">\n      <div class=\"grid-stack-item-content\">6</div>\n    </div>\n    <div class=\"grid-stack-item\" data-gs-x=\"8\" data-gs-y=\"2\" data-gs-width=\"4\" data-gs-height=\"2\">\n      <div class=\"grid-stack-item-content\">7</div>\n    </div>\n    <div class=\"grid-stack-item\" data-gs-x=\"0\" data-gs-y=\"4\" data-gs-width=\"2\" data-gs-height=\"2\">\n      <div class=\"grid-stack-item-content\">8</div>\n    </div>\n    <div class=\"grid-stack-item\" data-gs-x=\"4\" data-gs-y=\"4\" data-gs-width=\"4\" data-gs-height=\"2\">\n      <div class=\"grid-stack-item-content\">9</div>\n    </div>\n    <div class=\"grid-stack-item\" data-gs-x=\"8\" data-gs-y=\"4\" data-gs-width=\"2\" data-gs-height=\"2\">\n      <div class=\"grid-stack-item-content\">10</div>\n    </div>\n    <div class=\"grid-stack-item\" data-gs-x=\"10\" data-gs-y=\"4\" data-gs-width=\"2\" data-gs-height=\"2\">\n      <div class=\"grid-stack-item-content\">11</div>\n    </div>\n  </div>\n  <h3>Dynamic grid\n  <input type=\"button\" click.trigger=\"addItem()\" value=\"Add\" />\n  </h3>\n  <div class=\"grid-stack\" data-gs-width=\"12\" data-gs-animate=\"yes\">\n    <div class=\"grid-stack-item\" repeat.for=\"item of items\" data-gs-x=\"${item.x}\" data-gs-y=\"${item.y}\" data-gs-width=\"${item.width}\" data-gs-height=\"${item.height}\">\n      <div class=\"grid-stack-item-content\">\n        ${item.content}\n      </div>\n    </div>\n  </div>\n\n</template>"; });
define('text!app.css', ['module'], function(module) { module.exports = ".grid-stack-item-content {\n  border: 1px solid black; }\n\n.grid-stack-item {\n  /*border: 1px solid blue;*/ }\n"; });
//# sourceMappingURL=app-bundle.js.map