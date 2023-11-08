const btn = document.getElementById('btn');
const xmark = document.getElementById('xmark');
const modal = document.querySelector('.section_modal');
btn.addEventListener('click', () => {
    modal.classList.add('block');
    modal.classList.remove('none');
});
xmark.addEventListener('click', () => {
    modal.classList.remove('block');
    modal.classList.add('none');
});
