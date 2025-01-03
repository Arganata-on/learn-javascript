// arithmetic operator = operands (values, variables, etc.)
// operators (+ - * /)
// ex. 11 = x + 5;

let students = 30;
students = students + 1;
students = students - 1;
students = students * 2;
students = students / 2;
students = students ** 2;
let extraStudent = students % 3;

students += 1;
students -= 1;
students *= 2;
students /= 2;
students **= 2;
students %= 2;

students++;
students--;

/*
    operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication & division & modulo
    4. addition & subtraction 
 */

let result = (12 % 5) + 8 / 2;

console.log(result);
