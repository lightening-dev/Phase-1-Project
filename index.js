document.addEventListener('DOMContentLoaded', () => {
    
  
    let selectedGenre = "";
    let selectedMovieGenre = "";
    let movieName = "";
   
    let buttons = document.querySelectorAll("button");
    const select = document.getElementById('select')
    
    const Horror = document.getElementById('horrorHeader');
    const Family = document.getElementById('familyHeader');
    const Comedy = document.getElementById('comedyHeader');
    const SciFi = document.getElementById('sci-fiHeader');

    const HeaderContainer = [Horror, Family, Comedy, SciFi];

    let globalMovieData = [];

    select.addEventListener('change', event => {
        event.preventDefault();
         selectedMovieGenre = event.target.value;
        movieName = event.target[select.selectedIndex].id
        return (selectedMovieGenre, movieName)
            }
    ); 
   
        
async function fetchMovies() {
         await fetch(`http://localhost:3000/movies`)
        .then(response  => response.json())
        .then(data => globalMovieData = data) 
            }
      fetchMovies();
        
        
    function buttonActions(buttons) {
        buttons.forEach(button => button.addEventListener("click", event => { 
                  event.preventDefault();
                  selectedGenre = event.target.value;
                
        let foundMovieS = globalMovieData.filter(movie => movie.genre === selectedGenre) 
            
                if(selectedGenre === selectedMovieGenre) {
                    let foundMovie = foundMovieS.find(movie => movie.name === movieName); 
                        let image = document.createElement('img');
                        image.style.maxWidth = "100px"
                        image.src = foundMovie.image;
                       let foundHeader = HeaderContainer.find(header => header.innerText == selectedGenre);
                       foundHeader.appendChild(image);

                }
                  else alert("Wrong genre, try again!")
        }           )                )
    }

    buttonActions(buttons)
 });






