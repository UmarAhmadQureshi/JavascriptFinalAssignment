/*## JS chapter 15 16 17
Java-script assignments chapter 15 16 17

#### Make a TODO
1. Create an empty array with the name is courses. ```example: var courses=[] ``
2. Get the 5-course name from the user, ```example: var course1 =prompt("course 1", "computer") ``` and save all 5 value in "courses" array. ```example: courses.push(course1)```
3. print courses array in alert```example: alert(courses)```
4. print all full 5-course name one by one in prompt. ```example: course1=prompt(course1, course1Value)```
5. If the user edit any value (through prompt), then that value is edit in the array. ```example: course1=prompt(course1, course1ValueEdit)``` 
``` use Array.splice() to replace and edit index in array```
6. print courses array in alert```example: alert(courses)```
*/
var courses = [];
var user_input;
var i = 1;

user_input = window.prompt("Enter course " + i++, "Computers");
courses.push(user_input);
user_input = window.prompt("Enter course " + i++, "Python");
courses.push(user_input);
user_input = window.prompt("Enter course " + i++, "JAVA");
courses.push(user_input);
user_input = window.prompt("Enter course " + i++, "Docker");
courses.push(user_input);
user_input = window.prompt("Enter course " + i++, "HTML");
courses.push(user_input);
alert(courses);
i=0;
user_input = window.prompt("Edit course " + (i+1), courses[i]);
courses.splice(i,1,user_input);
i++;
user_input = window.prompt("Edit course " + (i+1), courses[i]);
courses.splice(i,1,user_input);
i++;
user_input = window.prompt("Edit course " + (i+1), courses[i]);
courses.splice(i,1,user_input);
i++;
user_input = window.prompt("Edit course " + (i+1), courses[i]);
courses.splice(i,1,user_input);
i++;
user_input = window.prompt("Edit course " + (i+1), courses[i]);
courses.splice(i,1,user_input);
//printing in alert
alert(courses);
