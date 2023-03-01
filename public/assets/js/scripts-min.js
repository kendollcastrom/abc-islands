(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var bankingTabs = function bankingTabs() {
	var d = document,
	    tabs = Array.prototype.slice.apply(d.querySelectorAll(".banking-tabs-container__tab")),
	    panels = Array.prototype.slice.apply(d.querySelectorAll(".banking-tabs-container__panel"));

	d.getElementById("tabs").addEventListener("click", function (e) {
		if (e.target.classList.contains("banking-tabs-container__tab")) {
			var i = tabs.indexOf(e.target);
			tabs.map(function (tab) {
				return tab.classList.remove("is-active");
			});
			tabs[i].classList.add("is-active");
			panels.map(function (tab) {
				return tab.classList.remove("is-active");
			});
			panels[i].classList.add("is-active");
		}
	});
};

exports.default = bankingTabs;

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var cookiesComponent = function cookiesComponent() {
  var cookieBanner = document.querySelector('.cookie-banner');
  var acceptButton = document.querySelector('.cookie-banner__button--accept');
  var rejectButton = document.querySelector('.cookie-banner__button--reject');

  acceptButton.addEventListener('click', function () {
    cookieBanner.style.display = 'none';
    // aquí iría el código para aceptar las cookies
  });

  rejectButton.addEventListener('click', function () {
    cookieBanner.style.display = 'none';
    // aquí iría el código para rechazar las cookies
  });
};

exports.default = cookiesComponent;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function initAcc(elem, option) {
    document.addEventListener('click', function (e) {
        if (!e.target.matches(elem + ' .a-btn')) return;else {
            if (!e.target.parentElement.classList.contains('active')) {
                if (option == true) {
                    var elementList = document.querySelectorAll(elem + ' .a-container');
                    Array.prototype.forEach.call(elementList, function (e) {
                        e.classList.remove('active');
                    });
                }
                e.target.parentElement.classList.add('active');
            } else {
                e.target.parentElement.classList.remove('active');
            }
        }
    });
}
initAcc('.accordion.v1', true);
initAcc('.accordion.v2', false);
exports.default = initAcc();

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});
var tabsHorses = function tabsHorses() {
		var d = document,
		    tabs = Array.prototype.slice.apply(d.querySelectorAll('.tabs-container__tab')),
		    panels = Array.prototype.slice.apply(d.querySelectorAll('.tabs-container__panel'));

		d.getElementById('tabs-horses').addEventListener('click', function (e) {
				if (e.target.classList.contains('tabs-container__tab')) {
						var i = tabs.indexOf(e.target);
						tabs.map(function (tab) {
								return tab.classList.remove('is-active');
						});
						tabs[i].classList.add('is-active');
						panels.map(function (tab) {
								return tab.classList.remove('is-active');
						});
						panels[i].classList.add('is-active');
				}
		});
};

exports.default = tabsHorses;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initMenu = initMenu;
function initMenu() {

  var toggleButton = document.querySelector('.menu__toggle');
  var menuContent = document.querySelector('.menu__content');
  var closeButton = document.querySelector('.menu__content__close');
  var wrapperOverlay = document.querySelector('.menu__wrapper');

  toggleButton.addEventListener('click', function () {
    menuContent.classList.toggle('is-open');
    wrapperOverlay.classList.toggle('open-overlay');
  });

  closeButton.addEventListener('click', function () {
    menuContent.classList.remove('is-open');
    wrapperOverlay.classList.remove('open-overlay');
  });
}

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var openTable = function openTable() {

	var btn = document.querySelector('.horse-layout__racebook--button');
	var table = document.querySelector('.horse-layout__open-table');

	btn.addEventListener('click', function () {
		table.style.display = 'block';
	});
};

exports.default = openTable;

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var scrollButton = function scrollButton() {
  var btnScrollTop = document.querySelector('.button--scroll-top');

  btnScrollTop.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
};

exports.default = scrollButton;

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var topNav = exports.topNav = function topNav() {
	var myFunction = function myFunction() {
		document.querySelector('.hamburger').addEventListener('click', function (e) {
			e.preventDefault();
			[].map.call(document.querySelectorAll('.hamburger'), function (el) {
				el.classList.toggle('is-active');
			});
			[].map.call(document.querySelectorAll('.top-nav__menu'), function (el) {
				el.classList.toggle('show-top-nav');
			});
		});
	};
	myFunction();
};

},{}],9:[function(require,module,exports){
'use strict';

var _topNav = require('./components/topNav');

var _dropdownSports = require('./components/dropdown-sports');

var _openTable = require('./components/openTable');

var _openTable2 = _interopRequireDefault(_openTable);

var _bankingTabs = require('./components/banking-tabs');

var _bankingTabs2 = _interopRequireDefault(_bankingTabs);

var _menuFixed = require('./components/menu-fixed');

var _horsesTabs = require('./components/horsesTabs');

var _horsesTabs2 = _interopRequireDefault(_horsesTabs);

var _scrollButton = require('./components/scrollButton');

var _scrollButton2 = _interopRequireDefault(_scrollButton);

var _cookiesComponent = require('./components/cookiesComponent');

var _cookiesComponent2 = _interopRequireDefault(_cookiesComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
		(0, _topNav.topNav)();
		//bankingTabs();
		(0, _menuFixed.initMenu)();
		(0, _scrollButton2.default)();
		(0, _cookiesComponent2.default)();

		if (document.body.classList.contains('Home')) {} else if (document.body.classList.contains('Casino')) {} else if (document.body.classList.contains('Sport-rules')) {
				(0, _dropdownSports.initAcc)();
		} else if (document.body.classList.contains('Racebook')) {
				(0, _horsesTabs2.default)();
				(0, _openTable2.default)();
				// tabs();
		} else if (document.body.classList.contains('Banking')) {
				(0, _bankingTabs2.default)();
		}
})();
// import {tabs, tabsHorses} from './components/tabs';

},{"./components/banking-tabs":1,"./components/cookiesComponent":2,"./components/dropdown-sports":3,"./components/horsesTabs":4,"./components/menu-fixed":5,"./components/openTable":6,"./components/scrollButton":7,"./components/topNav":8}]},{},[9]);

//# sourceMappingURL=scripts-min.js.map
