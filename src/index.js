'use strict';

import maskPhone from './modules/maskPhone';
import sendForm from './modules/sendForm';
import maskName from './modules/maskName';
import accordion from './modules/accordion';
import calc from './modules/calc';
import popupCall from './modules/popupCall';
import btnMore from './modules/btnMore';
import popupDiscount from './modules/popupDiscount';
import popupCheck from './modules/popupCheck';
import popupConsult from './modules/popupConsult';

// маска номера телефона
maskPhone('.phone-user', '+_________');
// маска для поля "Ваше имя"
maskName();
// отправка формы ajax
sendForm('#form1', 1);
sendForm('#form2', 2);
// аккордеон
accordion('.panel-heading', '.panel-body');
// калькулятор
calc();
//модалка popup-call
popupCall();
// кнопка "Больше"
btnMore();
// открытие модалки при клике на кнопки 'заказать со скидкой' и 'узнать цену со скидкой'
popupDiscount();
// открытие модалки при клике на кнопку 'получить чек-лист и скидку'
popupCheck();
// открытие модалки при клике на кнопку 'получить консультацию'
popupConsult();