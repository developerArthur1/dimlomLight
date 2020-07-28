'use strict';

import maskPhone from './modules/maskPhone';
import sendForm from './modules/sendForm';
import maskName from './modules/maskName';
import accordion from './modules/accordion';
import calc from './modules/calc';
import popupCall from './modules/popupCall';
import btnMore from './modules/btnMore';

// маска номера телефона
maskPhone('.phone-user', '+_________');
// маска для поля "Ваше имя"
maskName();
// отправка формы ajax
sendForm(1);
sendForm(2);
sendForm(3);
// аккордеон
accordion('.panel-heading', '.panel-body');
// калькулятор
calc();
//модалка popup-call
popupCall();
// кнопка "Больше"
btnMore();