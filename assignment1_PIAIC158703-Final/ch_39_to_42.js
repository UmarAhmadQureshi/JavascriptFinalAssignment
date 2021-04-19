/*## JS chapter 39 to 42
Java-script assignments chapter 39 to 42

-----------------------
#### Make a Percentage Calculator

1. Get the 5-course number from the user```for example course1 is 70```
var totalMarks = 500
2. Calculate the total percentage ``` formula:  obtainedMarks * 100/ totalMarks ```
3. Calculate the grade ```use switch case```
``` Grade A+ 90% to 100% , Grade A 75% to 89% , Grade B 60% to 74% , Grade C 45% to 60% , Grade D 30% to 44% Grade F 0% to 29%```
4. print output in alert.
*/
var user_input;
var int_courses = [];
var i = 1;
var n_totalMarks = 0;
var str_grade = "";
var n_percentage
user_input = window.prompt("Enter Marks for Course " + i);
int_courses.push(Number(user_input));
i++;
user_input = window.prompt("Enter Marks for Course " + i);
int_courses.push(Number(user_input));
i++;
user_input = window.prompt("Enter Marks for Course " + i);
int_courses.push(Number(user_input));
i++;
user_input = window.prompt("Enter Marks for Course " + i);
int_courses.push(Number(user_input));
i++;
user_input = window.prompt("Enter Marks for Course " + i);
int_courses.push(Number(user_input));

for (i=0; i< int_courses.length; i++){
    n_totalMarks += int_courses[i];
}
n_percentage = parseInt(n_totalMarks * 100/500);
switch (true){
    case (n_percentage >= 90 && n_percentage <=100): str_grade = "A+";break;
    case (n_percentage >= 75 && n_percentage <=89): str_grade = "A";break;
    case (n_percentage >= 60 && n_percentage <=75): str_grade = "B";break;
    case (n_percentage >= 45 && n_percentage <=60): str_grade = "C";break;
    case (n_percentage >= 30 && n_percentage <=44): str_grade = "D";break;
    case (n_percentage >= 0 && n_percentage <=29): str_grade = "F";break;
}
alert ("Your Grade is " + str_grade);