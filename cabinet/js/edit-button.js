// кнопка редагування сторінки
document.querySelectorAll('.collapse').forEach(element => {
    element.addEventListener('click', function(){
        this.classList.toggle('collapsed');

        // hidden area show/hide
        this.parentNode.querySelector('.hidden-area').classList.toggle('show');

    });
});