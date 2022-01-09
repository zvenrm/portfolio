const hamburger = document.querySelector('.header-burger');
const navigation = document.querySelector('.header-navigation');

function toggleMenu() {
    hamburger.classList.toggle('navigation-open');
    navigation.classList.toggle('navigation-open');
}
hamburger.addEventListener('click', toggleMenu);
navigation.addEventListener('click', toggleMenu);


console.log('Вёрстка валидная 10/10\nВёрстка семантическая 20/20\nВёрстка соответствует макету 48/48\nТребования к css 12/12\nИнтерактивность, реализуемая через css 20/20\nИтого 110/110');