const open_modal = document.querySelector('.section__new-block');
const close_modal = document.querySelector('.section__new-close');
const modal = document.querySelector('.section__new-open');


open_modal.addEventListener('click', openNews);
close_modal.addEventListener('click', closeNew)

function openNews (e) {
    modal.classList.toggle('active');
    };

    function closeNew (e) {
        modal.classList.remove('active'); 
    }