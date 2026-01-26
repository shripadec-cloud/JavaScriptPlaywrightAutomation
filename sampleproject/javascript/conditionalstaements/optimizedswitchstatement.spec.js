//Case 2: in switch block, if all case statements are performing same task in this case, we can p[rovide multiple cases in a single line
 
/*
    Switch case statement:
    if the input value need to match then we can prefer switch statement
*/
 
let character="O"
switch(character){
    case "A":case "E":case "I":case "O":case "U":case "a":case "e":case "i":case "o":case "u":
        console.log(character+" is a Vowel");
        break;
    default:
        console.log("It is not a Vowel");
}