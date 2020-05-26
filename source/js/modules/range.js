'use strict';

var range = {
  MAX_VALUE: 30000,
  DIFFERENCE: 223,

  $rangeButton: $('.range__range-button'),
  $rangeInput: $('.contribution-form__rate-input'),
  $rangeMinus: $('.range__additional-button_minus'),
  $rangePlus: $('.range__additional-button_plus'),
  $rangeArea: $('.range__area'),
  $minBtn: $('.contribution-form__btn_min'),
  $maxBtn: $('.contribution-form__btn_max'),

  LocationParams: {
    minX: Math.floor($('.range__area').offset().left - $('.range__area').outerWidth() - $('.popup').offset().left - $('.range__range-button').outerWidth() / 2 + $('.range__area').outerWidth() + 10),
    maxX: Math.floor($('.range__area').offset().left - $('.popup').offset().left - $('.range__range-button').outerWidth() + $('.range__area').outerWidth() + 10),
    difference: () => {
      console.log(($('.range__range-button').offset().left - range.LocationParams.maxX) - $('.popup').offset().left - 28);
      return ($('.range__range-button').offset().left - range.LocationParams.maxX) - $('.popup').offset().left - 28
    }
  },

  onRangeMousedown: (evt) => {
    evt.preventDefault();

    let startCoords = {
      x: evt.clientX
    };

    const onRangeMousemove = function (mouseMoveEvt) {
      mouseMoveEvt.preventDefault();

      let shift = {
        x: startCoords.x - mouseMoveEvt.clientX
      };

      startCoords = {
        x: mouseMoveEvt.clientX
      };

      var currentRangePosition = {
        x: $(range.$rangeButton)[0].offsetLeft - shift.x
      };

      switch (true) {
        case currentRangePosition.x < range.LocationParams.minX:
          currentRangePosition.x = range.LocationParams.minX;
          break;
        case currentRangePosition.x > range.LocationParams.maxX:
          currentRangePosition.x = range.LocationParams.maxX;
          break;
      }

      $(range.$rangeButton)[0].style.left = Math.round(currentRangePosition.x) + 'px';

      range.$rangeInput.val(Math.ceil((range.MAX_VALUE / range.DIFFERENCE) * range.LocationParams.difference()));
    };

    const onRangeMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onRangeMousemove);
      document.removeEventListener('mouseup', onRangeMouseUp);
    };

    document.addEventListener('mousemove', onRangeMousemove);
    document.addEventListener('mouseup', onRangeMouseUp);
  },

  onRangeInput: () => {
    if (range.$rangeInput.val() > range.MAX_VALUE) {
      range.$rangeInput.val(range.MAX_VALUE)
    }

    $(range.$rangeButton)[0].style.left = Math.ceil((range.DIFFERENCE / range.MAX_VALUE) * range.$rangeInput.val() - 8) + 'px';
  },

  setStartRange: () => {
    range.onRangeInput();
  },

  setListeners: () => {
    range.$rangeButton.on('mousedown', range.onRangeMousedown);
    range.$rangeInput.on('input', range.onRangeInput);
    range.$minBtn.click(() => {
      range.$rangeInput.val(0).trigger('input');
    });
    range.$maxBtn.click(() => {
      range.$rangeInput.val(range.MAX_VALUE).trigger('input');
    });
    range.$rangePlus.click(() => {
      if (range.$rangeInput.val() <= range.MAX_VALUE - 100) {
        const value = Number(range.$rangeInput.val());
        range.$rangeInput.val(value + 100).trigger('input');
      } else {
        range.$rangeInput.val(range.MAX_VALUE);
      }
    });
    range.$rangeMinus.click(() => {
      if (range.$rangeInput.val() >= 100) {
        const value = Number(range.$rangeInput.val());
        range.$rangeInput.val(value - 100).trigger('input');
      } else {
        range.$rangeInput.val(0);
      }
    });
  }
};

export default range;
