const toggle = document.querySelector('#toggle');
const carouselSlide = document.querySelector('.carousel-slide');
const carouselDivs = document.querySelectorAll('.carousel-slide div');
const dot = document.querySelectorAll('#pagination ul li a');

const size = carouselDivs[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * toggle.value) + 'px)';

///////////////
// listeners //
///////////////

// карусель по слайдеру
toggle.addEventListener('change', () => {
    carouselSlide.style.transition = 'transform .65s ease-in-out';
    carouselSlide.style.transform = 'translateX(' + (-size * toggle.value) + 'px)';
    // if (toggle.value )
});

dot.forEach(item => {
    item.addEventListener('touch', function() {
        
    })
})

// прогресс слайдера
toggle.addEventListener('touchmove', () => {
    let color = 'linear-gradient(90deg, #fff ' 
    + toggle.value * 50 + '%, #435063 ' 
    + toggle.value * 50 +'%)';
    toggle.style.background = color;
});

toggle.addEventListener('touchstart', () => { 
    toggle.step = 0.01;
});

toggle.addEventListener('touchend', () => {
    let value = Math.round(toggle.value) * 50;
    let color = 'linear-gradient(90deg, #fff ' + value + '%, #435063 ' + value +'%)';
    toggle.style.background = color;
    toggle.step = 1;
});

//TODO:
//сделать анимацию тогла
//сделать анимацию
//эффект сдвига при скролле
//сделать боковую пагинацию


//флекс ордер
//медиазапросы
//смена порядка


//уменьшить сенсу до 3
