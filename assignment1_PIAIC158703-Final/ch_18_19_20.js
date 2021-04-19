/*## JS chapter 18 19 20
Java-script assignments chapter 18 19 20

#### Make a TODO
Customize previous assignment "ch_15_16_17" with for loop...
*/
var courses = [];
var user_input;
var i = 1;
var total_marks = 500;
var subject;
for (i = 1; i< 6; i++){
    switch (i){
        case 1: subject = "Computers"; break;
        case 2: subject = "Python"; break;
        case 3: subject = "JAVA"; break;
        case 4: subject = "Docker"; break;
        case 5: subject = "HTML"; break;
    }
    user_input = window.prompt("Enter course " + i, subject);
    courses.push(user_input);
}
alert(courses);

for (i = 0; i< 5 ; i++){
    user_input = window.prompt("Edit course " + (i+1), courses[i]);
    courses.splice(i,1,user_input);    
}
//printing in alert
alert(courses);
