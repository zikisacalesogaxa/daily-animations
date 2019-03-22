blue = document.querySelector('.blue-g');
red = document.querySelector('.red-g');

blue.classList.add('animate');
red.classList.add('animate');

setInterval(() => {
    red.classList.remove('animate');
    setTimeout(() => {
        red.classList.add('animate');
    }, 1000);
}, 2000);

setInterval(() => {
    blue.classList.remove('animate');
    setTimeout(() => {
        blue.classList.add('animate');
    }, 500);
}, 1000);

