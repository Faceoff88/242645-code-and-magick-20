'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LASTNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var userDialog = document.querySelector('.setup');
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
    fragment.appendChild(renderWizard(wizardsData[i]));
  }
  similarListElement.appendChild(fragment);
};

fillBlockWizards();
userDialog.querySelector('.setup-similar').classList.remove('hidden');

var MIN_NAME_LENGTH = 2;
var MAX_NAME_LENGTH = 25;
var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = document.querySelector('.setup-close');
var userNameInput = document.querySelector('.setup-user-name');
var setupCoatColor = document.querySelector('.setup-wizard .wizard-coat');
var setupWizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var setupFireball = document.querySelector('.setup-fireball-wrap');
var inpCoatColor = document.querySelector('input[name=coat-color]');
var inpEyesColor = document.querySelector('input[name=eyes-color]');
var inpFireballColor = document.querySelector('input[name=fireball-color]');


var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape' && userNameInput !== document.activeElement) {
    evt.preventDefault();
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function () {
  var valueLength = userNameInput.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    userNameInput.setCustomValidity('Ещё ' + (MIN_NAME_LENGTH - valueLength) + ' симв.');
  } else if (valueLength > MAX_NAME_LENGTH) {
    userNameInput.setCustomValidity('Удалите лишние ' + (valueLength - MIN_NAME_LENGTH) + ' симв.');
  } else {
    userNameInput.setCustomValidity('');
  }
});

setupCoatColor.addEventListener('click', function () {
  for (var i = 0; i < COAT_COLORS.length; i++) {
    setupCoatColor.style.fill = COAT_COLORS[Math.floor(Math.random() * COAT_COLORS.length)];
  }
  inpCoatColor.value = setupCoatColor.style.fill;
});
setupWizardEyes.addEventListener('click', function () {
  for (var i = 0; i < EYES_COLORS.length; i++) {
    setupWizardEyes.style.fill = EYES_COLORS[Math.floor(Math.random() * EYES_COLORS.length)];
  }
  inpEyesColor.value = setupWizardEyes.style.fill;
});

var count = 1;
setupFireball.addEventListener('click', function () {
  setupFireball.style.backgroundColor = FIREBALL_COLORS[count];
  inpFireballColor.value = FIREBALL_COLORS[count];
  count += 1;
  if (count >= 5) {
    count = 0;
  }
});

