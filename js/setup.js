'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LASTNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var wizardsData = [];

var getRandomData = function (randomDataWizard) {
  randomDataWizard = {};
  randomDataWizard.name = WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)] + ' ' + WIZARD_LASTNAMES[Math.floor(Math.random() * WIZARD_LASTNAMES.length)];
  randomDataWizard.coatColor = COAT_COLORS[Math.floor(Math.random() * COAT_COLORS.length)];
  randomDataWizard.eyesColor = EYES_COLORS[Math.floor(Math.random() * EYES_COLORS.length)];

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
  }
  for (var j = 0; j < wizardsData.length; j++) {
    fragment.appendChild(renderWizard(wizardsData[j]));
  }
  similarListElement.appendChild(fragment);
};

fillBlockWizards();
userDialog.querySelector('.setup-similar').classList.remove('hidden');
