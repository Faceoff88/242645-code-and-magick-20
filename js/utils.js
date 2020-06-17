'use strict';

(function () {
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_LASTNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var userNameInput = document.querySelector('.setup-user-name');
  window.util = {
    isEscEvent: function (evt, action) {
      if (evt.key === 'Escape' && userNameInput !== document.activeElement) {
        evt.preventDefault();
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.key === 'Enter') {
        action();
      }
    }
  };

  window.utilConst = {
    WIZARD_NAMES: WIZARD_NAMES,
    WIZARD_LASTNAMES: WIZARD_LASTNAMES,
    COAT_COLORS: COAT_COLORS,
    EYES_COLORS: EYES_COLORS,
    FIREBALL_COLORS: FIREBALL_COLORS
  };
})();
