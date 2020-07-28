'use strict';

const menuBurger = () => {
    const menuIcon = document.querySelector('.menu__icon'),
          popupDialogMenu = document.querySelector('.popup-dialog-menu');

          let menuisOpen = false;


    document.addEventListener('click', (event) => {
        if (event.target.matches('.close-menu') || (!event.target.closest('.row') && menuisOpen === true))
        {
            if (document.documentElement.clientWidth <= 576)
            {
                popupDialogMenu.style.transform = 'translateY(-645px)';
            }
            else
            {
                popupDialogMenu.style.transform = 'translate3d(645px,0,0)';
            }
        }

        if (event.target.matches('.menu__icon'))
        {
            if (document.documentElement.clientWidth <= 576)
            {
                popupDialogMenu.style.transform = 'translate3d(0px,0,0)';
                menuisOpen = true;
            }
            else
            {
                popupDialogMenu.style.transform = 'translate3d(0px,0,0)';
                menuisOpen = true;
            }    
        }
    });
};

export default menuBurger;