'use strict';

// fix links
 
// https://ultimatecourses.com/blog/es6-arrow-functions-syntaxes-and-lexical-scoping

/*
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr
 http://www.ecma-international.org/ecma-262/7.0/index.html
 https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_search3
 https://www.w3schools.com/jsref/jsref_try_catch.asp
 https://www.w3schools.com/jsref/jsref_search.asp
 https://www.jstips.co/en/javascript/rounding-the-fast-way/
 http://kangax.github.io/compat-table/es5/
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else#Syntax
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes#Browser_compatibility

 */


// ********************************************
// ********************************************
//       IGNORE THIS PART - BEGIN
// ********************************************
// ********************************************
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

function readLine() {
  return inputString[currentLine++];
}

function main() {
  const parameterVariable = readLine();
  greeting(parameterVariable);
}

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString.trim().split('\n').map(string => {
    return string.trim();
  });

  main();
});
// ********************************************
// ********************************************
//       IGNORE THIS PART - END
// ********************************************
// ********************************************










/*
 The lexical structure of a programming language is the set of elementary rules that tells you how to write programs in that language. It's essentially the lowest-level syntax of a language and specifies such things as what variable names look like, the delimiter characters for comments, and how one program statement is separated from the next.
 JavaScript programs are written using the Unicode character set. Unicode is a superset of ASCII and Latin-1.

 */
