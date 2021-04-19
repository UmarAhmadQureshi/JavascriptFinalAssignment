/*## JS chapter 31 to 34
Java-script assignments chapter 31 to 34

1. input your name through prompt. 		
``` for example name is  "Ameen Alam" ```
2. input your DOB(date) through prompt. 	
``` for example date is  "24" ```
3. input your DOB(month) through prompt.	
``` for example month is  "05" ```
4. input your DOB(year) through prompt. 	
``` for example year is  "1999" ```


5. print meassage in console.log()
   ``` "Hello Ameen Alam, Good Morning, AfterNoon, Evening or Night" ```

6. print meassage in console.log()
   ``` "Your DOB is {in pakistan standard time format}" ```

7. print meassage in console.log()
   ``` "You are 20 years 7 Month 10 Days 19 Hours 20 Minutes 25 Seconds old" ```

   ``` "Your Age in Days 7510" ```

8. print meassage in console.log()
   ``` "How much time left in your next birthday? 161 days 4 hours 39 minutes 34 seconds" ```
    or
   ``` "happy Birth Day Ameen Alam.  Today is Your 20th Birthday" ```
   */
var user_input;
var str_name = "";
var int_date = 0;
var int_month = 0;
var int_year = 0;
var dte_now = new Date();
var dte_birth;

user_input = window.prompt("Enter Name");
str_name = user_input;
user_input = window.prompt("Enter DOB (Date)");
int_date = window.parseInt(user_input);
user_input = window.prompt("Enter DOB (Month)");
int_month = window.parseInt(user_input);
user_input = window.prompt("Enter DOB (Year)");
int_year = window.parseInt(user_input);
dte_birth = new Date(int_year, int_month -1, int_date);
var str_output = "Hello " + str_name + ", Good ";
if (dte_now.getHours() >= 4 &&  dte_now.getHours() < 12 )
    str_output += "Morning";
if (dte_now.getHours() >= 12 &&  dte_now.getHours() < 17 )
    str_output += "Afternoon";
if (dte_now.getHours() >= 17 &&  dte_now.getHours() < 21 )
    str_output += "Evening";
if (dte_now.getHours() >= 21 ||  dte_now.getHours() < 4 )
    str_output += "Night";

// window.console.log("Hours are " + dte_now.getHours());
window.console.log(str_output);
str_output = "Your DOB is " + dte_birth;
window.console.log(str_output);
var dte_diff = dte_now.getFullYear() - dte_birth.getFullYear();
var dte_year_diff = dte_diff;
str_output = "You are " + dte_diff + " years old";
window.console.log(str_output);
dte_diff = window.parseInt((dte_now - dte_birth)/(1000 * 60 * 60 * 24));
str_output = "Your age in days " + dte_diff;
window.console.log(str_output);
dte_diff = window.parseInt((dte_now - dte_birth)/(1000 * 60 * 60));
str_output = "Your age in hours " + dte_diff;
window.console.log(str_output);


/*dte_diff = (dte_now.getMonth() - dte_birth.getMonth()) - (dte_now.getDay() - dte_birth.getDay());
alert(dte_birth.getDay());
if (dte_diff == 0){
    str_output = "Happy birthday " + str_name + " today is your " + dte_year_diff + " birthday";
    window.console.log(str_output);
}*/

//var countDownDate = new Date("May 24, 2021 00:00:00").getTime();
var countDownDate = new Date(dte_now.getUTCFullYear(), int_month -1, int_date);
// if (int_month < dte_now.getMonth()){
	
// }else if (int_month == dte_now.getMonth()){
// 	if (int_date < dte_now.
// }
var now = new Date();
var bday = false;
now.setHours(0,0,0,0);
countDownDate.setYear(0);
now.setYear(0);

if (now.valueOf() == countDownDate.valueOf()){
    bday = true;
}
    
countDownDate = new Date(dte_now.getUTCFullYear(), int_month -1, int_date);
var distance = countDownDate.getTime() - dte_now.getTime();

if (distance < 0){
    countDownDate = new Date(dte_now.getUTCFullYear()+1, int_month -1, int_date);
    distance = countDownDate.getTime() - dte_now.getTime();
}

var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

if (bday == true) {
    str_output = "Happy birthday " + str_name + " today is your " + dte_year_diff + " birthday";
    window.console.log(str_output);
}else{	
	str_output = "How much time left in your next birthday?" + days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds ";
    window.console.log(str_output);
}
