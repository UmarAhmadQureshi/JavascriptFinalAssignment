/*## JS chapter 21 to 30
Java-script assignments chapter 21 to 30

1. Take a input from user in number with decimal point ``` user input is 3.4```
2. Convert it into greater number ```Example: Math.ceil(3.4); to 4```
3. Declear a variable of string and assign some text ``` var text="This is my dummy text" ```
4. Slice the text into a new variable from 0 to the rounded number ```0 to 4;  Example: text.slice(0, 4)``` | ``` sliceText = This ```
5. Use for loop and concatination to reverse the sliced string; ```0==>4 ==> This ===> shiT ```
6. print value in alert ``` "shiT" ```

---------------------------------------------------------

#### Second Assignment

1. input value from user in String ```var inputValue="cloUd naTive computinG"```
2. Convert every first letter of the content in Capitalize case. ```inputValue="Cloud Native Computing"```
3. print value in console.log() ```console.log(inputValue) | check result in browser console```
*/
var user_input;
var int_ceil;
var str_myString = "This is my dummy text";
var str_substr;
var str_reverse = "";
var i;

user_input = window.prompt("Enter number ");
int_ceil = Math.ceil(Number(user_input));
str_substr = str_myString.slice(0,int_ceil);
for (i = 0; i<= int_ceil; i++){
    str_reverse += str_substr.substr(int_ceil - i,1);
}
alert(str_reverse);