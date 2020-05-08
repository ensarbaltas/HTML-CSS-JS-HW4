/*
Declare a function isPalindrome(str) that takes a string as an input.
Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both 
forward and backward, ignoring punctuation, case, 
and spacing.


function Palindrome(n){

    sentence= "Declare a function is Palindrome(str), that takes a string as an input."
    sentence=sentence.split(" ");
    console.log(sentence)
    
    if (i=0, i<=sentence.length, i++) {
        sentence[i] === n;
        return true;
    }
    else 
        return false;  
}
console.log(Palindrome(prompt("writte your word here: ")))
*/
function Palindrome(n){
    
    if (parseInt(n) >=0 || parseInt(n) <0) {
        return true;
    }
    else 
        return false;  
}
console.log(Palindrome(prompt("my word is : ")))



