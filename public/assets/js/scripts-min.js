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
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var chatbot = function chatbot() {
  var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
  (function () {
    var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/5e39df78298c395d1ce638e6/default';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
  })();
};

exports.default = chatbot;

},{}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var openTable = function openTable() {
	var btn = document.querySelector(".horse-layout__racebook--button");
	var table = document.querySelector(".horse-layout__open-table");

	btn.addEventListener("click", function () {
		if (table.style.display === "none") {
			table.style.display = "block";
		} else {
			table.style.display = "none";
		}
	});
};

exports.default = openTable;

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var scrollButton = function scrollButton() {
  var btnScrollTop = document.querySelector('.button--scroll-top');

  // Oculta el botón de scroll al principio
  btnScrollTop.style.display = 'none';

  // Muestra el botón de scroll cuando el usuario ha hecho un poco de scroll hacia abajo
  window.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
      // Cambia 100 por la cantidad de píxeles que quieras
      btnScrollTop.style.display = 'block';
    } else {
      btnScrollTop.style.display = 'none';
    }
  });

  btnScrollTop.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
};

exports.default = scrollButton;

},{}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
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

var _chatbot = require('./components/chatbot');

var _chatbot2 = _interopRequireDefault(_chatbot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import {tabs, tabsHorses} from './components/tabs';
(function () {
		(0, _topNav.topNav)();
		//bankingTabs();
		(0, _menuFixed.initMenu)();
		(0, _scrollButton2.default)();
		(0, _cookiesComponent2.default)();
		(0, _chatbot2.default)();

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

},{"./components/banking-tabs":1,"./components/chatbot":2,"./components/cookiesComponent":3,"./components/dropdown-sports":4,"./components/horsesTabs":5,"./components/menu-fixed":6,"./components/openTable":7,"./components/scrollButton":8,"./components/topNav":9}]},{},[10]);

//# sourceMappingURL=scripts-min.js.map
