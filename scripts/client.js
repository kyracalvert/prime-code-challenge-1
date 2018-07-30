$(document).ready(readyNow);

function readyNow(){
 console.log('jQuery ready');
 $('generate-button').on('click', generate);
 $('swap-button').on('click', swap);
 $('delete-button').on('click', remove);
}

let buttonCounter = 0;

//this was counting the button clicks on 'generate', but has stopped working. 
function generate() {
buttonCounter ++;
$('body').append('<div class="buttonHolder"></div>');
$('#button').empty('<p> Button Clicked:' +buttonCounter+ '</p>');
$('#button').append('<p> Button Clicked:' +buttonCounter+ '</p>');
console.log('button clicked:', buttonCounter);

}

function swap() {

}

function remove() {
    console.log('remove');
    $(this).parent().parent().remove();
}