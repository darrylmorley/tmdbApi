const app = document.getElementById('root');
const h1 = document.createElement('h1');
const container = document.createElement('div');
const containerTwo = document.createElement('div');
const containerThree = document.createElement('div')
const form = document.createElement('form');
const searchBox = document.createElement('input');
const button = document.createElement('button');

const search = 'https://api.themoviedb.org/3/search/movie?api_key=56f3661bc1edc4010f658288d68ed496&query=';

app.appendChild(container);
app.appendChild(containerTwo);
app.appendChild(containerThree);


container.setAttribute('class', 'container center');
container.appendChild(h1);

containerTwo.setAttribute('class', 'container center');
containerTwo.appendChild(form);

containerThree.setAttribute('class', 'containerThree center')

form.setAttribute('class', 'center');
form.appendChild(searchBox);
form.appendChild(button);

searchBox.setAttribute('size', '100');
searchBox.setAttribute('placeholder', ' Search');
searchBox.setAttribute('class', 'searchBox');
searchBox.id = 'searchBox';
searchBox.focus();

h1.textContent = 'TMDB API Movie Search';
button.textContent = 'Search';

button.setAttribute('type', 'submit');
button.addEventListener('click', userInput, false);

function userInput(e) {
    e.preventDefault()
    let searchQ = document.getElementById('searchBox').value;
        searchQ.replace('', '+')
        fetch(search + searchQ)
        .then((response) => response.json())
        .then(function(data) {
            console.log(data);
            data.results.forEach(results => {
                
                const card = document.createElement('div');
                card.setAttribute('class', 'card');

                const h2 = document.createElement('h2');
                h2.textContent = results.title;

                const p = document.createElement('p');
                p.textContent = results.overview;

                const rating = document.createElement('p');
                rating.textContent = 'Rating: ' + results.vote_average;

                containerThree.appendChild(card);
                card.appendChild(h2);
                card.appendChild(p);
                card.appendChild(rating);
                })
        }).catch(function(error) {
        console.log(error);
        })
    }; 