// ------------------------------------------
function greeting(parameterVariable) {
  // Inline Comment

  /*
   Block Comment
   */

  /*
   Literals

   // The integer number twelve:
   12

   // The floating-point number one-point-two:
   1.2

   // A string of text:
   "Hello, World."

   // Another string:
   'Hi!'

   // A boolean value:
   true

   // The absence of an object:
   null

   // An object initializer:
   {x: 1, y: 2}

   // An array initializer:
   [1, 2, 3, 4, 5]

   */


//  identifiers
  x = 5
  variable_name = 10
  sum13 = 1
  _variable = 1
  $variable = 1

  /*
   identifiers
   avoid
   reserved words or keywords
   for, function
   predefined global variables
   predefined global functions
   */

  console.log('Hello, World!');
  // We use the console.log method to write data to standard output in JavaScript.


    /*
    // console.table
    values = [];
    for (var x = 0; x < 10; x++){
     values.push([
      2 ** x,
      2 * x ** 2
     ])
    };
    console.table(values)
    */



// Destructuring assignment - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
//    to unpack values from
//        arrays, or
//        properties from objects
//            into distinct variables.

// arrays
var a, b, rest;
[a, b] = [10, 20];
[a, b, ...rest] = [10, 20, 30, 40, 50];
// a = 10
// b = 20
// rest = [30,40,50]


var a, b;
[a=5, b=7] = [1];
console.log(a); // 1
console.log(b); // 7

var a = 1;
var b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

function f() {
  return [1, 2, 3];
}

var [a, , b] = f();
console.log(a); // 1
console.log(b); // 3





// NOTE: the () for whole expression
({ a, b } = { a: 10, b: 20 });
({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}

var o = {p: 42, q: true};
var {p: foo, q: bar} = o;
console.log(foo); // 42 
console.log(bar); // true

var {a = 10, b = 5} = {a: 3};
console.log(a); // 3
console.log(b); // 5

var {a: aa = 10, b: bb = 5} = {a: 3};
console.log(aa); // 3
console.log(bb); // 5



// Nested object and array destructuring

const metadata = {
  title: 'Scratchpad',
  // ..
  translations: [
    {
      // ..
      title: 'JavaScript-Umgebung'
    }
  ]
  // ..
};

let {
  title: englishTitle, // rename
  translations: [
    {
       title: localeTitle, // rename
    },
  ],
} = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle);  // "JavaScript-Umgebung"


var people = [
  {
    name: 'Mike Smith',
    family: {
      mother: 'Jane Smith',
      father: 'Harry Smith',
      sister: 'Samantha Smith'
    },
    age: 35
  },
  {
    name: 'Tom Jones',
    family: {
      mother: 'Norah Jones',
      father: 'Richard Jones',
      brother: 'Howard Jones'
    },
    age: 25
  }
];

for (var {name: n, family: {father: f}} of people) {
  console.log('Name: ' + n + ', Father: ' + f);
}

// "Name: Mike Smith, Father: Harry Smith"
// "Name: Tom Jones, Father: Richard Jones"


Unpacking fields from objects passed as function parameter
function userId({id}) {
  return id;
}

function whois({displayName, fullName: {firstName: name}}) {
  console.log(displayName + ' is ' + name);
}

var user = { 
  id: 42, 
  displayName: 'jdoe',
  fullName: { 
      firstName: 'John',
      lastName: 'Doe'
  }
};

console.log('userId: ' + userId(user)); // "userId: 42"
whois(user); // "jdoe is John"



// Combined Array and Object Destructuring
const props = [
  { id: 1, name: 'Fizz'},
  { id: 2, name: 'Buzz'},
  { id: 3, name: 'FizzBuzz'}
];

const [,, { name }] = props;

console.log(name); // "FizzBuzz"






  // ??????????????
//  Template Literals / template 
// Multi-line Strings
// Print a Multi-Line String Using Normal Strings
console.log("first line\n" + "second line");
// Print a Multi-Line String Using Normal Strings
console.log(`first line
second line`);

// Expression Interpolation
// Print a Line Using Normal Strings
const a = 2;
const b = 3;
console.log(
    'The sum of a and b is ' + (a + b) + '.\n' 
    + 'The product of a and b is ' + (a * b) + '.'
);

// Print a Line Using Template Literals
const a = 2;
const b = 3;
console.log(`The sum of a and b is ${a + b}. 
The product of a and b is ${a * b}.`);

  console.log(`${firstString} says hello.`);


// Tagged Template Literals
var a = 5;
var b = 10;

// Tagged Template Literals
//    array of string literals (n+1), values of the substitution expressions (cooked expressions) (n)
function foo(strings, ...values) {
    console.log("." + strings[0] + ".");
    console.log("." + strings[1] + ".");
    console.log("." + strings[2] + ".");
    console.log("." + strings[3] + ".");
    console.log(values[0]);
    console.log(values[1]);
    console.log(values[2]);

    a = values[0];
    b = values[1];

    return `Sum ${a + b}
Product ${a * b} 
Division ${b / a}`;
}

// template literal
foo`Sum ${a + b}
Product ${a * b}
Division ${b / a}`;

console.log(foo`Num1 ${a + 10}
Num2 ${b * 2} 
Num3 ${b / a}`);












  // console.log(Hello, World!\n${parameterVariable});
  // process.stdout.write(parameterVariable);






  /*
   Data Types

   The latest ECMAScript standard defines seven data types:

   A primitive value or data type is data that is not an object and has no methods. All primitives are immutable, meaning they cannot be changed. There are six primitive types:
   Number
   String
   Boolean
   Symbol
   Null
   Undefined

   The seventh data type is
   Object


   Number Data Type
   According to the ECMAScript standard, all numbers are double-precision 64-bit binary format IEEE 754-2008, meaning there is no specific type for integers.

   Maximum Value for a Number
   The MAX_VALUE property has a value of approximately . Values larger than Number.MAX_VALUE are represented as Infinity.

   Minimum Value for a Number
   The MIN_VALUE property is the smallest positive value of the Number type closest to , not the most negative number, that JavaScript can represent. MIN_VALUE has a value of approximately . Values smaller than Number.MIN_VALUE ("underflow values") are converted to .

   Symbolic Numbers
   There are three symbolic number values:

   Infinity: This is any number divided by , or an attempt to multiply Number.MAX_VALUE by an integer .
   -Infinity: This is any number divided by , or an attempt to multiply Number.MAX_VALUE by an integer .
   NaN: This stands for "Not-a-Number" and denotes an unrepresentable value (i.e., ).

   The isSafeInteger Method
   A safe integer is an integer that:
   Can be exactly represented as an IEEE-754 double precision number, and
   Whose IEEE-754 representation cannot be the result of rounding any other integer to fit the IEEE-754 representation.
   The Number.isSafeInteger() method determines whether the provided value is a number that is a safe integer.

   Maximum Safe Integer
   The Number.MAX_SAFE_INTEGER constant has a value of , or .

   Minimum Safe Integer
   The Number.MIN_SAFE_INTEGER constant has a value of , or .

   */


  var var1 = 1;
  var var2 = 0;
  var var3 = -0;

  console.log("1 / 0 = " + var1 / var2);
  console.log("1 / -0 = " + var1 / var3);
  console.log("MAX_VALUE: " + Number.MAX_VALUE);
  console.log("MAX_VALUE + 1 = " + Number.MAX_VALUE * 2);
  console.log("MIN_VALUE = " + Number.MIN_VALUE);
  console.log("MIN_VALUE - 1 = " + Number.MIN_VALUE - 1);
  console.log("MAX_SAFE_INTEGER = " + Number.MAX_SAFE_INTEGER);
  console.log("MIN_SAFE_INTEGER = " + Number.MIN_SAFE_INTEGER);
  console.log("SquareRoot(-1) = " + Math.sqrt(-1));
  console.log("isSafeInteger(100) = " + Number.isSafeInteger(100));


//    1 / 0 = Infinity
//    1 / -0 = -Infinity
//    MAX_VALUE: 1.7976931348623157e+308
//    MAX_VALUE + 1 = Infinity
//    MIN_VALUE = 5e-324
//    NaN
//    MAX_SAFE_INTEGER = 9007199254740991
//    MIN_SAFE_INTEGER = -9007199254740991
//    SquareRoot(-1) = NaN
//    isSafeInteger(100) = true





// String Data Type
// A string value is a chain of zero or more Unicode characters (i.e., letters, digits, and punctuation marks) that we use to represent text.

  var firstString = "Hello, There.";
  var secondString = "How're you?";
  var thirdString = "c";
  var fourthString = '"Wow!!!", she shouted.';

// 'c'
// ''
// ""

  console.log(firstString);
  console.log(secondString);
  console.log(thirdString);
  console.log(fourthString);
  


//      Hello, There.
//      How're you?
//      c
//      "Wow!!!", she shouted.


//  substr()


  /*
   var s = "abcdef"
   var s2 = String(4);

   console.log(s.length);
   console.log(s.charAt(0));
   console.log(s + " " + t);
   console.log(s.concat(t));
   s.includes("")
   s.includes("abc")
   s.endsWith("def")

   fromIndex = 5

   s = "abcabcabc"
   s.indexOf("abc")              // -1 or   0 to n-1
   s.indexOf("abc", fromIndex)   // -1 or   0 to n-1

   s = "abcabcabc"
   s.lastIndexOf("abc")              // search from reverse
   s.lastIndexOf("abc", fromIndex)

   var s = "HackerRank";
   console.log(s.match());
   console.log(s.match("[a-z]+"));     // null, or
   //    [ '',           index: 0, input: 'HackerRank', groups: undefined ]
   //    [ 'acker',      index: 1, input: 'HackerRank', groups: undefined

   console.log(s.repeat(2))


   "abcabc".replace("a", "") // replace 1st occurance

   "abcabc".search("ab")
   "abcabc".search("[a-z]")    // -1, or  search for 1st occurance
   "abcabc".search(/blue/i);


   // slice[i,j)
   ""
   + "abcabc".slice()        // abcabc
   + "abcabc".slice(1)     // bcabc
   + "abcabc".slice(1,2)   // b


   // substr[i,len)
   ""
   + "abcabc".substr()      // abcabc
   + "abcabc".substr(1)     // bcabc
   + "abcabc".substr(1,2)   // bc

   ""
   + "abcabc".split()
   + "abcabc".split().length
   + "abcabc".split("")
   + "abcabc".split("").length
   + "abcabc".split("a")
   + "abcabc".split("a").length
   // + "<br>"


   "ABC".toLowerCase()
   "abc".toUpperCase()

   "  abc ABC  ".trim()
   "  abc ABC  ".trimLeft()
   "  abc ABC  ".trimRight()


   /*
   abcabc
   1
   a,b,c,a,b,c
   6
   ,bc,bc
   3
   */


  "abcabc".startsWith("a")
























  /*

   ???????????/////
   String.normalize()
   Returns a string containing the Unicode Normalization Form of the calling string's value. The argument must be one of the following:

   "NFC": Normalization Form Canonical Composition. This is the default in the event that no argument is given.
   "NFD": Normalization Form Canonical Decomposition.
   "NFKC": Normalization Form Compatibility Composition.
   "NFKD": Normalization Form Compatibility Decomposition.
   For example:

   1
   var s = "HackerRank";
   2
   console.log(s.normalize());
   3
   console.log(s.normalize("NFKC"));
   Run Output
   HackerRank
   HackerRank
   ??????????????/?
   */







































  /*
   Boolean Data Type
   true, and false.

   Symbol Data Type
   Symbol is a unique and immutable primitive value and may be used as the key of an Object property.

   Null Data Type
   null

   Undefined Data Type
   The undefined value is returned when you use an object property that does not exist, or a variable that has been declared, but has never had a value assigned to it.

   The typeof Operator
   As demonstrated in some of the code examples above, we can use the typeof operator to determine the type associated with a variable's current value:

   */



// Number Data Type:
  var firstVar = 1.5e5;

// String Data Type:
  var secondVar = 'Hello';

// Boolean Data Type:
  var thirdVar = true;

// Symbol Data Type:
  var fourthVar = Symbol("some Symbol variable");

// Null Object:
  var fifthVar = null;

// Undefined Data Type:
  var sixthVar;

// Object:
  var seventhVar = {a: 1, b: 2};

// NaN (It is a Number):
  var eighthVar = Math.sqrt(-1);

  console.log(firstVar + " is a " + typeof firstVar);
  console.log(secondVar + " is a " + typeof secondVar);
  console.log(thirdVar + " is a " + typeof thirdVar);
  console.log(fourthVar.toString() + " is a " + typeof fourthVar);
  console.log(fifthVar + " is an " + typeof fifthVar);
  console.log(sixthVar + " is an " + typeof sixthVar);
  console.log(seventhVar + " is an " + typeof seventhVar);
  console.log(eighthVar + " is a " + typeof eighthVar);

  /*
   150000 is a number
   Hello is a string
   true is a boolean
   Symbol(some Symbol variable) is a symbol
   null is an object
   undefined is an undefined
   [object Object] is an object
   NaN is a number

   */


  /*
   JavaScript is a loosely typed or dynamic language, meaning you don't need to declare a variable's type ahead of time and the language autmatically determines a variable's type while the program is being processed. That also means that you can reassign a single variable to reference different types. For example:
   */

  function print() {
    console.log(
            "someVariable(" + someVariable
            + ") is a " + typeof someVariable
            );
    // Note: 'typeof' is explained later in this tutorial.
  }

// Declare someVariable and initialize it to the number '5':
  var someVariable = 5;
  print(someVariable);

// Assign the string "Hello" to someVariable:
  var someVariable = "Hello";
  print(someVariable);

// Assign the boolean value 'true' to someVariable:
  var someVariable = true;
  print(someVariable);

// someVariable(5) is a number
// someVariable(Hello) is a string
// someVariable(true) is a boolean





  var _daysCount
  var MinimumCost
  var page10
  var Total_elements
// This will produce "SyntaxError: Unexpected number"
//    var 10Students
// This will produce "SyntaxError: Unexpected token &"
//    var First&Second






// Declare firstVar:
  var firstVar;

// Initialize firstVar:
  firstVar = 1;

// Declare and Initialize secondVar:
  var secondVar = "String";

// Declare thirdVar and fourthVar:
  var thirdVar,
          fourthVar;

// Initialize thirdVar:
  thirdVar = true;

// Initialize fourthVar:
  fourthVar = null;

// Declare and Initialize fifthVar and sixthVar:
  var fifthVar = 1.01,
          sixthVar = "Sixth";

// Declare seventhVar:
  var seventhVar;

  console.log(firstVar);
  console.log(secondVar);
  console.log(thirdVar);
  console.log(fourthVar);
  console.log(fifthVar);
  console.log(sixthVar);
  console.log(seventhVar);

  /*
   1
   String
   true
   null
   1.01
   Sixth
   undefined
   */

  /*
   Coercion
   In JavaScript, you can perform operations on values of different types without raising an exception. The JavaScript interpreter implicitly converts, or coerces, one of the data types to that of the other, then performs the operation. The rules for coercion of string, number, or boolean values are as follows:

   If you add a number and a string, the number is coerced to a string.
   If you add a boolean and a string, the boolean is coerced to a string.
   If you add a number and a boolean, the boolean is coerced to a number.
   */

  function print(name, variable) {
    console.log(
            name + "(" + variable
            + ") is a " + typeof variable
            );
  }

  var someNumber = 10;
  var someString = "Ten";
  var someBoolean = false;

  var sumOfNumberAndString = someNumber + someString;
  var sumOfBooleanAndString = someBoolean + someString;
  var sumOfNumberAndBoolean = someNumber + someBoolean;

  print("sumOfNumberAndString", sumOfNumberAndString);
  print("sumOfBooleanAndString", sumOfBooleanAndString);
  print("sumOfNumberAndBoolean", sumOfNumberAndBoolean);

  /*
   sumOfNumberAndString(10Ten) is a string
   sumOfBooleanAndString(falseTen) is a string
   sumOfNumberAndBoolean(10) is a number
   */
























}

function performOperation(secondInteger, secondDecimal, secondString) {
  const firstInteger = 4;
  const firstDecimal = 4.0;
  const firstString = 'HackerRank ';
  console.log(firstInteger + Number(secondInteger));    // parseInt(someString)       // +(someString)
  console.log(firstDecimal + Number(secondDecimal));    // parseFloat(someString)     // +(someString)
  console.log(firstString + secondString);              // s + s2                     // s.concat(s2)

}

/*
 Operator Types

 unary
 operand operator
 operator operand

 Binary
 operand1 operator operand2

 Ternary
 There is one ternary operator, the conditional operator.
 a ? b : c


 Arithmetic Operators

 2 + 3 // evaluates to 5
 4 + 10 // evaluates to 14

 3 - 2 // evaluates to 1
 4 - 10 // evaluates to -6

 3 * 2 // evaluates to 6
 4 * 10 // evaluates to 40

 6 / 3 // evaluates to 2
 3 / 2 // evaluates to 1.5
 4 / 10 // evaluates to 0.4


 6 % 3 // evaluates to 0
 3 % 2 // evaluates to 1
 4 % 10 // evaluates to 4


 2 ** 3 // evaluates to 8
 3 ** 2 // evaluates to 9
 5 ** 4 // evaluates to 625


 -4 // evaluates to -4
 -(-5) // evaluates to 5 (not --5)


 +4 // evaluates to 4
 +(-4) // evaluates to -4


 a= 5

 a++
 ++a
 a--
 --a



 */


