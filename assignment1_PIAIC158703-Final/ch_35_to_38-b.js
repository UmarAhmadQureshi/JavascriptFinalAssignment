/*#### Second Assignment
1. User input value in Number through prompt ```Example value=5```
2. Factorialize a Number ```use Function```
3. print value in console.log() ``` console.log(value); the result is 120```
*/
function myFactorizer(int_num) {
    var i;
    var result = 1;
    for (i = 0 ; i< int_num ; i++)
        result *= (int_num - i);
    return result;   
}
var user_input;
var int_input;
user_input = window.prompt("Enter Number");
int_input = window.parseInt(user_input);
document.write("Check result in browser console");
if (int_input > 0){    
    console.log("Result is " + myFactorizer(int_input));
}else{
    console.log("Incorrect number");
}

