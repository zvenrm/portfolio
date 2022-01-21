const hamburger = document.querySelector('.header-burger');
const navigation = document.querySelector('.header-navigation');

function toggleMenu() {
    hamburger.classList.toggle('navigation-open');
    navigation.classList.toggle('navigation-open');
    document.body.classList.toggle('body-hidden');
}
hamburger.addEventListener('click', toggleMenu);
navigation.addEventListener('click', toggleMenu);


console.log('Вёрстка соответствует макету. Ширина экрана 768px 48/48\nНи на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки 15/15\nНа ширине экрана 768рх и меньше реализовано адаптивное меню 22/22');