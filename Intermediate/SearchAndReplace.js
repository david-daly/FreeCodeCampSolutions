/*
 * Perform a search and replace on the sentence using the arguments provided and return the new sentence.
 * First argument is the sentence to perform the search and replace on.
 * Second argument is the word that you will be replacing (before).
 * Third argument is what you will be replacing the second argument with (after).
 * NOTE: Preserve the case of the original word when you are replacing it.
 * For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
 */
function myReplace(str, before, after) {
  str = str.split(" ");
  return str.map(function (el) {
    if (el === before) {
      if(el[0].toUpperCase() === el[0]){
       return after[0].toUpperCase() + after.slice(1);
      }
      else return after;
    }
    else return el;
  }).join(" ");
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
