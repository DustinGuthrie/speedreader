
//Remove below prompt for Hard mode:
var howManyWords = prompt("How many words per minute can you read?");

//This is the function that will run to determine the time to read
var timeToRead = function() {
    //Here we are grabbing all the P's using the DOM and then placing in a var
    var paragraphs = [].slice.call(document.querySelectorAll('p'));

    var massiveString = " ";
    //Now we will take each of the P's and place in one large string
    paragraphs.forEach(function(element){
    //.textContent will just take the text elements of the P's and add to the large string
    massiveString += element.textContent;
});
//This will create an array from the massiveString so that we can count it
var allStrings = massiveString.split(" ");
//This will then count the words in the array using .length
var wordCount = allStrings.length;

//hard mode would be:
//var total = Math.round(wordCount/230);

//this takes how many words per minute / # of words in all the P's then round up or down to a whole number
var total = Math.round(wordCount/howManyWords);

//without rounding:
//var total = (wordCount/howManyWords);

//and finally return the # total and add to a string
return total + " minute read.)";
};

//here we add the returned string to the h3 from the html and replace where it is left off
document.querySelector('h3').innerHTML += timeToRead();
