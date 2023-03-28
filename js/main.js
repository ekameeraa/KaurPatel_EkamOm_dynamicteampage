let OM = document.querySelectorAll('.button'),
    lightBox = document.querySelector('#lightbox')
;


function loadMyData() {

    lightBox.querySelector('h3').textContent = OM[this.dataset.member].headline;
    lightBox.querySelector('p').textContent = OM[this.dataset.member].bio;

}

OM.forEach(hero => hero.addEventListener('click',loadMyData));