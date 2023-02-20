'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHearts = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');


box.style.backgroundColor = 'black';
box.style.width = '300px';
box.style.cssText = 'background-color: blue; width: 500px'
btns[1].style.borderRadius = '100px'
circles[0].style.backgroundColor = 'red'
// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue'
// }
hearts.forEach(item => {
    item.style.backgroundColor = 'red'
});
const div = document.createElement('div');
// const text = document.createTextNode('тут был я')
// div.classList.add('black');
// document.body.append(div);
wrapper.prepend(div)
// hearts[2].after(div)
// circles[0].remove();
// wrapper.insertBefore(div, circles[1])
// hearts[1].replaceWith(circles[1]);
div.innerHTML = '<h1>Hello World LOX</h1>';
// div.textContent = 'Helo lox'
div.insertAdjacentHTML('afterend', <h2>Hello</h2>);