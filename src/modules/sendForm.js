'use strict';

const sendForm = (index) => {
    const form = document.getElementById(`feedback${index}`),
          btnSubmit = form.querySelector('button'),
          checkbox = form.querySelector('.checkbox__label'),
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
            if (index === 1 || index === 3)
            {
              statusMessage.style.cssText = 'font-size: 1rem; color: black;';
            }
            else
            {
              statusMessage.style.cssText = 'font-size: 2rem; color: white;';
            }  
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
            form.appendChild(statusMessage);
            form.appendChild(preloader);
    
            const formData = new FormData(form);
            let body = {};
    
            formData.forEach((val, key) => {
                if (val.trim())
                {
                    body[key] = val;
                }
            });
    
            const isEmpty = (obj) => {
                return Object.keys(obj).length;
            };
    
            const check = () => {
                if (index !== 1 && index !== 3)
                {
                    if (isEmpty(body) === 2 && checkbox.classList.contains('active'))
                    {
                        preloader.classList.remove('d-none');
                        checkbox.classList.remove('active');
                        form.reset();
                        postData(body, () => {preloader.classList.add('d-none'); statusMessage.textContent = successMessage;},
                        (error) => {statusMessage.textContent = errorMessage; preloader.classList.add('d-none'); console.log(error);});    
                    }
                    else if (isEmpty(body) === 1 && !checkbox.classList.contains('active'))
                    {
                        statusMessage.textContent = 'Вы заполнили не все поля и не поставили галочку';
                    }
                    else if (isEmpty(body) === 1 && checkbox.classList.contains('active'))
                    {
                        statusMessage.textContent = 'Вы заполнили не все поля, повторите попытку';
                    }
                    else if (isEmpty(body) && !checkbox.classList.contains('active'))
                    {
                        statusMessage.textContent = 'Вы не поставили галочку, повторите попытку';
                    }
                    else if (!isEmpty(body) && checkbox.classList.contains('active'))
                    {
                        statusMessage.textContent = 'Вы не заполнили поля, повторите попытку';
                    }
                    else if (!isEmpty(body) && !checkbox.classList.contains('active'))
                    {
                        statusMessage.textContent = 'Вы не заполнили поля и не поставили галочку, повторите попытку';
                    }
                }
                else
                {
                    if (isEmpty(body) && checkbox.classList.contains('active'))
                    {
                        preloader.classList.remove('d-none');
                        form.reset();
                        checkbox.classList.remove('active');
                        postData(body, () => {preloader.classList.add('d-none'); statusMessage.textContent = successMessage;},
                        (error) => {statusMessage.textContent = errorMessage; preloader.classList.add('d-none'); console.log(error);});    
                    }
                    else if (isEmpty(body) && !checkbox.classList.contains('active'))
                    {
                        statusMessage.textContent = 'Вы не поставили галочку';
                    }
                    else if (!isEmpty(body) && checkbox.classList.contains('active'))
                    {
                        statusMessage.textContent = 'Вы не ввели номер телефона';
                    }
                    else if (!isEmpty(body) && !checkbox.classList.contains('active'))
                    {
                        statusMessage.textContent = 'Вы не ввели номер телефона и не поставили галочку';
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

        if (target.matches('.checkbox__label'))
        {
            checkbox.classList.toggle('active');
        }
    });

};

export default sendForm;