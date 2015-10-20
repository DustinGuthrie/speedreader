
//Remove below prompt for Hard mode:
var howManyWords = prompt("How many words per minute can you read?");
var timeToRead = function() {
    var paragraphs = [].slice.call(document.querySelectorAll('p'));

    var massiveString = " ";
    paragraphs.forEach(function(element){
    massiveString += element.textContent;
});
var allStrings = massiveString.split(" ");
var wordCount = allStrings.length;

//hard mode would be:
//var total = Math.round(wordCount/230);

var total = Math.round(wordCount/howManyWords);

//without rounding:
//var total = (wordCount/howManyWords);

return total + " minute read.)";
};
document.querySelector('h3').innerHTML += timeToRead();