function func1() {
  console.log(1 == 1);
  console.log(1 == "1");
  console.log('1' == 1);
  console.log(0 == false);
  console.log(0 == null);
  console.log(0 == undefined);
  console.log(null == undefined);

  /*
   true
   true
   true
   true
   false
   false
   true
   */


  console.log(1 != 1);
  console.log(1 != "1");
  console.log('1' != 1);
  console.log(0 != false);
  console.log(0 != null);
  console.log(0 != undefined);
  console.log(null != undefined);

  /*
   false
   false
   false
   false
   true
   true
   false
   */


  var variable1 = new MyObject(":)");
  var variable2 = new MyObject(":)");

  console.log(variable1.magic + " == " + variable2.magic + " evaluates to " + (variable1 == variable2));
  variable1 = variable2;
  console.log(variable1.magic + " == " + variable2.magic + " evaluates to " + (variable1 == variable2));
// :) == :) evaluates to false
// :) == :) evaluates to true


// Identity or Strict Equality (===)
  console.log(1 === 1);
  console.log(1 === "1");
  console.log('1' === 1);
  console.log(0 === false);
  console.log(0 === null);
  console.log(0 === undefined);
  console.log(null === undefined);

// true
// false
// false
// false
// false
// false
// false

// Non-Identity or Strict Inequality (!==)
  console.log(1 !== 1);
  console.log(1 !== "1");
  console.log('1' !== 1);
  console.log(0 !== false);
  console.log(0 !== null);
  console.log(0 !== undefined);
  console.log(null !== undefined);
// false
// true
// true
// true
// true
// true
// true


// Relational Operators
  console.log(5 > 5);
  console.log(5 >= 5);
  console.log(7 < 6);
  console.log(4 <= 6);

// false
// true
// false
// true


// Logical Operators
// Logical AND (&&)
// Logical OR (||)
// Logical NOT (!)

  console.log((5 < 7) && (4 < 4))
  console.log((5 < 7) && (4 >= 4))
  console.log((5 < 7) || (4 < 4))
  console.log((5 >= 7) || (4 > 4))
  console.log(!(2 ** 3))
// false
// true
// true
// false
// false


  /*
   // Short-Circuit Evaluation

   false && expression
   true || expression
   */
}





/*
 if (condition) {
 statement1;
 }
 else {
 statement2;
 }


 if (condition1) {
 statement1;
 statement4;
 statement5;
 }
 else {
 statement2;
 statement3;
 if (condition2) {
 statement6;
 }
 }


 if (condition1) {
 statement1;
 }
 else if (condition2) {
 statement2;
 }
 else if (conditionN) {
 statementN;
 }
 else {
 statementLast;
 }

 */
function classifyAge(age) {
  /* First, let's check the lower bound on our age range: */
  if (age < 13) {
    return age + " is a child.";
  }
  /* If this condition is checked, we know that age < 13 is false: */
  else if (age < 20) {
    return age + " is a teenager.";
  }
  /* If this condition is checked, we know both of these are false:
   *   age < 13 is false
   *   age < 20 is false
   *  This tells us that either age >= 20 is true, or age is not a number:
   */
  else if (age >= 20) {
    return age + " is an adult.";
  }
  /* The input wasn't a number. */
  else {
    return "Your input must be an integer.";
  }
}




function aaaa() {

  /*
   Falsy Values
   The following six values are known as Falsy values, meaning they evaluate to false:

   false
   undefined
   null
   0
   NaN
   "" (i.e., the empty string)
   */


  var a = true;
  var b = new Boolean(false);
  var c = "";

  console.log(a);
  console.log(b);
  console.log("\"" + c + "\"");

  if (a) {
    console.log("Hello from a");
  }

  if (b) {
    console.log("Hello from b");
  }

  if (c) {
    console.log("Hello from c");
  } else {
    console.log("c is false");
  }

  /*
   true
   [Boolean: false]
   ""
   Hello from a
   Hello from b
   c is false
   */


// Conditional (Ternary) Operator
//    condition ? trueStatement : falseStatement

  var input = 4;

  // Example 1:
  input % 2 == 0 ? console.log(input + " is EVEN") : console.log(input + " is ODD");

  // Example 2:
  console.log(input + " is " + ((input % 2 == 0) ? "EVEN" : "ODD"));

  // Example 3:
  var parity = input % 2 == 0 ? "EVEN" : "ODD";
  console.log(input + " is " + parity);

  /*
   4 is EVEN
   4 is EVEN
   4 is EVEN
   */






  /*
   switch (expression) {
   case label1:
   statement1;
   break;
   case label2:
   statement2;
   break;
   case label3:
   statement3;
   statement4;
   break;
   default:
   statement;
   }
   */



  var n = 3;

  switch (n) {
    case 1:
      console.log("A");
      break;
    case 2:
      console.log("B");
      break;
    case 3:
      console.log("C");
      break;
    case 4:
      console.log("D");
      break;
    default:
      console.log("E");
  }

  // C

  var n = parseInt(readLine());

  switch (n) {
    case 2:
      console.log("A");
      break;
    case 3:
      console.log("B");
      break;
    case 4:
      console.log("C");
      break;
    case 5:
      console.log("D");
      break;
    default:
      console.log("E");
  }

  /*
   C
   D
   E
   */


  switch (n) {
    case 2:
    case 4:
    case 6:
      console.log("A");
      break;
    case 3:
    case 5:
    case 7:
      console.log("B");
      break;
    default:
      console.log("C");
  }


}



/**
 *   Calculate the area of a rectangle.
 *
 *   length: The length of the rectangle.
 *   width: The width of the rectangle.
 *
 *	Return a number denoting the rectangle's area.
 **/
function getArea(length, width) {
  let area = length * width;
  return area;
}

/**
 *   Calculate the perimeter of a rectangle.
 *
 *	length: The length of the rectangle.
 *   width: The width of the rectangle.
 *
 *	Return a number denoting the perimeter of a rectangle.
 **/
function getPerimeter(length, width) {
  let perimeter = 2 * (length + width);
  return perimeter;
}


// const getArea = (length, width) => length * width;
// const getPerimeter = (length, width) => 2 * (length + width);




function greetings(name) {
  console.log("Hello, " + name);
}

function sum(a, b) {
  return a + b;
}

