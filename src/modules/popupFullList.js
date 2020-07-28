'use strict';

import animationPopup from './animationPopup';

const popupFullList = () => {
    const closeMenu = () => {
        const popupDialogMenu = document.querySelector('.popup-dialog-menu');
        if (document.documentElement.clientWidth <= 576)
        {
            popupDialogMenu.style.transform = 'translateY(-645px)';
        }
        else
        {
            popupDialogMenu.style.transform = 'translate3d(645px,0,0)';
        }    
    }

    const popup = document.querySelector('.popup-repair-types');
    let isOpen = false;
    
  document.addEventListener('click', (event) => {
      if (event.target.matches('.close') || !event.target.closest('.popup-dialog-repair-types') && isOpen === true)
      {
          popup.style.visibility = 'hidden';
          popup.style.opacity = 0;
          isOpen = false;
      }

      if (event.target.matches('.full-list-services'))
      {
          popup.style.visibility = 'visible';
          animationPopup('.popup-repair-types', 'flex');
          closeMenu();
          isOpen = true;
      }

  });

    }


export default popupFullList;