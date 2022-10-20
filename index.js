
let clickHereDiv = document.getElementById('circle-text');

clickHereDiv.addEventListener('click', () => clickHereDiv.remove());

let dropDownList = document.getElementById('DropdownList');

dropDownList.addEventListener('change', event => console.log(event.target.value));


let buttons = document.querySelectorAll("button");

function buttonActions(buttons) {
    buttons.forEach(button => 
        button.addEventListener("click", event => { 
             if(event.target.value === dropDownList.event.target.value ) {
                fetch("http://localhost:3000")
                    .then(response => response.json())
                        .then(data => )

             }

            console.log(event)
            return event
                                                }));}

buttonActions(buttons);