function factorial(n) {
  if (n == 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

function factorial(n) {
  if (n <= 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

// recursive
function factorial(n) {
  if (n > 1) {
    return n * factorial(n - 1);
  }
  // else, n is <= 1
  return 1;
}

var factorial = (num) => {
  for (var i = num - 1; i > 0; i--) {
    num *= i;
  }
  return num;
}

function factorial(n) {
  return (n > 1) ? n * factorial(n - 1) : 1;
}

function factorial(n) {
  var ints = [...Array(n + 1).keys()];
  ints.shift();
  return ints.reduce((a, c) => a * c);
}

// iterative
function factorial(n) {
  let factorial = n;
  while (n-- > 1) {
    factorial = factorial * n;
  }

  return factorial;
}

function factorial(n) {
  // A variable that holds the running value of factorial during calculation
  let factorial = n;

  // Note that this loop decrements the value of n during each iteration
  while (n-- > 1) {
    factorial = factorial * n;
  }

  return factorial;
}

// Unnamed Function Expression
// unnamed function
var square = function (x) {
  return x * x;
};

// Named Function Expression

var math = {
  // Declare the factorial property
  factorial:
          // Declare the function as the property's value
                  function factorial(n) {
                    if (n > 1) {
                      return n * factorial(n - 1);
                    }
                    // Returns 1 if n <= 1
                    return 1;
                  }
        };

var fib = function fibonacci(n) {
  if (n > 2) {
    return fibonacci(n - 1) + fibonacci(n - 2);
  } else if (n < 1) {
    return 0;
  }
  // else, return 1
  return 1;
}

// Recursion

// splitting a problem into two parts:
//    a base case and
//    a recursive case

// Multiply 'n' by 'k' using addition:
function nTimesK(n, k) {
  // Print current value of n
  System.out.println("n: " + n);
  console.log(n);

  // Recursive Case
  if (n > 1) {
    return k + nTimesK(n - 1, k);
  }
  // Base Case n = 1
  else {
    return k;
  }
}

function asdasdads() {
  const PI = Math.PI

  let r = 2;
  let area = PI * (r ** 2);
  let perimeter = 2 * PI * r;

  console.log(area);
  console.log(perimeter);
}


var myglobalvar1 = 2;
function vvvvvvvvvvvvvvvvvv() {

  // Variable Declaration Keywords

  // var
  //    declares variable(s)
  //    scope is within the context wherever it was declared.
  //        declared outside any function   means they are globally available throughout the program.
  //        declared within a function      means they are     only available within the function itself.

  var localvar1 = 3;
}


function lllllllllllll(input) {
  // let
  //      to declare variables that are limited in scope to the block, statement, or expression in which they are used.

  let a = 1;
  // let a = 1.2; // error

  if (a) {
    // this a is with this if-scope
    let a = 2;
    console.log("if(a): " + a);     // 1
  }

  console.log("main(a): " + a);       // 2
}

function ccccccccccccccccccccc() {

  // const

  //  to create a read-only reference to a value
  //    value referenced by this variable cannot be reassigned
  //    the value referenced by a constant variable cannot be reassigned
  //    requires that constant variables always be initialized.

  const a = input;

  // This will throw "SyntaxError: Missing initializer in const declaration"
//    const b;

}



function getGrade(score) {
  let grade;

  if (score > 25 && score <= 30) {
    grade = 'A'
  } else if (score > 20 && score <= 25) {
    grade = 'B'
  } else if (score > 15 && score <= 20) {
    grade = 'C'
  } else if (score > 10 && score <= 15) {
    grade = 'D'
  } else if (score > 5 && score <= 10) {
    grade = 'E'
  } else if (score > 0 && score <= 5) {
    grade = 'F'
  }

  return grade;
}

function getLetter(s) {
  let letter;

  switch (s[0]) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      letter = 'A';
      break;
    case 'b':
    case 'c':
    case 'd':
    case 'f':
    case 'g':
      letter = 'B';
      break;
    case 'h':
    case 'j':
    case 'k':
    case 'l':
    case 'm':
      letter = 'C';
      break;
    case 'n':
    case 'p':
    case 'q':
    case 'r':
    case 's':
    case 't':
    case 'v':
    case 'w':
    case 'x':
    case 'y':
    case 'z':
      letter = 'D';
      break;
  }

  return letter;
}

function setaaaaaaaaaaaaaaaaaaaa(s) {
  let letter;
  var mySet1 = new Set(['a', 'e', 'i', 'o', 'u']);
  if (mySet1.has(s[0])) {
    letter = 'A';
  }
  return letter;
}

// let isVowel = Set.prototype.has.bind(new Set('aeiou'));

function regexaaaaaaaaaaaAAA() {
  let s = "";
  if (s.match(/^[n, p-t, v-z]/) != null) {
  }

  if ("abc".match(/^[aeiou]/)) {
  }

  "abc".match(/[aeiou]/g).map(e => console.log(e));

  if (new RegExp(/[aeiou]/gi).test(first)) {
  }

  return s[0]
          .replace(/[aeiou]/, "A")
          .replace(/[bcdfg]/, "B")
          .replace(/[hjklm]/, "C")
          .replace(/[a-z]/, "D");
}

function getLetteraaaaaaaaaaaaaaa(s) {
  let letter;
  // Write your code here
  switch (s.charAt(0)) {
    case 'a' || 'e' || 'i' || 'o' || 'u':
    {
      return letter = 'A';
    }
    case 'b' || 'c' || 'd' || 'f' || 'g':
    {
      return letter = 'B';
    }
    case 'h' || 'j' || 'k' || 'l' || 'm':
    {
      return letter = 'C';
    }
    default:
    {
      return letter = 'D';
    }
  }

  return letter;
}

function getLetteraaaaaaaaaaaaaaaaa(s) {
  let l = s.charAt(0);
  var a = ['a', 'e', 'i', 'o', 'u'];
  var b = ['b', 'c', 'd', 'f', 'g'];
  var c = ['h', 'j', 'k', 'l', 'm'];
  return a.filter(w => w == l).length > 0 ? 'A' : b.filter(w => w == l).length > 0 ? 'B' : c.filter(w => w == l).length > 0 ? 'C' : 'D';
}

/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/

function getSecondLargest(a) {
  let max1 = -1;
  let max2 = -1;

  for (let i = 0; i < 2; i++) {
    for (let e of a) {
      if (e > max1) {
        max2 = max1;
        max1 = e;
      } else if (e == max1) {
      } else {
        if (e > max2) {
          if (max2 != max1) { // not duplicate 2nd
            max2 = e;
          }
        }
      }
    }
  }

  return max2;
}


function arrayaaaaaaaaaaaa() {
// arrays





  Array.isArray([1, 2, 3]);  // true
  Array.isArray({foo: 123}); // false
  Array.isArray('foobar');   // false
  Array.isArray(undefined);  // false


  var a = ['first', 'second'];

  console.log('a\'s contents:', a);
  console.log('a\'s length:', a.length);




  a.forEach(function (e, i, array) {
    // 'i' is the index
    // 'e' is the element
    console.log(i + ' ' + e);
  });

  var a = ['first', 'second'];

// Append 'third' to array 'a'
  a.push('third');

  console.log('a:', a);
  var a = ['first', 'second', 'third'];
  console.log('Original Array:', a);

// Insert element at the beginning of the array
  a.unshift('fourth');

  console.log('Modified Array:', a);


  var a = ['first', 'second', 'third'];
  console.log('Original Array:', a);

// Remove the last element from the array
  let removed = a.pop();

  console.log('Modified Array:', a);
  console.log('Removed Element:', removed);


  var a = ['first', 'second', 'third'];
  console.log('Original Array:', a);

// Remove the first element from the array
  let removed = a.shift();

  console.log('Modified Array:', a);
  console.log('Removed Element:', removed);


  var a = ['first', 'second', 'third', 'fourth'];

  let position = a.indexOf('second');

  console.log('a:', a);
  console.log('position:', position);

  var a = ['first', 'second', 'third', 'fourth', 'fifth'];
  console.log('Original Array:', a);

  let position = 1;
  let elementsToRemove = 2;
// Remove 'elementsToRemove' element(s) starting at 'position'
  a.splice(position, elementsToRemove);

  console.log('Modified Array:', a);



  var a = ['first', 'second', 'third', 'fourth'];
  console.log('a:', a);

// Shallow copy array 'a' into a new object
  let b = a.slice();

  console.log('b:', b);


  var a = ['c', 'a', 'd', 'b', 'aa'];
  var b = [9, 2, 13, 7, 1, 12, 123];

// Sort in ascending lexicographical order using a built-in
  a.sort();   // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  b.sort();

  console.log('a:', a);
  console.log('b:', b);


  var a = ['c', 'a', 'd', 'b', 'aa'];

// Sort in descending lexicographical order using a compare arrow function
  a.sort((x, y) => x < y);

  console.log('a:', a);



  var a = ['first', 'second', 'third', 'fourth'];

  for (let e of a) {
    console.log('e:', e);
  }






























}








function getSecondLargest(nums) {
  const max = Math.max(...nums)
  return Math.max(...nums.filter(x => x !== max))
}

let max = Math.max(...nums);

//   let vowels = s.split('').filter(x => /[aeiou]/i.test(x));

/*
 var arr = s.split('');
 const VOWELS = "aeiou";
 var consArr = arr.filter((val, index, arr) => {
 if (VOWELS.includes(val)) {
 console.log(val);
 } else {
 return val;
 }
 });
 */

// .reverse
//     console.log(consArr.join('\n'));
//    arr.forEach(c => console.log(c))


/*
 loops
 for
 while
 do-while
 for-in
 for-of

  // ------------------------------------------------------------
  // for
  // ------------------------------------------------------------

  for (initialization; condition; finalExpression) {
    statement(s);
  }
*/
  const arr = ['a', 'b', 'c', 'd'];
  for (let i = 0; i < arr.length; i++) {
      console.log('arr[' + i + ']: ' + arr[i]);
  }

/*
  // ------------------------------------------------------------
  // while   &   do-while
  // ------------------------------------------------------------
  while (condition) {
    statement(s);
  }

  do {
    statement(s);
  } while (condition);
*/
  var i = 1;
  do {
    process.stdout.write(i + " ");
    i++;
  } while (i <= input);


/*
  // ------------------------------------------------------------
  // for-in
  // ------------------------------------------------------------
  // This loop iterates (in an arbitrary order) over the name of each enumerable property in an object, allowing statements to be executed for each distinct property.
  for (let key1 in obj1) {
    console.log(key1 + ' ' + obj1[key1]);
  }
  for (let index1 in arr1) {
    console.log(index1 + ' ' + arr1[index1]);
  }
*/

  var actress = {
    firstName: "Julia",
    lastName: "Roberts",
    dateOfBirth: "October 28, 1967",
    nationality: "American",
    firstMovie: "Satisfaction"
  };
  for (var property in actress) {
    console.log("actress." + property + " = " + actress[property]);
  }

  const arr1 = ['first', 'second', false];
  for (let index1 in arr1) {
    console.log(index1 + ' ' + arr1[index1]);
  }

/*
  // ------------------------------------------------------------
  // for-of
  // ------------------------------------------------------------
  //      loop iterates over iterable objects such as an Array, Map, Set, String, TypedArray, arguments object, etc.
  for (let variable of iterable) {
    statement(s);
  }
*/
  for (let value of array) {
    console.log(value);
  }

  let actress = new Map([
    ["firstName", "Julia"],
    ["lastName", "Roberts"],
    ["dateOfBirth", "October 28, 1967"],
    ["nationality", "American"],
    ["firstMovie", "Satisfaction"]
  ]);

  // Print each Key-Value pair in the map
  for (let info of actress) {
    console.log(info);
  }

  // Print each Key and Value as "Key: Value"
  console.log();
  for (let info of actress) {
    console.log(info[0] + ": " + info[1]);
  }


  // ------------------------------------------------------------
  // forEach
  // ------------------------------------------------------------
  const arr = ['a', 'b', 'c', 'd'];

  arr.forEach((value) => {
      console.log('value:', value);
  });

  arr.forEach((value, index) => {
      console.log('index', index, 'has a value of', value);
  });

  arr.forEach((value, index, array) => {
      console.log('index', index, 'has a value of', value,
      'which correlates to array[' + index + ']:', array[index]);
  });

  // ------------------------------------------------------------




/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {

  for (let i = 0; i < 2; i++) { // 0 print vowels, 1 print consonants
    for (let ch of s) {
      switch (ch) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
          if (i == 0) {
            console.log(ch);
          }
          break;
        default:
          if (i == 1) {
            console.log(ch);
          }
          break;
      }
    }
  }

}

//     v.push(...c);

function arrow_functions_aaaaaaaaaaaaaaaaa(nums) {

    // Arrow Functions in JavaScript
    //      These expressions lexically bind the 'this' value
    //      while using
    //            less syntax than
    //            a typical function expression.
    //        Arrow functions are always anonymous.
    
    
    /*
    parameter   =>
    (parameter) =>
    (param1, param2, ..., paramN)       =>  expression
                                        => {return expression}
                                        => {statements}   
    */


const pp   =  arg  => console.log(arg);
const pp2  = (arg) => console.log(arg);
const ppr  =  arg  => { console.log(arg); return 1};
const ppr2 = (arg) => { console.log(arg); return 1};

const square  =  n  => n*n;
const square2 = (n) => n*n;
const cube    =  n  => { return n*n*n };
const cube2   = (n) => { return n*n*n };

// const sum  =  a, b  => a + b; // error
const sum  = (a, b) => a + b;
const prod = (a, b) => { return a * b };

pp("\nhello");
pp2("\nhello");
console.log(ppr("\nhello"));
console.log(ppr2("\nhello")); pp("\n");

pp(square(5));
pp(square2(5));
pp(cube(5));
pp(cube2(5)); pp("\n");

pp(sum(2, 3));
pp(prod(2, 3)); pp("\n");

const makeArray = (...values) => { return values };
console.log('Array:', makeArray(1, 2, 3, 4));

}


function map_aaaaaaaa() {
  
  // [ 1, 1.4142135623730951, 1.7320508075688772, 2 ]
  // [ 1, 1.4142135623730951, 1.7320508075688772, 2 ]
  // [ 1, 1.4142135623730951, 1.7320508075688772, 2 ]
  const arr0 = [1,2,3,4].map(Math.sqrt); // works since sqrt takes single argument
  const arr1 = [1,2,3,4].map(val => Math.sqrt(val));
  const arr2 = [1,2,3,4].map((val, index, arr) => Math.sqrt(val), this); // full syntax
  // [ 5, 6, 5, 6, 5 ]
  const accLenArr2 = ['first', 'second', 'third', 'fourth', 'fifth'].map(s => s.length);
  let accEvenTwiceOddThriceArr = nums.map(x => ((x % 2 === 0) ? 2 * x : 3 * x) );

  const pp   =  arg  => console.log(arg);
  pp(arr0);
  pp(arr1);
  pp(arr2); pp("\n");
  pp(accEvenTwiceOddThriceArr);
}

function reduce_aaaaaaaaaa() {
  // reduce
  // arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])


  // 6
  // 6
  // 6
  // 106
  let acc1 = [1, 2, 3].reduce((accumulator, currentValue) => accumulator + currentValue);
  let acc2 = [1, 2, 3].reduce((accumulator, currentValue, currentIndex, array) => accumulator + currentValue);
  let acc3 = [1, 2, 3].reduce((accumulator, currentValue, currentIndex, array) =>  accumulator + currentValue, 0); // initial value 0
  let acc4 = [1, 2, 3].reduce((accumulator, currentValue, currentIndex, array) =>  accumulator + currentValue, 100); // initial value 100
  // 6
  var acc5 = [{x: 1}, {x: 2}, {x: 3}].reduce((accumulator, currentValue) => accumulator + currentValue.x,0);
  // [ 0, 1, 2, 3, 4, 5 ]
  var acc6Arr1 = [[0, 1, 2, 3], [4, 5]].reduce(  ( accumulator, currentValue ) => accumulator.concat(currentValue),  []);
  // { Ali: 2, Bob: 1, Tif: 1, Bru: 1 }
  var acc7Obj1 = ['Ali', 'Bob', 'Tif', 'Bru', 'Ali'].reduce(function (obj1, name) { (obj1[name] === undefined)? obj1[name] = 1: obj1[name]++;  return obj1;}, {});
  // [ 'a', 'b' ]
  var acc6UniqArr1 = ['a', 'b', 'a', 'b'].reduce((accumulator, currentValue) => { if (accumulator.indexOf(currentValue) === -1) { accumulator.push(currentValue); }  return accumulator; }, [])
  // 3
  let acc7Max1 = [1, 2, 3].reduce((accumulator, currentValue) => Math.max(accumulator, currentValue), Number.MIN_SAFE_INTEGER); //  (-(2^53 - 1))

  const pp   =  arg  => console.log(arg);
  pp(acc1); pp("\n");
  pp(acc2); pp("\n");
  pp(acc3); pp("\n");
  pp(acc4); pp("\n");
  pp(acc5); pp("\n");
  pp(acc6Arr1); pp("\n");
  pp(acc7Obj1); pp("\n");
  pp(acc6UniqArr1); pp("\n");
  pp(acc6UniqArr1); pp("\n");
  pp(acc7Max1); pp("\n");
  
  
  
  // reduceRight
  // arr.reduceRight(callback(accumulator, currentValue[, index[, array]])[, initialValue])
  // arr.reduceRight(callback                                             [, initialValue])


  console.log( ['1', '2', '3', '4', '5'].reduce(function(prev, cur)      { return prev + cur; })   );  // "12345"
  console.log( ['1', '2', '3', '4', '5'].reduceRight(function(prev, cur) { return prev + cur; })   );  // "54321"

  // right to left, but  same as left-to-right  as reduce    - for this scenario
  console.log([1, 2, 3, 4].reduceRight(function(accumulator, currentValue, index, array) {  return accumulator + currentValue; })  );
  console.log([1, 2, 3, 4].reduceRight(function(accumulator, currentValue, index, array) {  return accumulator + currentValue; }, 10)  );

  // Flatten an array of arrays - not same as reduce
  const array1 = [[0, 1], [2, 3], [4, 5]].reduceRight( (accumulator, currentValue) => accumulator.concat (currentValue), [] ); // expected output: Array [4, 5, 2, 3, 0, 1]
  console.log(array1);
  /*
    Function Composition is way in which result of one function can be passed to another and so on.
      h(x) = f(g(x))    // Function execution happens right to left
  */
  
  const compose = (...args) => (value) => args.reduceRight((accumulator, currentValue) => currentValue(accumulator), value)
  const inc  = (n) => n + 1; // increment n by 1
  const dbl  = (n) => n * 2; // double n
  console.log( compose(dbl, inc)(2)) // 6
  console.log( compose(inc, dbl)(2)) // 5
  // https://developer.mozilla.org/en-US/profiles/pgmreddy
  
  
  
  
  
  
  
  
  
  
  
  
  
}

function filter_aaaaaaaaa() {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

  // [ 3, 4 ]
  // [ 2, 4 ]
  // [ 'abc', 'hijk' ]
  const arr0 = [1,2,3,4].filter(_ => _>2);
  const arr1 = [1,2,3,4].filter(val => val>2);
  const arr2 = [1,2,3,4].filter((val, index, arr) => val%2==0, this); // full syntax
  const arr3 = ['ab', 'abc', 'de', 'hijk'].filter(word => word.length > 2);

  const pp   =  arg  => console.log(arg);
  pp(arr0);
  pp(arr1);
  pp(arr2);
  pp(arr3)

  function isNumber(obj) {  return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj); }
  var arrToFilter1 = [{ id: 15 }, { id: -1 }, { id: 0 }, { id: 3 }, { id: 12.2 }, {}, { id: null }, { id: NaN }, { id: 'undefined' }];
  const arrFiltered1 = arrToFilter1.filter(obj => isNumber(obj.id) && (obj.id > 0));
  pp(arrFiltered1);

  // [ 'apple', 'grapes' ]
  // [ 'banana', 'mango', 'orange' ]
  var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
  let filterMatches = (arr1, squery) => {  squery = squery.toLowerCase();  let arrRes = arr1.filter((str1) => str1.indexOf(squery) != -1);  return arrRes;  }
  pp(filterMatches(fruits, "ap"));
  pp(filterMatches(fruits, "an"));


}

function filter_aaaaaaaaa() {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

  /*
  false
  true
  true
  false
  */
  const isX1 = [1,2,3,4].every(_ => _>2);
  const isX2 = [3,3,3,4].every(val => val>2);
  const isX3 = [0,2,6,4].every((val, index, arr) => val%2==0, this); // full syntax
  const isX4 = ['ab', 'abc', 'de', 'hijk'].every(word => word.length > 2);

  const pp   =  arg  => console.log(arg);
  pp(isX1);
  pp(isX2);
  pp(isX3);
  pp(isX4);

}

function some__aaaaaaaa () {
  /*
  true
  1
  2
  true
  true
  */

  // stops search if one statisfies condition given
  const isX1 = [3,3,3,4].some(val => val>2);
  const isX2 = [1,2,6,4].some((val, index, arr) => { console.log(val); return val%2==0 }, this); // full syntax
  const isX3 = ['ab', 'abc', 'de', 'hijk'].some(word => word.length > 2);

  const pp   =  arg  => console.log(arg);
  pp(isX1);
  pp(isX2);
  pp(isX3);
}

function find_aaaa() {
  /*
  3
  2
  abc
  */
  // stops search if one statisfies condition given
  const isX1 = [2,1,3,1,1,4].find(val => val>2 );
  const isX2 = [1,2,6,4].find((val, index, arr) => val%2==0, this); // full syntax
  const isX3 = ['ab', 'abc', 'de', 'hijk'].find(word => word.length > 2);

  const pp   =  arg  => console.log(arg);
  pp(isX1);
  pp(isX2);
  pp(isX3);
}

function array____more() {
  
  // new Array(arrayLength)
  Array(7);          // [ , , , , , , ]

  // new Array(element0, element1[, ...[, elementN]])
  //  Array.of(element0[, element1[, ...[, elementN]]])
  //          [element0, element1, ..., elementN]
  Array(1, 2, 3);    //  [1, 2, 3]
  Array.of(1, 2, 3); //  [1, 2, 3]      // The Array.of() method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
  [1,2,3]


  // Array.from(arrayLike[, mapFn[, thisArg]])
  //    creates a new, shallow-copied Array instance from an array-like or iterable object.
  console.log(Array.from('foo'));	// expected output: Array ["f", "o", "o"]
  console.log(Array.from([1, 2, 3], x => x + x));	// expected output: Array [2, 4, 6]

  //  Array from an Array-like object (arguments)
  function f() {  return Array.from(arguments); }
  f(1, 2, 3); // [ 1, 2, 3 ]

  Array.from([1, 2, 3], x => x + x);        // [2, 4, 6]



  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin
  [1, 2, 3, 4, 5].copyWithin(-2);   // [1, 2, 3, 1, 2]
  [1, 2, 3, 4, 5].copyWithin(0, 3);  // [4, 5, 3, 4, 5]
  [1, 2, 3, 4, 5].copyWithin(0, 3, 4);  // [4, 2, 3, 4, 5]
  [1, 2, 3, 4, 5].copyWithin(-2, -3, -1);  // [1, 2, 3, 3, 4]
  [].copyWithin.call({length: 5, 3: 1}, 0, 3);  // {0: 1, 3: 1, length: 5}
  // ES2015 Typed Arrays are subclasses of Array
  var i32a = new Int32Array([1, 2, 3, 4, 5]);
  i32a.copyWithin(0, 2);  // Int32Array [3, 4, 5, 4, 5]
  // On platforms that are not yet ES2015 compliant: 
  [].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4);  // Int32Array [4, 2, 3, 4, 5]





    // Array from a String
    Array.from('foo');  // [ "f", "o", "o" ]

    // Array from a Set
    const set = new Set(['foo', 'bar', 'baz', 'foo']);
    Array.from(set);  // [ "foo", "bar", "baz" ]


    // Array from a Map
    const map = new Map([[1, 2], [2, 4], [4, 8]]);
    Array.from(map);      // [[1, 2], [2, 4], [4, 8]]

    const mapper = new Map([['1', 'a'], ['2', 'b']]);
    Array.from(mapper.values());      // ['a', 'b'];
    Array.from(mapper.keys());      // ['1', '2'];











  // Array.isArray(value)
  Array.isArray([1, 2, 3]);  // true
  Array.isArray({foo: 123}); // false
  Array.isArray('foobar');   // false
  Array.isArray(undefined);  // false

  // better than
  //  arr1 instanceof Array;      // because doesn't work through iframes


  var fruits = ['Apple', 'Banana'];
  
  console.log(fruits.length);   // 2
  var first = fruits[0];    // Apple
  var last = fruits[fruits.length - 1];   // Banana

  fruits.forEach(function(item, index, array) {    console.log(item, index);  });
  // Apple 0
  // Banana 1

  // push/pop - add/remove at-the-end
  var newLength = fruits.push('Orange');  // ["Apple", "Banana", "Orange"]
  var last = fruits.pop();    // ["Apple", "Banana"];
  
  // unshift/ shift - add/remove front
  var first = fruits.shift();   // ["Banana"];  
  var newLength = fruits.unshift('Strawberry');  // ["Strawberry", "Banana"];
  
  fruits.push('Mango'); // ["Strawberry", "Banana", "Mango"]
  var pos = fruits.indexOf('Banana'); // 1
  var removedItem = fruits.splice(pos, 2); // ["Strawberry"]       // index, numberOfItemsToRemove
  
  var shallowCopy = fruits.slice(); // ["Strawberry", "Mango"]
  
  
  





  
  // ["Apple", "Banana"]
  fruits[5] = 'Mango';
  // ["Apple", "Banana", , , , "Mango"]
  console.log(Object.keys(fruits));  // ['0', '1', '5']
  console.log(fruits.length); // 6
  
    // decreasing length, delete elements
    fruits.length = 2;
    console.log(Object.keys(fruits)); // ['0', '1']
    console.log(fruits.length); // 2
  
  
  // arr.fill(value[, start[, end]])
  Array(3).fill(4);                // [4, 4, 4]
  [].fill.call({ length: 3 }, 4);  // {0: 4, 1: 4, 2: 4, length: 3}

  [1, 2, 3].fill(4);               // [4, 4, 4]   // fill all
  [1, 2, 3].fill(4, 1);            // [1, 4, 4]   // fill from index 1
  [1, 2, 3].fill(4, 1, 2);         // [1, 4, 3]   // fill index(es) [1, 2)


  [].fill.call({ length: 3 }, 4);  // {0: 4, 1: 4, 2: 4, length: 3}
  // Objects by reference.
  var arr = Array(3).fill({}) // [{}, {}, {}];
  arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]


  // sort
  // arr.sort([compareFunction])

  console.log(['March', 'Jan', 'Feb', 'Dec'].sort()); // expected output: Array ["Dec", "Feb", "Jan", "March"]
  console.log([1, 30, 4, 21, 100000].sort()); // expected output: Array [1, 100000, 21, 30, 4]
  console.log([1, 30, 4, 21, 100000].sort((a, b) => a - b)); // expected output: [1, 4, 21, 30, 100000 ]
  var items = [
    { name: 'Edward', value: 21 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 }
  ];
  /*
  [ { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Edward', value: 21 }
  ]
  */
  // sort by value
  console.log (items.sort(function (a, b) {  return a.value - b.value; }));
  /*
  [ { name: 'Edward', value: 21 },
    { name: 'Magnetic', value: 13 },
    { name: 'The', value: -12 }
  ]
  */
  // sort by name
  items.sort(function(a, b) {
    var nameA = a.name.toLowerCase();
    var nameB = b.name.toLowerCase();
    if (nameA < nameB) {    return -1;  }
    if (nameA > nameB) {    return 1;  }
    return 0;  // names must be equal
  });

  var items2 = ['réservé', 'premier', 'cliché', 'communiqué', 'café', 'adieu'];
  items2.sort(function (a, b) {  return a.localeCompare(b); }); // items2 is ['adieu', 'café', 'cliché', 'communiqué', 'premier', 'réservé']


  // reverse
  const a = [1, 2, 3];
  a.reverse(); 
  console.log(a); // [3, 2, 1]  

  var array1 = ['one', 'two', 'three'];
  var reversed = array1.reverse(); 
  console.log('reversed: ', reversed);  //  Array ['three', 'two', 'one']

  const a = {0: 1, 1: 2, 2: 3, length: 3};
  Array.prototype.reverse.call(a); //same syntax for using apply()
  console.log(a); // {0: 3, 1: 2, 2: 1, length: 3}


  // concat
  var array1 = ['a', 'b', 'c'];
  var array2 = ['d', 'e', 'f'];
  console.log(array1.concat(array2)); //  ["a", "b", "c", "d", "e", "f"]

  const letters = ['a', 'b', 'c'];
  const alphaNumeric = letters.concat(1, [2, 3]);
  console.log(alphaNumeric);    // results in ['a', 'b', 'c', 1, 2, 3]

  const num1 = [[1]];
  const num2 = [2, [3]];
  const numbers = num1.concat(num2);
  console.log(numbers);     // results in [[1], 2, [3]]
  num1[0].push(4);  // modify the first element of num1
  console.log(numbers);   // results in [[1, 4], 2, [3]]


  // includes
  console.log([1, 2, 3].includes(2));      // expected output: true
  console.log(['cat', 'dog', 'bat'].includes('cat'));    // expected output: true    
  [1, 2, 3].includes(3, 3);  // false
  [1, 2, 3].includes(1, 3);  // false     // >=array.length is false
  [1, 2, 3].includes(3, -1); // true      // array.length + fromIndex,     for -ve values of fromIndex
  // ??????????
  (function() {
    console.log([].includes.call(arguments, 'a')); // true
    console.log([].includes.call(arguments, 'd')); // false
  })('a','b','c');


  // join    - default seperator is ,
  // If an element is undefined or null, it is converted to the empty string.
  console.log(['Fire'].join());	// expected output: "Fire"
  console.log(['Fire', 'Air', 'Water'].join());	// expected output: "Fire,Air,Water"
  console.log(['Fire', 'Air', 'Water'].join(''));	// expected output: "FireAirWater"
  console.log(['Fire', 'Air', 'Water'].join(', '));	// expected output: "Fire, Air, Water"
  console.log(['Fire', 'Air', 'Water'].join('-'));	// expected output: "Fire-Air-Water"
  console.log([ ['Fire1', 'Air1', 'Water1'], ['Fire2', 'Air2', 'Water2'] ].join('\n') + '\n\n');

  // indexOf
  // arr.indexOf(searchElement[, fromIndex])
  var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
  console.log(beasts.indexOf('giraffe'));	// expected output: -1
  console.log(beasts.indexOf('bison'));	// expected output: 1
  // start from index 2
  console.log(beasts.indexOf('bison', 2));	// expected output: 4
  var array = [2, 9, 9];
  array.indexOf(2);     // 0
  array.indexOf(7);     // -1
  array.indexOf(9, 2);  // 2
  array.indexOf(2, -1); // -1
  array.indexOf(2, -3); // 0
  
  // Finding all the occurrences of an element
  var indices = [];
  var array = ['a', 'b', 'a', 'c', 'a', 'd'];
  var element = 'a';
  var idx = array.indexOf(element);
  while (idx != -1) {
    indices.push(idx);
    idx = array.indexOf(element, idx + 1);
  }
  console.log(indices);
  // [0, 2, 4]



  // lastIndexOf
  // arr.lastIndexOf(searchElement[, fromIndex])
  console.log(['Dodo', 'Tiger', 'Penguin', 'Dodo'].lastIndexOf('Dodo'));// expected output: 3
  console.log(['Dodo', 'Tiger', 'Penguin', 'Dodo'].lastIndexOf('Tiger'));// expected output: 1
  var numbers = [2, 5, 9, 2];
  numbers.lastIndexOf(2);     // 3
  numbers.lastIndexOf(7);     // -1
  numbers.lastIndexOf(2, 3);  // 3
  numbers.lastIndexOf(2, 2);  // 0
  numbers.lastIndexOf(2, -2); // 0
  numbers.lastIndexOf(2, -1); // 3

  // Finding all the occurrences of an element
  var indices = [];
  var array = ['a', 'b', 'a', 'c', 'a', 'd'];
  var element = 'a';
  var idx = array.lastIndexOf(element);
  while (idx != -1) {
    indices.push(idx);
    idx = (idx > 0 ? array.lastIndexOf(element, idx - 1) : -1);
  }
  console.log(indices);
  // [4, 2, 0]


  // toString
  console.log([1, 2, 'a', '1a'].toString());	// expected output: "1,2,a,1a"


  // toSource()
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSource

  // toLocaleString
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString



  // findIndex
  // arr.findIndex(callback(element[, index[, array]])[, thisArg])
  let isGreaterThan10 = element => (element > 10);
  console.log([5, 12, 8, 130, 44].findIndex(isGreaterThan10));	// expected output: 1

  let is12 = element => (element === 12);
  console.log([5, 12, 8, 130, 44].findIndex(is12));	// expected output: 1

  let isEven = (element, index, array)  => (element%2 == 0)
  console.log([3, 5, 7, 1].findIndex(isEven)); // -1, not found
  console.log([1, 4, 6, 8].findIndex(isEven)); // 1       (since array[1] is 4)



  // Iterator object = array.entries()
  var iterator1 = ['a', 'b', 'c'].entries();
  console.log(iterator1.next().value);  // expected output: Array [0, "a"]
  console.log(iterator1.next().value);  // expected output: Array [1, "b"]

  for (const [index, element] of ['a', 'b', 'c'].entries()) {
    console.log(index, element);
  }
  // [0, 'a']
  // [1, 'b']
  // [2, 'c']
  
  var iterator = ['a', 'b', 'c'].entries();
  for (let e of iterator) {
    console.log(e);
  }
  // [0, 'a']
  // [1, 'b']
  // [2, 'c']


  // keys
  // arr.keys()
  //    Key iterator doesn't ignore holesSection
  var array1 = ['a', 'b', 'c'];
  var iterator = array1.keys();   
  for (let key of iterator) {
    console.log(key); // expected output: 0 1 2
  }

  var arr = ['a', , 'c'];
  var sparseKeys = Object.keys(arr);
  console.log(sparseKeys); // ['0', '2']
  var denseKeys = [...arr.keys()];
  console.log(denseKeys);  // [0, 1, 2]


  // values
  // arr.values()
  const array1 = ['a', 'b', 'c'];

  {
    const iterator = array1.values();
    for (const value of iterator) {
      console.log(value); // expected output: "a" "b" "c"
    }
  }
  {
    var iterator = array1.values();
    console.log(iterator.next().value); // a
    console.log(iterator.next().value); // b
    console.log(iterator.next().value); // c
  }

  // Array.prototype[@@iterator]()
  {
    var arr = ['a', 'b', 'c', 'd', 'e'];
    var eArr = arr[Symbol.iterator]();
    // your browser must support for..of loop
    // and let-scoped variables in for loops
    // const and var could also be used
    for (let letter of eArr) {
      console.log(letter);
    }
  }
  {
    var arr = ['a', 'b', 'c', 'd', 'e'];
    var eArr = arr[Symbol.iterator]();
    console.log(eArr.next().value); // a
    console.log(eArr.next().value); // b
    console.log(eArr.next().value); // c
    console.log(eArr.next().value); // d
    console.log(eArr.next().value); // e
  }

}

