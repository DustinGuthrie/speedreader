var howManyWords = prompt("How many words per minute can you read?");
var timeToRead = function() {
  var paragraphs = [].slice.call(document.querySelectorAll('p'));;

  var massiveString = " ";
  paragraphs.forEach(function(element){
  // console.log(element.textcontent);
  massiveString += element.textcontent;
});

var allStrings = massiveString.split(" ");
var wordCount = allStrings.length;

var total = Math.round(wordCount/howManyWords);
return total + " minutes";

};
document.querySelector('h4').innerHTML += timeToRead();
