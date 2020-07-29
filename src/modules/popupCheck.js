'use strict';

import animationPopup from './animationPopup';
import sendForm from './sendForm';

const popupCheck = () => {
    const popup = document.querySelector('.popup-check');

    sendForm('#get-check-list', 2);

    document.addEventListener('click', (event) => {
        const target = event.target;

        if (target.matches('.check-btn'))
        {
            animationPopup('.popup-check');
        }
        else if (!target.closest('.capture-form') || target.matches('.popup-close'))
        {
            const form = document.querySelector('#get-check-list'),
                    statusMessage = form.querySelector('form');
                    if (statusMessage)
                    {
                        statusMessage.textContent = '';
                    }

                    popup.style.display = 'none';
        }
    });
};

export default popupCheck;