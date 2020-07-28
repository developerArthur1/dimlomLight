'use strict';

const maskName = (selector) => {
    document.addEventListener('input', () => {
        const target = event.target;
    
        if (target.placeholder === 'Ваше имя')
        {
            target.value = target.value.replace(/[^а-яА-ЯёЁ\s]+$/, '');
        }
    });    
};

export default maskName;