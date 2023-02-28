'use strict';

document.addEventListener('DOMContentLoaded', () => { // Сначала загружаем страницу полностью
    const movieDB = {
        movies: [
            "Лsган",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };  
    

    // СЕЛЕКТОРЫ
    const adv = document.querySelectorAll('.promo__adv'),
          genre = document.querySelector('.promo__genre'),
          poster = document.querySelector('.promo__bg'),
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');
    



        //  ЧЕКБОКС С ВВОДОМ 
        addForm.addEventListener('submit', (event) => {
          event.preventDefault();
          let newFilm = addInput.value;
          const favorite = checkbox.checked;

            if (newFilm) {

                if (newFilm.length > 21) {
                    newFilm = `${newFilm.substring(0, 22)}...`; // ЕСЛИ ДЛИННА СИМВОЛОВ БОЛЬШЕ ЧЕМ 21 ...
                }
                if (favorite) {
                    console.log('Добавлен')
                }
                movieDB.movies.push(newFilm);
                sortArr(movieDB.movies);


                createMovieList(movieDB.movies, movieList);
            }
          event.target.reset();

        })


        // СОРТИРОВКА 
          const sortArr = (arr) => {
            arr.sort();
          }
          




        // ИЗМЕНИЛИ ЖАНР МАРСИАНИНА И КАРТИНКУ БЭКА
        const makeChanges = () => {
          genre.textContent = 'Дрмма';
          poster.style.backgroundImage = 'url("img/bg.jpg")';
        };
        


        // УДАЛЯЕМ РЕКЛАМУ В adv
        const deleteAdv = (arr) => {
          arr.forEach(item => {
              item.remove();
          });
        }
    

        // CОЗДАЕМ ЛИСТ ФИЛЬМОВ
        function createMovieList (film, parent) {
            parent.innerHTML = '';
            sortArr(film);

            film.forEach((film, i) => {
                parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
                `;
            }); 

            document.querySelectorAll('.delete').forEach((btm, i) => {
                btm.addEventListener('click', () => {
                    btm.parentElement.remove(),
                    movieDB.movies.splice(i, 1)
                    createMovieList(film, parent)
                });
            });
        }
        


        // ВЫЗЫВВЕМ ФУНКЦИИ 
        deleteAdv(adv);
        makeChanges();
        createMovieList(movieDB.movies, movieList);
});
