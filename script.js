const btnYes = document.getElementById('btn-yes');
var btnNo = document.getElementById('btn-no');

btnNo.addEventListener('mouseover', () => {
    const moveTop = (Math.random() * window.innerHeight) % (window.innerHeight - btnNo.offsetHeight);
    const moveLeft = (Math.random() * 10 * window.innerWidth) % (window.innerWidth - btnNo.offsetWidth);

    btnNo.style.top = moveTop + 'px';
    btnNo.style.left = moveLeft + 'px';

    btnYes.style.display = 'block';
});