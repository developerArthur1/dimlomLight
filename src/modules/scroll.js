'use strict';
const scroll = () => {
    document.addEventListener('click', (event) => {
        event.preventDefault();
        let href,
            block;

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

            if (event.target.closest('.button-footer'))
            {
                href = document.querySelector('.button-footer').querySelector('a').getAttribute('href').substring(1);
                block = document.getElementById(href);
                closeMenu();
                block.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });  
            }
            else if (event.target.matches('.menu-link') && !event.target.classList.contains('full-list-services'))
            {
                href = event.target.getAttribute('href').substring(1),
                block = document.getElementById(href);
                closeMenu();
                block.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });  
            }
});
}

export default scroll;