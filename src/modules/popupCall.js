'use strict';

const popupCall = () => {
    const popup = document.querySelector('.call-btn');
    
    document.addEventListener('click', (event) => {
        const target = event.target;
        if (target.matches('.call-btn'))
        {
            popup.style.display = 'block';
        }
        else if (target.closest('.call-btn') || target.matches('.popup-close'))
        {
            popup.style.display = 'none';
        }
    });
};

export default popupCall;