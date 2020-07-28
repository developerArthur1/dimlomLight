'use strict';

import maskPhone from './modules/maskPhone';
import sendForm from './modules/sendForm';
import maskName from './modules/maskName';
import accordion from './modules/accordion';
import calc from './modules/calc';

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