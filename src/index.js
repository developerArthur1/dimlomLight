'use strict';

import maskPhone from './modules/maskPhone';
import sendForm from './modules/sendForm';
import maskName from './modules/maskName';

// маска номера телефона
maskPhone('.phone-user', '+_________');
// маска для поля "Ваше имя"
maskName();
// отправка формы ajax
sendForm(1);
sendForm(2);
sendForm(3);