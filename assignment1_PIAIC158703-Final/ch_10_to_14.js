/*## JS chapter 10 to 14
Java-script assignments chapter 10 to 14

#### Make a Calculator
1. input a value from user ```for example num1 is 7```
1. input a second value from user ```for example num2 is 3```
3. input a third value from user ```for example sign is "+" or "-" or "*" or "/" or "%"```
4. print operation in alert() ```7-3 =4, or 7*3 =21, or 7/3 =2.3, or 7+3 =10 or 7%3 =1``` 

-----------------------
#### Second Assignment - Make a Percentage Calculator

1. Get the 5-course number from the user```for example course1 is 70```
var totalMarks = 500
2. Calculate the total percentage ``` formula:  obtainedMarks * 100/ totalMarks ```
3. print output in alert.
*/
var user_input;
user_input = window.prompt("Enter first number");
var num1 = Number(user_input);
user_input = window.prompt("Enter second number");
var num2 = Number(user_input);
user_input = window.prompt("Enter operation");
var sign = user_input;
var result;
if (sign == "+")
    result = num1 + num2;
if (sign == "-")
    result = num1 - num2;
if (sign == "*")
    result = num1 * num2;
if (sign == "/")
    if ( num2 != 0)
        result = num1 / num2;
if (sign == "%")
    if ( num2 != 0)
        result = num1 % num2;
alert("Result is " + result);
