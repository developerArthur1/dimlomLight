'use strict';

const btnMore = () => {
    const blockStocks = document.getElementById('block-stocks'),
          hiddenBlocks = blockStocks.querySelectorAll('.hidden'),
          btn = blockStocks.querySelector('.add-sentence-btn');

    document.addEventListener('click', (event) => {
        if (event.target.closest('.add-sentence-btn'))
        {
            btn.style.display = 'none';
            hiddenBlocks.forEach((item) => {
                item.classList.remove('hidden');
            });
        }
    });
};

export default btnMore;