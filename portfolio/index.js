import i18Obj from './translate.js'
//----------------------------------------------------

const hamburger = document.querySelector('.header-burger');
const navigation = document.querySelector('.header-navigation');

function toggleMenu() {
    hamburger.classList.toggle('navigation-open');
    navigation.classList.toggle('navigation-open');
}
hamburger.addEventListener('click', toggleMenu);
navigation.addEventListener('click', toggleMenu);

//------------------------К А Р Т И Н К И---------------------

//кэш картинок
const seasons = ['winter', 'spring', 'summer', 'autumn'];

seasons.forEach(elem => {
    function preloadSummerImages() {
        for(let i = 1; i <= 6; i++) {
            const img = new Image();
            img.src = `./assets/img/${elem}/${i}.jpg`;
        }
    }
    preloadSummerImages();
})

//изменение картинки по клику
const portButtons = document.querySelector('.portfolio-buttons')
const portImages = document.querySelectorAll('.portfolio-image')

function changeImage(event) {
    if(event.target.classList.contains('button')) {
        const dataSet = event.target.dataset.season
        portImages.forEach((img, index) => {
            img.src = `./assets/img/${dataSet}/${index+1}.jpg`
        })
    }
}

portButtons.addEventListener('click', (event) => {
    changeImage(event)
})

//цвет кнопок

const buttons = document.querySelectorAll('.button')


function changeClassActive(event) {
    buttons.forEach(el => {
        el.classList.remove('button-active')
    })
    event.target.classList.add('button-active')
}

buttons.forEach(elem => {
    elem.addEventListener('click', changeClassActive)
})

//-------------------К О Н Е Ц---К А Р Т И Н О К--------------

//-------------------П Е Р Е В О Д-----------------------

const languages = document.querySelectorAll('.lang')
const attributes = document.querySelectorAll('[data-]')

function changeLangActive(event) {
    languages.forEach(el => {
        el.classList.remove('language-active')
    })
    event.target.classList.add('language-active')
}


languages.forEach(elem => {
    elem.addEventListener('click', changeLangActive)
})



//--------------К О Н Е Ц---П Е Р Е В О Д А-------------------





console.log('Вёрстка соответствует макету. Ширина экрана 768px 48/48\nНи на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки 15/15\nНа ширине экрана 768рх и меньше реализовано адаптивное меню 22/22');