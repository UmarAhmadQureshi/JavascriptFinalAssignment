/*#### Second Assignment

1. input value from user in String ```var inputValue="cloUd naTive computinG"```
2. Convert every first letter of the content in Capitalize case. ```inputValue="Cloud Native Computing"```
3. print value in console.log() ```console.log(inputValue) | check result in browser console```
*/
var user_input;
var str_input = "";
var str_capital = "";
var i=0;
user_input = window.prompt("Enter string");
str_input = user_input;
str_input = str_input.trim();
str_capital += str_input.substr(i, 1).toUpperCase();
for (i = 1; i < str_input.length ; i++){
    if (str_input.substr(i,1) == " "){
        str_capital += " " + str_input.substr(i+1, 1).toUpperCase();
        i++;
    }
    else{
        str_capital += str_input.substr(i,1).toLowerCase();
    }
        
}
document.write("Check result in browser console");
console.log(str_capital);