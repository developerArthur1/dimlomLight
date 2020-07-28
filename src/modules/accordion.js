'use strict';

const accordion = (accHead, accBody) => {
    document.addEventListener('click', (event) => {
        event.preventDefault();

        if (event.target.closest('.panel-heading'))
        {
            const accordionContents = document.querySelectorAll(`${accBody}`),
                  thisParent = event.target.closest('.panel'),
                  thisBody = thisParent.querySelector(`${accBody}`),
                  parentBody = thisBody.parentNode;


            if (thisBody.style.maxHeight) {
                thisBody.style.maxHeight = null;
                thisBody.classList.add('collapse');
                parentBody.classList.add('collapse');
            }
            else
            {
                thisBody.style.maxHeight = '1000px';
                thisBody.classList.remove('collapse');
                parentBody.classList.remove('collapse');
            }

            accordionContents.forEach(itemCon => {
                if (itemCon != thisBody)
                {
                    const thisParent = itemCon.parentNode;
                    thisParent.classList.remove('in');
                    thisParent.classList.add('collapse');
                    itemCon.style.maxHeight = null;
                }
            });
        }
        else if (event.target.closest('.construct-btn') && !event.target.classList.contains('call-btn'))
        {
            const target = event.target.closest('.construct-btn'),
                  href = target.getAttribute('href').substring(1),
                  nextBlock = document.getElementById(href);

            function hideThisAccord () {
                const thisParent = target.closest('.panel'),
                      thisBody = thisParent.querySelector(`${accBody}`),
                      parentBody = thisBody.parentNode;

                thisBody.style.maxHeight = null;
                thisBody.classList.add('collapse');
                parentBody.classList.add('collapse');
            }

            function showNextAccord () {
                const thisBody = nextBlock.querySelector(`${accBody}`),
                      parentBody = thisBody.parentNode;

                      thisBody.style.maxHeight = '1000px';
                      thisBody.classList.remove('collapse');
                      parentBody.classList.remove('collapse');
            }

            hideThisAccord();
            showNextAccord();
        }
    });
};    

export default accordion;




// document.addEventListener('DOMContentLoaded', () => {
//     const accordions = document.querySelectorAll('.accordion');
//     const accordionContents = document.querySelectorAll('.accordion-content');


//     accordions.forEach((itemAcc) => {
//         itemAcc.addEventListener('click', (event) => {
//             event.preventDefault();
//             const context = itemAcc.nextElementSibling;
            

//             if (context.style.maxHeight) {
//                 context.style.maxHeight = null;
//                 itemAcc.classList.remove('is-open');
//             }
//             else
//             {
//                 context.style.maxHeight = 100 + 'px';
//                 itemAcc.classList.add('is-open');
//             }

//             accordionContents.forEach(itemCon => {
//                 if (itemCon != context)
//                 {
//                     itemCon.style.maxHeight = null;
//                 }
//             });

//             accordions.forEach(item => {
//                 if(item != itemAcc)
//                 {
//                     item.classList.remove('is-open');
//                 }
//             })
//         });
//     });
// });