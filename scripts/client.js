$(document).ready(readyNow);

function readyNow() {
    console.log('jQuery ready');
    $('#generate-button').on('click', generate);
    // Hey, jQuery, there is an element on page load called "buttonClicked". Listen for clicks there!
    // If the click happens on something with the class of "swap", run the swap function. 
    // Love, Kyra.
    $('.buttonClicked').on('click', '.swapButton', swap);
    $('.buttonClicked').on('click', '.deleteButton', deleteButton);
}

let buttonCounter = 0;

//this was counting the button clicks on 'generate', but has stopped working. 
function generate() {
    buttonCounter++;
    let newDiv = '<div class ="newDiv"><p>' + buttonCounter + '</p><button class="swapButton">Swap</button> <button class="deleteButton">Delete</button></div>';
    //append a dive when the button in clicked. 
    console.log('button clicked!');
    $('.buttonClicked').append(newDiv);


    // buttonCounter ++;
    // $('body').append('<div class="buttonHolder"></div>');
    // $('#button').empty('<p> Button Clicked:' +buttonCounter+ '</p>');
    // $('#button').append('<p> Button Clicked:' +buttonCounter+ '</p>');
    // console.log('button clicked:', buttonCounter);

}

function swap() {
    console.log ('swap clicked!');
    $(this).parent().toggleClass('yellow');
}

function deleteButton() {
console.log('delete button clicked');
$(this).parent().remove();
}
