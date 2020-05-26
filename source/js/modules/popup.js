'use strict';

var popup =  {
  $openBtn: $('.test-section__button'),
  $popup: $('.popup'),
  $overlay: $('.popup-overlay'),
  $closeBtn: $('.contribution-form__btn_cancel'),

  onOpenBtnClick: () => {
    popup.$popup.show().addClass('open-popup').removeClass('close-popup');
    popup.$overlay.show().addClass('open-popup').removeClass('close-popup');
    setTimeout(() => {
      popup.$popup.css('opacity', '1');
      popup.$overlay.css('opacity', '1');
    }, 300);
  },

  onCloseBtnClick: () => {
    popup.$popup.addClass('close-popup').removeClass('open-popup');
    popup.$overlay.show().addClass('close-popup').removeClass('open-popup');
    setTimeout(() => {
      popup.$popup.css('opacity', '').hide();
      popup.$overlay.css('opacity', '').hide();
    }, 300);
  },

  setListeners: () => {
    popup.$openBtn.click(popup.onOpenBtnClick);
    popup.$closeBtn.click(popup.onCloseBtnClick);
    popup.$overlay.on('mousedown', popup.onCloseBtnClick);
  }
};

export default popup;
