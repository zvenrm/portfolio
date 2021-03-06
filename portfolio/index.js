import i18Obj from './translate.js'
//----------------------------------------------------
function getLocalStorage() {
    if(localStorage.getItem('lang')) {
        const lang = localStorage.getItem('lang');
        if (lang === 'ru'){
            const languages = document.querySelectorAll('.lang')
            languages.forEach(el => {
                el.classList.remove('language-active')
            })
            languages[1].classList.add('language-active')
            getTranslate(i18Obj.ru)
            document.querySelector('.hero-text').classList.toggle('hero-textru')
            document.querySelector('.skills').classList.toggle('skillsru')
            document.querySelector('.portfolio').classList.toggle('portfolioru')
        }
    }
    if (localStorage.getItem('theme')){
        const theme = localStorage.getItem('theme')
        if (theme === 'light'){
            const themeIcon = document.querySelector('.dark-icon')
            const itemsForTheme = ['.skills-container', '.portfolio-container', '.video-container', '.price-container']
            themeIcon.classList.toggle('light-icon')
            document.body.classList.toggle('light-body')
            itemsForTheme.forEach(elem => {
                document.querySelector(elem).classList.toggle('light-theme')
            })
            document.querySelectorAll('.section-title').forEach(elem => {
                elem.classList.toggle('title-light')
            })
            document.querySelectorAll('.button').forEach(elem => {
                elem.classList.toggle('button-light')
            })
            document.querySelector('.header-navigation').classList.toggle('navigation-light')
            document.querySelector('.header-burger').addEventListener('click', () => {
                document.querySelectorAll('.burger-line').forEach(elem => {
                    elem.classList.toggle('line-light')
                })
            })
        }
    }
}
window.addEventListener('load', getLocalStorage)


let lang;
if (localStorage.getItem('lang') === 'ru'){
    lang = 'ru'
}

let theme;
if (localStorage.getItem('theme') === 'light'){
    theme = 'light'
}

const hamburger = document.querySelector('.header-burger');
const navigation = document.querySelector('.header-navigation');

function toggleMenu() {
    hamburger.classList.toggle('navigation-open');
    navigation.classList.toggle('navigation-open');
    document.body.classList.toggle('body-hidden');
}

hamburger.addEventListener('click', toggleMenu);
navigation.addEventListener('click', toggleMenu);

//------------------------?? ?? ?? ?? ?? ?? ?? ??---------------------

//?????? ????????????????
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

//?????????????????? ???????????????? ???? ??????????
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

//???????? ????????????

const buttons = document.querySelectorAll('.button')


function changeClassActive(event) {
    buttons.forEach(el => {
        el.classList.remove('button-active')
    })
    event.target.classList.add('button-active')
    event.preventDefault;
    //reset animation
    event.target.classList.remove('animate');
    
    event.target.classList.add('animate');
    setTimeout(function(){
        event.target.classList.remove('animate');
    },700);
}

buttons.forEach(elem => {
    elem.addEventListener('click', changeClassActive)
})

const animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
        e.target.classList.remove('animate');
    },700);
};

document.querySelectorAll('.order-button').forEach(elem => {
    elem.addEventListener('click', animateButton)
})

//-------------------?? ?? ?? ?? ??---?? ?? ?? ?? ?? ?? ?? ??--------------

//-------------------?? ?? ?? ?? ?? ?? ??-----------------------

const languages = document.querySelectorAll('.lang')
const attributes = document.querySelectorAll('[data-i18n]')

function getTranslate(finalLang) {
    attributes.forEach(elem => {
        elem.textContent = finalLang[elem.dataset.i18n]
        if (elem.placeholder) {
            elem.placeholder = finalLang[elem.dataset.i18n]
            elem.textContent = ''
        }
    })
}

function changeLangActive(event) {
    languages.forEach(el => {
        el.classList.remove('language-active')
    })
    event.target.classList.add('language-active')
    if (event.target.textContent === 'en') {
        lang = 'en'
        getTranslate(i18Obj.en)
        document.querySelector('.hero-text').classList.toggle('hero-textru')
        document.querySelector('.skills').classList.toggle('skillsru')
        document.querySelector('.portfolio').classList.toggle('portfolioru')
        document.querySelectorAll('.price-text').forEach(el => {
            el.classList.remove('price-ru')
        })
    }
    else {
        lang = 'ru'
        getTranslate(i18Obj.ru)
        document.querySelector('.hero-text').classList.toggle('hero-textru')
        document.querySelector('.skills').classList.toggle('skillsru')
        document.querySelector('.portfolio').classList.toggle('portfolioru')
        document.querySelectorAll('.price-text').forEach(el => {
            el.classList.add('price-ru')
        })
        
    }
}

languages.forEach(elem => {
    elem.addEventListener('click', changeLangActive)
})


//--------------?? ?? ?? ?? ??---?? ?? ?? ?? ?? ?? ?? ??-------------------

//------------------?? ?? ?? ??--------------------------------

const themeIcon = document.querySelector('.dark-icon')
const itemsForTheme = ['.skills-container', '.portfolio-container', '.video-container', '.price-container']

function toggleTheme(e) {
    if (!e.target.classList.contains('light-icon')){
        theme = 'light'
    }
    else {
        theme = 'dark'
    }
    themeIcon.classList.toggle('light-icon')
    document.body.classList.toggle('light-body')
    itemsForTheme.forEach(elem => {
        document.querySelector(elem).classList.toggle('light-theme')
    })
    document.querySelectorAll('.section-title').forEach(elem => {
        elem.classList.toggle('title-light')
    })
    document.querySelectorAll('.button').forEach(elem => {
        elem.classList.toggle('button-light')
    })
    document.querySelector('.header-navigation').classList.toggle('navigation-light')
    document.querySelector('.header-burger').addEventListener('click', () => {
        document.querySelectorAll('.burger-line').forEach(elem => {
            elem.classList.toggle('line-light')
        })
    })
}

themeIcon.addEventListener('click', toggleTheme)

function burgerLight (){
    if (themeIcon.classList.contains('light-icon')){
        document.querySelectorAll('.burger-line').forEach(elem => {
            elem.classList.toggle('line-light')
        })
    }
}

document.querySelector('.header-navigation').addEventListener('click', burgerLight)


//--------------------?? ?? ?? ?? ??---?? ?? ?? ??------------------
function setLocalStorage() {
    localStorage.setItem('lang', lang);
    localStorage.setItem('theme', theme);
}
window.addEventListener('beforeunload', setLocalStorage)

console.log('?????????? ?????????????????????? ?? ???????????? portfolio  25 / 25 \n?????????????? ???????????????? ???? ?????? ?????????? 25 /25 \n???????????????????????? ?????????????? ?? ???????????? ???????? 25 / 25 \n???????????????????????????? ????????????????????: ?????????????????? ?????????????????????????? ???????? ?????????????????????? ???????????????? ?? ?????????????? ?????? ???????????? ???????? ?????????????????????? ?????? ???????????????????????? ???????????????? 5 / 5 \n???????????????????????????? ????????????????????: ?????????????? ?????????????? ?????? ???????????? ?????? ?????????????????? ??/?????? ?????????? 5 / 5')