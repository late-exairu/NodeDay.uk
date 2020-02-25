/* eslint-disable */

import { CLASSES } from './_classes';

export default function header() {
  const burger = $(CLASSES.burger);
  const header = $(CLASSES.header);

  function open() {
    $(burger).addClass(CLASSES.active);// eslint-disable-line no-console
    header.addClass(CLASSES.active);// eslint-disable-line no-console
  }

  function close() {
    $(burger).removeClass(CLASSES.active);// eslint-disable-line no-console
    header.removeClass(CLASSES.active);// eslint-disable-line no-console
  }

  burger.on('click', function() {
    if (header.hasClass(CLASSES.active)) {
      close();
    } else {
      open();
    }
  });

  $(window).on('scroll', () => {
    if (window.pageYOffset > 53) {
      header.addClass(CLASSES.sticked);
    } else {
      header.removeClass(CLASSES.sticked);
    }
  });

  console.log('asdasd');
}
