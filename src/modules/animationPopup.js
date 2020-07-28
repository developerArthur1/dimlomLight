'use strict';

const animationPopup = (selector, typeOfDisplay = 'block', speed = 0.01) => {
    const elem = document.querySelector(selector);
    let opacity = 0;

    elem.style.display = `${typeOfDisplay}`;
    elem.style.opacity = 0;

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
};

export default animationPopup;