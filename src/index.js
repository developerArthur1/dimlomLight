'use strict';

import additionalPhone from './modules/additionalPhone';
import menuBurger from './modules/menuBurger';
import scroll from './modules/scroll';
import popupFullList from './modules/popupFullList';
import maskPhone from './modules/maskPhone';
import sendForm from './modules/sendForm';

//cписок телефонов
additionalPhone();
// меню бургер
menuBurger();
//плавный скролл
scroll();
// модалка с полным списком услуг
popupFullList();
// маска номера телефона
maskPhone('.phone-number');
// отправка формы ajax
sendForm(1);
sendForm(2);
sendForm(3);
sendForm(4);
sendForm(5);