function exceptionaaaaaaa() {

  function sample() {

    const arr = [1, 4, 3, 4, 5];

    try {
      arr = [4, 2];
      console.log(arr.sort());
    } catch (e) {
      console.log(e.message);
    } finally {
      console.log(arr.sort());
    }

    try {
      throw -1;
      throw false;
      throw "some exception";
      throw new Error("my error");
    } catch (e) {
      console.log(e.message);
    }
  }

  // try catch
  function reverseString(s) {
    try {
      console.log(s.split('').reverse().join(''));
    } catch (e) {
      console.log(e.message);
      console.log(s);
    }
  }

  function isPositive(a) {
    if (a === 0) {
      throw new Error("Zero Error");
    } else if (a < 0) {
      throw new Error("Negative Error");
    } else {
      return "YES";
    }
  }

  function isPositive_2(a) {
    switch (Math.sign(a)) {
      case - 1:
        throw new Error('Negative Error');
        break;
      case 0:
        throw new Error('Zero Error');
        break;
      case 1:
        return "YES";
        break;
    }
  }
}


function objectaaaaaaaa () { 
  /*
  // --------------- objects
  Object: A collection of properties.

  Property:
    An association between a 
      name/key and
        a value

    property is a method
      if value associated with a key is a function

    A property name can be any valid string, or anything that can be converted into a string (including the empty string).


  objectName: {
    propertyName: valueName
  }

  dot notation            objectName.propertyName
  bracket notation        objectName['propertyName']        good for runtime keys, keys with space, hyphen, start with number, etc.

  */


  // ============================= Creating Objects =============================================
  // ============================= Creating Objects =============================================
  // ============================= Creating Objects =============================================

  // ===============  1. Using Object Initializers ===============
  // ===============  1. Using Object Literals ===============

  var prop1 = "val1";
  var keyVar1 = "key1111";
  function getKey1() {
    return 100;
  }

  // Create an object with two properties, 'Name' and 'Age'
  var actor2 = { };
  var actor3 = new Object();
  var actor4 = new Object( { a: 4} );
  var actor5 = Object.create({ a: 4});
  var actor = {
      Name: 'Julia Roberts', 
      Age: 36,
      a: 3, 
      b: 'Rome', 
      c: false,
      [ keyVar1 + getKey1()]: 101,  // ---------------------- Computed  property names (ES2015/ ES6)     in ES5, it is      done after object creation
      prop1,                      // --------------------------------------- Shorthand property names (ES2015/ ES6)      in ES5, it is     prop1: prop1
      foo: function() {
          return this.a * this.a;
      }
      foo2 () {                   // --------------------------------------- Shorthand method names (ES2015/ ES6)        in ES5, it is       foo2: function () {
      }
      length: 3,
      width: 4,
      perimeter: 2 * (3 + 4),
      area: 3 * 4
  };
  actor.d = 4;

  console.log(actor.Name);      // Access object's property
  console.log(actor["Age"]);    // Access object's property
  console.log(actor.prop1);      // Access object's property
  actor.EyeColor = 'Brown';     // Add a new property called 'EyeColor'
  console.log(actor.EyeColor);
  console.log(o44.foo());      // Access object's property
  console.log(actor)            // Access object

  // ===============  2. Using a Constructor Function ===============
  // ===============  2. Using a Functional Classes ===============
  // use  uppper camel case  name
  // Use the new operator to create an instance of the object.

  function g_getFullName() {
      return this.firstName + ' and ' + this.lastName + '.';
  }
  // Constructor Function
  function Cls1(firstName, lastName, Age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.Age = Age;
      this.getFullName1 = g_getFullName;
      this.getFullName_internal_bad = function() {
          // NO - creates this function every time we create a new Fruit object
          return this.firstName + ' and ' + this.lastName + '.';
      }
  }

  // NOTE: object prototype is class

  // prototype property (empty by default) - instance level
  Cls1.prototype.getFullName3 = function() {
      return this.firstName + ' and ' + this.lastName + '.';
  }

  function Derived (firstName) {
    Cls1.call(this, firstName, 'ln1', 5); // inherit constructor - call the constructor with 'this' (Derived) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
  }
  // inheritance - start
  Derived.prototype = Object.create(Cls1.prototype);
  Derived.prototype.constructor = Derived;      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor
  Derived.parent = Cls1.prototype; //  ??????????????????????????? // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype
  // inheritance - end

  var a1 = new Cls1('Julia', 'Roberts', 48);
  var a2 = new Cls1('Kate', 'Winslet', 40);
  console.log('Object \'a1\':', a1);
  console.log('Object \'a2\':', a2);
  console.log(lime.getFullName1());
  console.log(lime.getFullName_internal_bad());
  console.log(lime.getFullName3());


  // singleton
  //  new on anonymous constructor function
  let singletonObj = new Function (firstName, lastName, Age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.Age = Age;
      this.getFullName = function() {
        return this.firstName + ' and ' + this.lastName + '.';
      };
  }
  console.log(singletonObj.getFullName());

  function Rectangle(a, b) {
    // Set the object's properties
    this.length = a;
    this.width = b;
    this.perimeter = 2 * a + 2 * b;
    this.area = a * b;
    
    // This isn't necessary, but it prevents new properties from being added
    // It also prevents the properties we've already set from being modified
    Object.freeze(this);
  }


/*
  hoisting
    can be referenced before they're declared

  An important difference between
    function declarations and
    class declarations
    is that
      function declarations are hoisted
      but class declarations are not.
      
        This means we must first declare our class before attempting to access (or reference) it; if we fail to do so, our code throws a ReferenceError.
*/

  // ES6
  // ===============  3. Using a Class Declarations ===============
  
  /*
  JavaScript classes, introduced in ECMAScript 6, are
    essentially syntactic sugar
    over JavaScript's
      existing prototype-based inheritance
      that don't actually introduce a new object-oriented inheritance model
      This syntax is
        a means of
          more simply and
          clearly
            creating objects and
            deal with inheritance.
  */
  
  class Polygon {
      constructor(height1, width1) {      // The Constructor Method - super is to call parent class in inheritance // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor
          this._height = height1;
          this._width = width1;
      }
      set height(height1) {
        this._height = height1;
      }     
      get width() {
        return this._width;
      }
      getArea() { // Prototype Method
        return height() * width();
        // return this.height * this.width;
      }
      static staticMethod1() {   // call with class name only, not object name......... Polygon.staticMethod1(..)
        return 100;
      }
  }

  class Square extends Polygon {           // <-------------- extends here
    constructor(height1, width1) {
      super(height1, width1);                 // <-------------- super     accesses parent's constructor  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super
    }
    getArea() {
      return super.getArea();              // <-------------- super     to access parent's method
    }
    staticMethod12() {
      super.staticMethod1();                     // <-------------- super     to access parent's static method
    }
  }
  
  
  // extend functional class
  function Animal(name) {
      this.name = name;
  }
  class Dog extends Animal {           // <-------------- extends here on functional class
  }

  // ===============  4. Using a Class Expressions ===============

  // Named Class Expression
  let Polygon = class Polygon {
    // ...
  };

  // Unnamed Class Expression
  let Polygon = class {
    // ...
  };

  let square = new Polygon(4, 4);
  console.log('Polygon:', Polygon);
  console.log('Polygon square:', square);
  console.log('Polygon square:', square.height);
  console.log('Polygon square:', square.width);
  
  
  
  
  

  // ===============  check below===============
  class Rectangle {
    constructor(a, b) {
      this.length = a;
      this.width = b;
      this.area = a * b;
      this.perimeter = 2 * (a + b);
    }
  }

  class Polygon {
    constructor(arrLens1) {
        this.lengthsArray = arrLens1;
    }
    perimeter() {
        let sum = 0;
        for (let l of this.lengthsArray) {
           sum += l;
        }
        return sum;
    }
  }
  
  function Rectangle(a, b) {
      return {
          get length() { return a; },
          get width() { return b; },
          get perimeter() { return 2 * (a + b); },
          get area() { return a * b; }
      }
  }

  function Rectangle(a, b) {
      Object.defineProperty(this, 'length',
        {
          get: () => {              return a;          }
        }
      );
      
      Object.defineProperty(this, 'width',
        {
          get: () => {              return b;          }
        }
      );
      
      Object.defineProperty(this, 'perimeter',
        {
          get: () => {              return 2 * (a + b);          }
        }
      );
      
      Object.defineProperty(this, 'area',
        {
          get: () => {              return a * b;          }
        }
      );
  }
  
  // const rec = new Rectangle(a, b);


}


