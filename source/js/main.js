import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

const headerNavigation = document.querySelector('.header__navigation');
const headerButton = document.querySelector('.header__button');
// const wrapper = document.querySelector('.header__navigation-wrapper');
const links = Array.from(document.querySelectorAll('.header__list a'));

headerNavigation.classList.remove('header__navigation--nojs');


const toogle = () => {
  headerNavigation.classList.toggle('header__navigation--closed');
  headerNavigation.classList.toggle('header__navigation--opened');
  if (headerNavigation.classList.contains('header__navigation--opened')) {
    document.querySelector('body').style.overflow = 'hidden';
  } else {
    document.querySelector('body').style.overflow = 'scroll';
  }
};

const menuSwitch = () => {
  headerButton.addEventListener('click', toogle);

  links.forEach(function (e) {
    e.addEventListener('click', toogle);
  });
};

menuSwitch();

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
