'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var GAP_COLUMN = 50;
var FONT_GAP = 15;
var BAR_MAX_HEIGHT = 150;
var barEnd = CLOUD_HEIGHT - GAP - FONT_GAP - GAP;
var barBegin = BAR_MAX_HEIGHT - barEnd;
var BAR_WIDTH = 40;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT MONO';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + FONT_GAP * 2);
  ctx.fillText('Список результатов:', CLOUD_X + GAP * 2, CLOUD_Y + FONT_GAP * 3);


  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + GAP_COLUMN + ((BAR_WIDTH + GAP_COLUMN) * i), CLOUD_Y + FONT_GAP + barEnd);
    ctx.fillStyle = (players[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'hsl(240, ' + Math.floor(Math.random() * 100) + '%, 50%)';
    ctx.fillRect(CLOUD_X + GAP_COLUMN + ((BAR_WIDTH + GAP_COLUMN) * i), barEnd, BAR_WIDTH, CLOUD_Y - (barBegin + (barEnd * times[i]) / maxTime));
    ctx.fillStyle = '#000';
    ctx.fillText(Math.floor(times[i]), CLOUD_X + GAP_COLUMN + ((BAR_WIDTH + GAP_COLUMN) * i), barEnd - (barBegin + (barEnd * times[i]) / maxTime));
  }
};
