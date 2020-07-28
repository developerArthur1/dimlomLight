const additionalPhone = () => {
    'use strict';

    const headerContactsArrow = document.querySelector('.header-contacts__arrow'),
          accordeonPhone = document.querySelectorAll('.header-contacts__phone-number')[1],
          accord = document.querySelector('.header-contacts__phone-number-accord');

        headerContactsArrow.addEventListener('click', () => {
            if (accord.style.position === 'static')
            {
                accordeonPhone.style.opacity = '0';
                accord.style.position = 'absolute';
            }
            else
            {
                accordeonPhone.style.opacity = '1';
                accord.style.position = 'static';
            }
        });
};

export default additionalPhone;
