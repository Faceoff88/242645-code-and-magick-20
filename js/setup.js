'use strict';

(function () {
  var setupCoatColor = document.querySelector('.setup-wizard .wizard-coat');
  var setupWizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var setupFireball = document.querySelector('.setup-fireball-wrap');
  var inpCoatColor = document.querySelector('input[name=coat-color]');
  var inpEyesColor = document.querySelector('input[name=eyes-color]');
  var inpFireballColor = document.querySelector('input[name=fireball-color]');
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var wizardsData = [];
  var getRandomData = function (randomDataWizard) {
    randomDataWizard = {};
    randomDataWizard.name = window.utilConst.WIZARD_NAMES[Math.floor(Math.random() * window.utilConst.WIZARD_NAMES.length)] + ' ' + window.utilConst.WIZARD_LASTNAMES[Math.floor(Math.random() * window.utilConst.WIZARD_LASTNAMES.length)];
    randomDataWizard.coatColor = window.utilConst.COAT_COLORS[Math.floor(Math.random() * window.utilConst.COAT_COLORS.length)];
    randomDataWizard.eyesColor = window.utilConst.EYES_COLORS[Math.floor(Math.random() * window.utilConst.EYES_COLORS.length)];

    return randomDataWizard;
  };

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var fillBlockWizards = function () {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < 4; i++) {
      wizardsData[i] = getRandomData(wizardsData);
      fragment.appendChild(renderWizard(wizardsData[i]));
    }
    similarListElement.appendChild(fragment);
  };

  window.setup = {
    fillBlockWizards: fillBlockWizards()
  };

  setupCoatColor.addEventListener('click', function () {
    for (var i = 0; i < window.utilConst.COAT_COLORS.length; i++) {
      setupCoatColor.style.fill = window.utilConst.COAT_COLORS[Math.floor(Math.random() * window.utilConst.COAT_COLORS.length)];
    }
    inpCoatColor.value = setupCoatColor.style.fill;
  });
  setupWizardEyes.addEventListener('click', function () {
    for (var i = 0; i < window.utilConst.EYES_COLORS.length; i++) {
      setupWizardEyes.style.fill = window.utilConst.EYES_COLORS[Math.floor(Math.random() * window.utilConst.EYES_COLORS.length)];
    }
    inpEyesColor.value = setupWizardEyes.style.fill;
  });

  var count = 1;
  setupFireball.addEventListener('click', function () {
    setupFireball.style.backgroundColor = window.utilConst.FIREBALL_COLORS[count];
    inpFireballColor.value = window.utilConst.FIREBALL_COLORS[count];
    count += 1;
    if (count >= 5) {
      count = 0;
    }
  });
})();

