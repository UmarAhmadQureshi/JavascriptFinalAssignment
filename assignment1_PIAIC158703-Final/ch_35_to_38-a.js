/*## JS chapter 35 to 38
Java-script assignments chapter 35 to 38

1. input value from user in String ```var inputValue="cloUd naTive computinG"```
2. Convert every first letter of the content in Capitalize case. ```inputValue="Cloud Native Computing"```
```use Function```
3. print value in console.log() ```console.log(inputValue) | check result in browser console```

--------------------------------------
#### Second Assignment
1. User input value in Number through prompt ```Example value=5```
2. Factorialize a Number ```use Function```
3. print value in console.log() ``` console.log(value); the result is 120```

-------------------

#### Understand this logic

var value= multiply(4,3,6);

console.log("value", value);   // ```The result is ?```

function add(a, b){
	var z= a+b;
	return z;
};

function multiply(a, b, c){
	var z= a* add(b, c);
	return z;
};

console.log("course", course);   // ```The result is ?```
console.log("z", z);   // ```The result is ?```

var course="cloud native computing";
*/

function capitalizer(str_input) {
    var str_capital = "";
    var i=0;
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
    return str_capital;   // The function returns the product of p1 and p2
  }

var user_input;

user_input = window.prompt("Enter string");
document.write("Check result in browser console");
console.log(capitalizer(user_input));