function getCount(objects) {
    return objects.filter( function(o) { return o.x === o.y; } ).length;
        
    return objects.reduce( (count, o) => count + (o.x === o.y), 0);

  {
    let count = 0;
    objects.forEach(o => { o.x == o.y ? count++:null; });
    return count;
  }
    
  {
      var count = 0;
      for (let key of objects) key.x == key.y ? count++ : null;
      return count;
  }
  
  {
      let count = 0;
      objects.map(obj => obj.x === obj.y ? count++ : null);
      return count;
  }
  
  {
    let count = 0;
    for (let item of objects) {
        if (item.x == item.y)
            count++;
    }
    return count;  
  }
  
  {
    let count = 0;
    for (let o1 of arrObjs) {
      if (o1.key === o1.key) {
        count++;
      }
    }
    return count;
  }
  
  {
    let count = 0;
    for (let i in objects) {
      if (objects[i].x == objects[i].y) {
        count += 1;
      }
    }
    return count;
  }

}

function regex() {
  // English vowels are a, e, i, o, and u.
  /*
    A Regular Expression, or RegEx, is 
       a pattern used to
        match character combinations
        in a string

    /pattern/flags
    new RegExp(pattern[, flags])
    
    A regular expression consists of a 
      pattern string (Regular Expression Patterns)
          constructed using the 
            basic characters we wish to match (e.g., abc), or a 
            combination of basic and special characters (e.g., ab\*c or (\d+)\.\d\*).
        We construct regular expressions by using 2 ways:
          REGULAR EXPRESSION LITERAL
            //         /pattern/flags
            const re = /ab+c/;          // matche a, followed by 1+ b, followed by c
                is a RegEx pattern encosed within forward slashes:
          or
          REGEXP CLASS OBJECTS/ REGEXP OBJECTS
            //         new RegExp(pattern[, flags])
            const re = new RegExp('ab+c');
                      We can write a regular expression string and pass it as an argument to the RegExp constructor:
      and, potentially
      a flag
            //         /pattern/flags
            //         new RegExp(pattern[, flags])
          specifying further detail on
            how the pattern should be matched.

          If specified, flags can have any combination of the following values:
            g: global match.
            i: ignore case.
            m: multiline. Treats beginning (^) and end ($) characters as working over multiple lines.
            u: unicode. Treat pattern as a sequence of unicode code points.
            y: sticky. Matches only from the index indicated by the lastIndex property of this regular expression in the target string.

      Special Characters in Regular Expressions
        Character Sets
            Enclosed within square brackets
              [a-f] will match any lowercase a through f character.
              [abcd] or [a-d]     match any one character from the set {a, b, c, d}
              [^abcd] or [^a-d]   match anything other than the enclosed characters
              a|b matches either a or b
              Boundaries
                  Character	  Matches
                  ^	          Matches beginning of input. If the multiline flag is set to true, also matches immediately after a line break character.
                  $	          Matches end of input. If the multiline flag is set to true, also matches immediately before a line break character.
                  \b	        A zero-width word boundary, such as between a letter and a space.
                  \B	        Matches a zero-width non-word boundary, such as between two letters or between two spaces.

        Character Classes
            Character Sets
            Predefined
              Character	Matches
              .	The period matches any single character, except line terminators (e.g., a newline).
              \d	A single digit character (i.e., [0-9]).
              \D	A single non-digit character (i.e., [^0-9]).
              \w	A single alphanumeric word character, including the underscore (i.e., [A-Za-z0-9_]).
              \W	A single non-word character (i.e., [^A-Za-z0-9_]).
              \s	A single whitespace character. This includes space (), tab (\t), form feed, line feed, and other Unicode spaces.
              \S	A single non-whitespace character (i.e., [^\w]).
        Alteration
        Boundaries
        Grouping and back references
        Quantifiers
        Assertions


  TODO:
  from here:  https://www.hackerrank.com/challenges/js10-regexp-1/topics




  */
  
  // RegExp object that matches any string s that begins and ends with the same vowel
  
  let re = /^([aeiou]).*\1$/;

}

function others1() {
  
  // Bitwise Operators
  let and_value = 2 & 3;
  
  
  /*
  // TODO
  
  https://www.hackerrank.com/challenges/js10-date/problem
  https://www.hackerrank.com/challenges/js10-bitwise/topics
  */

}


















































