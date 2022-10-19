
let clickHereDiv = document.getElementsByClassName('circle-text');

//clickHereDiv.addEventListener('click', event => clickHereDiv.remove);

function hello() {
    console.log('hi')
}


clickHereDiv.addEventListener("click", function(event){
    console.log(event)
});

