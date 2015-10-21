
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

//Here is the instructor way to change words per minute
//function readTime(wpm) {
//if(typeof wpm !=== "number") return "Sorry, must be a number";
// var wpm = wpm || 230;
// return wpm;
// }
//readTime (500);

//this takes how many words per minute / # of words in all the P's then round up or down to a whole number
var total = Math.round(wordCount/howManyWords);

//without rounding:
//var total = (wordCount/howManyWords);

//and finally return the # total and add to a string
return total + " minute read.)";
};

//here we add the returned string to the h3 from the html and replace where it is left off
document.querySelector('h3').innerHTML += timeToRead();

////********************************************************
////This is another way we could have done this - but its not working!!!!:
// var howManyWords = prompt("How many words per minute can you read?");

// var timeToRead = function() {
//     var paragraphs = [].slice.call(document.querySelectorAll('p'));
//     var allStrings = paragraphs.split(" ");
//     var massiveString = " ";
//     for(var i in paragraphs) {
//       massiveString += paragraphs[i].textContent;
//
//       // console.log(massiveString);
//     }
//
// var wordCount = paragraphs.length;
// var total = Math.round(wordCount/230);
// return total + " minute read.";
// };
// document.querySelector('h3').innerHTML += timeToRead();

/////****************************************
//Here is another attempt at a different way of getting the total
//var x = document.body.textContent;
//
/////******************************************
//This is the instructor way of making sure the DOM is ready
// function ready(fn) {
//   if(typeof fn !== 'function') return;
//   if(document.readyState === "complete" || document.readyState === "interactive")
// }
// return fn();
// }
// ready(function () {
//   var childArr = [].slice.call(document.body.children);
//
//   readTime.configWPM(500);
//
//   document.querySelector('h3'-reading-time).innerHTML = readTime.words(childArr);
//
// })
