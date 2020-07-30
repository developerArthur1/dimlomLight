'use strict';

import animationPopup from "./animationPopup";


const popupConsult = () => {

    const sendForm = (selector, elemCount) => {
        const form = document.querySelector(`${selector}`),
              btnSubmit = form.querySelector('button'),
              statusMessage = document.createElement('form'),
              successMessage = 'Успешно! С вами скоро свяжутся',
              errorMessage = 'Что-то пошло не так';
    
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
                statusMessage.textContent = '';
                form.appendChild(statusMessage);
                form.appendChild(preloader);
        
                const formData = new FormData(form),
                      input = document.getElementById('input-quest');
                let body = {},
                i = 0;

                body[i] = input.value.trim();
                i++;

                formData.forEach((val) => {
                    if (val.trim())
                    {
                        body[i] = val;
                        i++;
                    }
                });
        
                const isEmpty = (obj) => {
                    return Object.keys(obj).length;
                };
        
                const check = () => {
                    if (elemCount === 3)
                    {
                        if (isEmpty(body) === 3)
                        {
                            preloader.classList.remove('d-none');
                            form.reset();
                            input.value = '';
                            postData(body, () => {preloader.classList.add('d-none'); statusMessage.textContent = successMessage;},
                            (error) => {statusMessage.textContent = errorMessage; preloader.classList.add('d-none'); console.log(error);});    
                        }
                        else if (isEmpty(body) === 2)
                        {
                            statusMessage.textContent = 'Вы заполнили не все поля, повторите попытку';
                        }
                        else if (isEmpty(body) === 1)
                        {
                            statusMessage.textContent = 'Вы не заполнили поля, повторите попытку';
                        }
                    }
                    else
                    {
                        if (isEmpty(body))
                        {
                            preloader.classList.remove('d-none');
                            form.reset();
                            postData(body, () => {preloader.classList.add('d-none'); statusMessage.textContent = successMessage;},
                            (error) => {statusMessage.textContent = errorMessage; preloader.classList.add('d-none'); console.log(error);});    
                        }
                        else if (!isEmpty(body))
                        {
                            statusMessage.textContent = 'Вы не ввели данные';
                        }
                    };    
                };
                check();
        };
    
        form.addEventListener('click', (event) => {
            const target = event.target;
            
            if (target.matches('button'))
            {
                submit();
            }
        });
    };
    sendForm('#consult', 3);

    const popup = document.querySelector('.popup-consultation'),
          input = document.getElementById('input-quest'),
          formQuest = document.getElementById('form3'),
          statusMessage = document.createElement('form');

          statusMessage.id = "question-status-message";
          statusMessage.textContent = 'Вы забыли ввести вопрос, повторите попытку';
          statusMessage.style.cssText = 'font-size: 2rem; color: white;';

    
    document.addEventListener('click', (event) => {
        event.preventDefault();
        const target = event.target;
        
        if (target.matches('.director-btn') && input.value.trim())
        {
            const statusMessage = formQuest.querySelector('#question-status-message');
            if (statusMessage)
            {
                statusMessage.remove();
            }
            animationPopup('.popup-consultation');
        }
        else if (target.matches('.director-btn') && !input.value.trim())
        {
            input.value = '';
            formQuest.appendChild(statusMessage);
        }

        if ((!target.closest('#consult') || target.matches('.popup-close')) && !target.closest('.director-btn'))
        {
            const form = document.querySelector('#consult'),
                    statusMessage = form.querySelector('form');
                    if (statusMessage)
                    {
                        statusMessage.textContent = '';
                    }

            popup.style.display = 'none';
        }
    });
};

export default popupConsult;