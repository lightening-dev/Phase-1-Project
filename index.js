
let clickHereDiv = document.getElementById('circle-text');

clickHereDiv.addEventListener('click', () => clickHereDiv.remove());


let buttons = document.querySelectorAll("button");

function buttonActions(buttons) {
    buttons.forEach(button => 
        button.addEventListener("click", event => console.log(event)));
        return buttons.event;
}

buttonActions(buttons);




