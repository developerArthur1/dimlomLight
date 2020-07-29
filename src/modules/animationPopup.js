'use strict';

const animationPopup = (selector, typeOfDisplay = 'block', speed = 0.01) => {
    if (selector)
    {
        const elem = document.querySelector(selector);
        let opacity = 0;
    
        elem.style.opacity = 0;
        elem.style.display = `${typeOfDisplay}`;
    
        let interval = setInterval(() => {
            if (opacity <= 1)
            {
                opacity += speed; 
                elem.style.opacity = opacity;        
            }
            else
            {
                clearInterval(interval);
            }
        }, 1);    
    }
    else
    {
        console.error('You forgot to pass the selector to the parameters of the animationPopup function');
    }
};

export default animationPopup;