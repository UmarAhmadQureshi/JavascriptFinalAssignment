/*## JS chapter 9
Java-script assignments chapter 9

1. input a value from user ```for example firstName is "Ameen"```
1. input a second value from user ```for example lasName is "Alam"```
3. input a third value from user ```for example age is "20"```

4. print meassage in alert() ```Hello Ameen Alam, You are 20 years old``` 
*/
var user_input;
user_input = window.prompt("Enter first name");
var first_name = user_input;
user_input = window.prompt("Enter last name");
var last_name = user_input;
user_input = window.prompt("Enter age");
var age = Number(user_input);
alert("Hello " + first_name + " " + last_name + ", You are " + age + " years old");