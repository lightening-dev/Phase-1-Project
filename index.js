
    const clickHereDiv = document.getElementById('circle-text');

    let selectedGenre = "";
    let selectedMovieGenre = "";

    const compareResults = (selectedMovieGenre) => {

        console.log(selectedMovieGenre);
    }
//clickHereDiv.addEventListener('click', () => clickHereDiv.remove());

    let dropDownList = document.getElementById('DropdownList');

    let buttons = document.querySelectorAll("button");

    let categoryContainer = document.getElementById('categorContainer');

dropDownList.addEventListener('change', event => {
        event.preventDefault();
        let movieGenre = event.target.value;
        console.log(movieGenre)
        selectedMovieGenre = movieGenre;
        //console.log(selectedMovieGenre)
        return movieGenre}
    ); 
    const Horror = document.getElementById('horrorHeader');
    const Family = document.getElementById('familyHeader');
    const Comedy = document.getElementById('comedyHeader');
    const SciFi = document.getElementById('sci-fiHeader');
        
      let globalMovieData = [];

    async function fetchMovies() {
        const movieData = await fetch(`http://localhost:3000/movies`)
        .then(response  => response.json())
        .then(data => globalMovieData = data) 
        
        }
      fetchMovies();
        
        
       

function buttonActions(buttons) {
        buttons.forEach(button => button.addEventListener("click", event => { 
                  event.preventDefault();
                  selectedGenre = event.target.value;
                  if(selectedGenre === selectedMovieGenre) {
                       let image = document.createElement('img');
                       
                      
                       if(selectedGenre == "Horror") {
                            image.src = globalMovieData[2].image;
                            Horror.appendChild(image); 
                        }
                       else if (selectedGenre == "Family") {
                            image.src = globalMovieData[0].image;
                            Family.appendChild(image)
                       }
                       else if (selectedGenre == "Comedy") {
                            image.src = globalMovieData[3].image;
                            Comedy.appendChild(image)
                       }
                       else if (selectedGenre == "Sci-Fi") {
                            image.src = globalMovieData[1].image;
                            SciFi.appendChild(image);
                       }

                }
                  else alert("Wrong genre, try again!")
        }           )                )
    }

document.addEventListener('DOMContentLoaded', buttonActions(buttons));






