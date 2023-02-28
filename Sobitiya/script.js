const btn = document.querySelector('button'),
      overlay = document.querySelector('.overlay')

// btn.onclick = function () {
//     alert('helo');
// };


let i = 0;

const del = (event) => {
    console.log(event.Target);
    // i ++;
    // if (i == 1) {
    //     btn.removeEventListener('click', del);
    // }
}; 

// btn.addEventListener('click', del);
// overlay.addEventListener('click', del);


btns.forEach(btn => {
    btn.addEventListener('click', del);
});

const link = document.querySelector('a');
link.addEventListener('click', function(even) {
    even.preventDefault();
    alert('s')
})


