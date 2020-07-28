'use strict';

import animationPopup from './animationPopup';

const popupDiscount = () => {
    document.addEventListener('click', (event) => {
        const popup = document.getElementById('calc-form');

        if (event.target.closest('.discount-btn'))
        {
            const popup = document.getElementById('calc-form'),
                statusMessage = popup.querySelector('#status-message');
                statusMessage.textContent = '';
            animationPopup('.popup-discount');
        }
    });
};

export default popupDiscount;