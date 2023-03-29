let OM = document.querySelectorAll('.button'),
    lightBox = document.querySelector('#lightbox'),
    Ekam = document.querySelectorAll('.button');


function loadMyData() {

    lightBox.querySelector('h3').textContent = OM[this.dataset.member].headline;
    lightBox.querySelector('p').textContent = OM[this.dataset.member].bio;

}

function loadMyData() {
    lightBox.querySelector('h3').textContent = Ekam[this.dataset.member].headline;
    lightBox.querySelector('p').textContent = Ekam[this.dataset.member].bio;
}

Ekam.forEach(hero => hero.addEventListener('click',loadMyData)),
OM.forEach(hero => hero.addEventListener('click',loadMyData));