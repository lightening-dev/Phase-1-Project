
    
    let MovieName = "";
    let selectedGenre = "";
    let selectedMovieGenre = "";
    let movieName = "";
    const compareResults = (selectedMovieGenre) => {

        console.log(selectedMovieGenre);
    }


    let dropDownList = document.querySelector('.DropdownList');

    let buttons = document.querySelectorAll("button");

    let categoryContainer = document.getElementById('categorContainer');
    
    const select = document.getElementById('select')
    
select.addEventListener('change', event => {
        event.preventDefault();
        let movieGenre = event.target.value;
       localmovieName = event.target[select.selectedIndex].id
        console.log(movieGenre);
        
        console.log(event.target[select.selectedIndex].id);
        selectedMovieGenre = movieGenre;
        movieName = localmovieName;
        

        
        return (movieGenre, movieName)}
    ); 
    const Horror = document.getElementById('horrorHeader');
    const Family = document.getElementById('familyHeader');
    const Comedy = document.getElementById('comedyHeader');
    const SciFi = document.getElementById('sci-fiHeader');
        
      let globalMovieData = [];

    async function fetchMovies() {
        const movieData = await fetch(`http://localhost:3000/movies`)
        .then(response  => response.json())
        .then(data => {
            
            globalMovieData = data}) 
    
        
        }
      fetchMovies();
        
        
       

function buttonActions(buttons) {
        buttons.forEach(button => button.addEventListener("click", event => { 
                  event.preventDefault();
                  selectedGenre = event.target.value;
                  //movieName = event.target.id;
                  
                    //console.log(selectedGenre);
                    //console.log(movieName);
                  if(selectedGenre === selectedMovieGenre) {
                       let image = document.createElement('img');
                        image.style.maxWidth = "100px"
                     
                       if(selectedGenre == "Horror") {
                            image.src = globalMovieData[2].image;
                            Horror.appendChild(image); 
                        }
                       else if (selectedGenre == "Family" && movieName == "Toy Story") {
                        
                            image.src = globalMovieData[0].image;
                            Family.appendChild(image)
                       }
                       else if (selectedGenre == "Family" && movieName == "Moana" ){
                            image.src = globalMovieData[4].image;
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






