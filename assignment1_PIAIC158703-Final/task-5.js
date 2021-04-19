/*#### Second Assignment - Make a Percentage Calculator

1. Get the 5-course number from the user```for example course1 is 70```
var totalMarks = 500
2. Calculate the total percentage ``` formula:  obtainedMarks * 100/ totalMarks ```
3. print output in alert.
*/
var user_input;
var i = 1;
var total_marks = 500;
user_input = window.prompt("Enter course " + i++);
var num1 = Number(user_input);
user_input = window.prompt("Enter course " + i++);
var num2 = Number(user_input);
user_input = window.prompt("Enter course " + i++);
var num3 = Number(user_input);
user_input = window.prompt("Enter course " + i++);
var num4 = Number(user_input);
user_input = window.prompt("Enter course " + i++);
var num5 = Number(user_input);
var total_percentage = (num1 + num2 + num3 + num4 + num5) * 100 / total_marks;
alert("Total percentage is " + total_percentage);