'use strict';

import animationPopup from './animationPopup';

const calc = () => {
    const sendForm = () => {
        const form = document.getElementById(`accordForm`),
              formPopup = document.getElementById('calc-form'),
              btnSubmit = form.querySelector('button'),
              statusMessage = document.createElement('form'),
              successMessage = `Успешно! С вами скоро свяжутся`,
              errorMessage = 'Что-то пошло не так',
              allCalcCheckbox = form.querySelectorAll('checkbox'),
              allCalcInput = form.querySelectorAll('input'),
              allCalcSelect = form.querySelectorAll('select');
              let preloader;
    
              const createPreloader = () => {
                preloader = document.createElement('div');
                preloader.className = 'sk-fading-circle d-none';
                preloader.innerHTML = `
                  <div class='sk-circle sk-circle-1'></div>
                  <div class='sk-circle sk-circle-2'></div>
                  <div class='sk-circle sk-circle-3'></div>
                  <div class='sk-circle sk-circle-4'></div>
                  <div class='sk-circle sk-circle-5'></div>
                  <div class='sk-circle sk-circle-6'></div>
                  <div class='sk-circle sk-circle-7'></div>
                  <div class='sk-circle sk-circle-8'></div>
                  <div class='sk-circle sk-circle-9'></div>
                  <div class='sk-circle sk-circle-10'></div>
                  <div class='sk-circle sk-circle-11'></div>
                  <div class='sk-circle sk-circle-12'></div>
              `;
            };
            createPreloader();
    
              function styleMessage () {
                  statusMessage.style.cssText = 'font-size: 2rem; color: black;';
              }
              styleMessage();
    
        const postData = (body, outputData, errorData) => {
            const request = new XMLHttpRequest();
                request.addEventListener('readystatechange', () => {
                    if (request.readyState !== 4)
                    {
                        return;
                    }
                    
                    if (request.status === 200)
                    {
                        outputData();
                    }
                    else
                    {
                        errorData(request.status);
                    }
                });
                request.open('POST', './server.php');
                request.setRequestHeader('Content-Type', 'application/json');
                request.send(JSON.stringify(body));
            };
    
            const submit = () => {
                event.preventDefault();
                statusMessage.textContent = '';
                formPopup.appendChild(statusMessage);
                formPopup.appendChild(preloader);
        
                const popupData = new FormData(formPopup);
                let body = {
                    calc: {

                    },
                    form: {

                    }
                };

                let i = 0;
                allCalcCheckbox.forEach((val) => {
                    body.calc[i] = val;
                    i++;
                });

                allCalcSelect.forEach((val) => {
                    body.calc[i] = val.value;
                    i++;
                });

                allCalcInput.forEach((val) => {
                    if (val.value.trim())
                    {
                        body.calc[i] = val.value;
                        i++;
                    }
                });

                popupData.forEach((val, key) => {
                    if (val.trim())
                    {
                        body.form[key] = val;
                    }
                });

                const isEmpty = (obj) => {
                    return Object.keys(obj).length;
                };
        
                const check = () => {
                        if (isEmpty(body.form) === 2)
                        {
                            preloader.classList.remove('d-none');
                            formPopup.reset();
                            postData(body, () => {preloader.classList.add('d-none'); statusMessage.textContent = successMessage;},
                            (error) => {statusMessage.textContent = errorMessage; preloader.classList.add('d-none'); console.log(error);});    
                        }
                        else if (isEmpty(body.form) === 1)
                        {
                            statusMessage.textContent = 'Вы заполнили не все поля, повторите попытку';
                        }
                        else if (!isEmpty(body.form))
                        {
                            statusMessage.textContent = 'Вы не заполнили поля, повторите попытку';
                        }
                };
                check();
        };
    
        formPopup.onclick = (event) => {
            const target = event.target;
            
            if (target.matches('button'))
            {
                submit();
            }
        };
    
    };


    const onoffswitchСheckbox = document.querySelector('.onoffswitch-checkbox'),
          diametr = document.querySelector('.diametr'),
          rings = document.querySelector('.rings'),
          secondDiametr = document.querySelector('.second-diametr'),
          secondRings = document.querySelector('.second-rings'),
          checkboxBottom = document.querySelector('.bottom'),
          calcResult = document.getElementById('calc-result'),
          popup = document.querySelector('.popup-discount'),
          accordionBlock = document.getElementById('accord'),
          accordInputs = accordionBlock.querySelectorAll('input');

    //   let checkboxValue,
    //       diametrValue,
    //       ringsValue,
    //       checkboxBottomValue,
    //       secondDiametrValue,
    //       secondRingsValue;

    document.addEventListener('click', (event) => {
        const target = event.target;
        event.preventDefault();

        if (target.closest('.call-btn'))
        {
            let sum = 0;

            const checkboxValue = onoffswitchСheckbox.checked ? 10000 : 15000;
            sum += checkboxValue;
            const diametrValue = diametr.selectedIndex === 1 ? sum * 20 / 100 : 0;
            sum += diametrValue;
            const ringsValue = rings.selectedIndex === 1 ? sum * 30 / 100 : rings.selectedIndex === 2 ? sum * 50 / 100 : 0;
            sum += ringsValue;
            const checkboxBottomValue = checkboxBottom.checked ? (onoffswitchСheckbox.checked ? 1000 : 2000) : 0;
            sum += checkboxBottomValue;

            const secondDiametrValue = onoffswitchСheckbox.checked ? 0: secondDiametr.selectedIndex === 2 ? sum * 30 / 100 : secondDiametr.selectedIndex === 3 ? sum * 50 / 100 : 0,
                  secondRingsValue = onoffswitchСheckbox.checked ? 0: secondRings.selectedIndex === 2 ? sum * 30 / 100 : secondDiametr.selectedIndex === 3 ? sum * 50 / 100 : 0;

            sum += secondDiametrValue + secondRingsValue;
            calcResult.value = `${sum} рублей`;

            animationPopup('.popup-discount', 'block');
            sendForm();
        }
        
        if ((!target.closest('.capture-form') || target.matches('.popup-close')) && !target.matches('.call-btn'))
        {
            popup.style.display = 'none';
        }
    });
};

export default calc;