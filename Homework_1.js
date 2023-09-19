// 1. Creating variable item_1
// 2. Assign a value 5 to a variable item_1
var item_1 = 5;
// 3. Output to console the value
console.log(item_1);
// 4. Creating variable item_2
// 5. Assign a value 3 to a variable item_2
var item_2 = 3;
// 6. Output to console the value
console.log(item_2);
// 7. Creating variable item_3
// 8. Assign a value to a variable item_3 equal item_1+item_2
var item_3 = item_1 + item_2;
// 9. Output to console the value
console.log(item_3);
// 10. Creating variable item_4
// 11. Assign a value "Yolochka" to a variable item_4
var item_4 = "Yolochka";
// 12. Output to console the value
console.log(item_4);
// 13. Output to console the value of item_3+item_4
console.log(item_3 + item_4);
// 14. Output to console the value of item_3*item_4
console.log(item_3 * item_4);
// 15. Creating variable item_5
// 16. Assign a value to a variable item_5 equal item_3
var item_5 = item_3;
// 17. Creating variable item_6
// 18. Assign a value to a variable item_6 equal 15
var item_6 = 15;
// 19. Creating variable item_6_type
// 20. Assign a value to a variable item_6 equal type of item_6
var item_6_type = typeof item_6;
// 21. Output to console the value of item_6 and item_6_type
console.log("item_6 ==", item_6 + ",", "item_6_type ==", item_6_type);
// 22. Creating variable item_7 and assigning  a value of item_6 but change type to String
var item_7 = String(item_6);
// 23. Creating variable item_7_type
// 24. Assigning  a value type of item_7 to item_7_type
var item_7_type = typeof item_7;
// 25. Output to console the value of item_7 and item_7_type
console.log("item_7 ==", item_7 + ",", "item_7_type ==", item_7_type);
// 26. Creating variable age_1 and assign a value 10
var age_1 = 10;
// 27. Creating variable age_2 and assign a value 18
var age_2 = 18;
// 28. Creating variable age_3 and assign a value 60
var age_3 = 60;
// 29.
// 30.
if (age_1 < age_2) {
  console.log( "You don't have access cause your age is " + age_1 + ". It's less then " + age_2 );
} else if (age_1 >= age_2 && age_1 < age_3) {
  console.log("Welcome !");
} else if (age_1 > age_3) {
  console.log("Keep calm and look Culture channel");
} else {
  console.log("Technical work");
}
// 1* Convert the written code in paragraphs 26-33 into a function that takes age as input.
// Example: const checkAge = function(age) {
//   Your transformations
//   }
//   Output to the console the result of the function with ages 17, 18, 61
const CheckAge = function (age) {
  if (typeof age !== "number") {
    return "Age must be a number!";
  }else if  
  else {
    return "cool";
  }
};
console.log(CheckAge(17));
console.log(CheckAge(18));
console.log(CheckAge(61));
