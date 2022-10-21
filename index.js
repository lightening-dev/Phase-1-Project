
let clickHereDiv = document.getElementById('circle-text');

clickHereDiv.addEventListener('click', () => clickHereDiv.remove());

let dropDownList = document.getElementById('DropdownList');

dropDownList.addEventListener('change', event => {
    event.preventDefault();
    let dropDownListButton = event.target.value;
    console.log(dropDownListButton)
        return dropDownListButton}
    ); 

    

let buttons = document.querySelectorAll("button");

function buttonActions(buttons) {
    buttons.forEach(button => 
        button.addEventListener("click", event => { 
             event.preventDefault();
             
             let buttonResult = event.target.value;
             console.log(buttonResult)
            return buttonResult;
            
                                                }))
                                                ;
                                            }

buttonActions(buttons);

// function compareValues(){
//     if()
// }



