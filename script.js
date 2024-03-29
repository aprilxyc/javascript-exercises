
/************************
* Variables and data types

var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;
console.log(lastName);

var fullAge = false;
console.log(fullAge);

var job; // not assign variable
console.log(job); // undefined --> non-existent

// Variable naming rules
job = 'Teacher';
console.log(job);

/****************************
 * Variable mutation and type coercion
 


 var firstName = 'John';
 var age = 28;

 // Type coercion
console.log(firstName + ' ' + age);

var job, isMarried; // declare multiple variables on same line
job = 'teacher';
isMarried = false;

// creates popup / alert
alert(firstName + ' is a ' + age +  ' year old ' + job
+ '. Is he married? ' + isMarried);

// Variable mutation 
// Change value of a variable
age = 'twenty eight';
job = 'driver';

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
*/

/********************* 
var year, yearJohn, yearMark;
now = 2019
ageJohn = 28;
ageMark = 33;

yearJohn = now - ageJohn;
yearMark = now - ageMark;
console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/

/*************
 * Operator precedence
 

 var now = 2018;
 var yearJohn = 1989;
 var fullAge = 18;

 // Minus operator has greater precedence than the comparison operator
 var isFullAge = now - yearJohn >= fullAge; // true
 console.log(isFullAge);

// Grouping
 var ageJohn = now - yearJohn;
 var ageMark = 35;
 var average = (ageJohn + ageMark) / 2;
 console.log(average);

 // Multiple assignments
 var x, y;
 // assignment operator is right to left,
 // hence the below works
 x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
 console.log(x, y);

// More operators
x = x * 2;
x *= 2; // same thing as line 102
console.log(x);
x += 10;
console.log(x);
x = x + 1;
x += 1;
x++; // adds 1 unit to variable
console.log(x);
*/ 

/********
 * CODING CHALLENGE 2
 
 var markMass, johnMass, markHeight, johnHeight;
 markMass = 78;
 markHeight = 1.69;

 johnMass = 92;
 johnHeight = 1.95;

 var markBmiEqn = markMass / (markHeight * markHeight);
 var johnBmiEqn = johnMass / (johnHeight * johnHeight);
console.log(markBmiEqn, johnBmiEqn);

 var isHigher = markBmiEqn > johnBmiEqn;
 
 console.log("Is Mark's BMI higher than John's? " + isHigher)

*/

/**********
 * if / else statements
 

 var firstName = 'John';
 var civilStatus = 'single';
 
 if (civilStatus === 'married') {
     console.log(firstName + ' is married!');
 } else {
     console.log(firstName + ' will hopefully marry soon :)');

 }
 
 var isMarried = true;
 if (isMarried) {
     console.log(firstName + ' is married!');
 } else {
    console.log(firstName + ' will hopefully marry soon :)');
}

 
var markMass, johnMass, markHeight, johnHeight;
markMass = 78;
markHeight = 1.69;

johnMass = 92;
johnHeight = 1.95;

var markBmiEqn = markMass / (markHeight * markHeight);
var johnBmiEqn = johnMass / (johnHeight * johnHeight);
console.log(markBmiEqn, johnBmiEqn);

if (markBmiEqn > johnBmiEqn) {
    console.log('Mark\'s BMI is higher than John\'s.');
} else {
    console.log('Johns\'s BMI is higher than Marks\'s.');
}

//var isHigher = markBmiEqn > johnBmiEqn;

//console.log("Is Mark's BMI higher than John's? " + isHigher)

*/

/********
 * Boolean logic

 var firstName = 'John';
 var age = 20;

 if (age < 13) {
     console.log(firstName + ' is a boy.');
 } else if (age >= 13 && age < 20) {
     console.log(firstName + ' is a teenager.');
 } else if (age >= 20 && age <= 30) {
    console.log(firstName + ' is a young man.');
 } else {
     console.log(firstName + ' is a man.');
 }

 */

 /**********
  * The Ternary Operator and Switch Statements
  

  var firstName = 'John';
  var age = 14;

  age >= 18 ? console.log(firstName + ' drinks beer.')
  : console.log(firstName + ' drinks juice.');

  // ternary operator alternative way of writing conditionals
  var drink = age >= 18 ? 'beer' : 'juice';
  console.log(drink);

  // without ternary operator
  if (age >= 18) {
      var drink = 'beer';
  } else {
      var drink = 'juice';
  }

  // Switch statement
  var job = 'instructor';
  switch(job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites');
        break;
    default:
        console.log(firstName +  ' does something else.');
    }

switch(true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.')
}

*/

/*****
 * Truthy and falsy values eand equality operators
 

 // falsy values: undefined, null, 0, '', NaN
 // truthy values: NOT falsy values

 var height = 23;

 if (height || height === 0) {
     console.log('Variable is defined');
 } else {
     console.log('Variable has NOT been defined');
 }

 // Equality operators

 if (height === '23') {
    console.log('The == operator does type coercion!');
 }

 */

 /*******
  * CODING CHALLENGE 2
  

  var johnTeamAvg = (89 + 120 + 103) / 3;
  var mikeTeamAvg = (116 + 300 + 123) / 3;
  var maryTeamAvg = (97 + 134 + 105) / 3;

  if (johnTeamAvg > mikeTeamAvg && johnTeamAvg > maryTeamAvg) {
      console.log('John\s team average is greater than both');
  } else if (mikeTeamAvg > johnTeamAvg && mikeTeamAvg > maryTeamAvg) {
      console.log('Mike\s team average is greater.');
  } else if (maryTeamAvg > mikeTeamAvg && maryTeamAvg > johnTeamAvg) {
      console.log('Mary\s team average is greater than both.');
  } else {
      console.log('The team average is the same.')
  }

  */

  /******
   * Functions
   

   function calculateAge(birthYear) {
        return 2018 - birthYear;
   }

   var ageJohn = calculateAge(1990);
   var ageMike = calculateAge(1948);
   var ageJane = calculateAge(1969);

   console.log(ageJohn, ageMike, ageJane);

   function yearsUntilRetirement(year, firstName) {
       
        var age = calculateAge(year);
        var retirement = 65 - age;

        if (retirement > 0) {
        console.log(firstName + ' retire in ' +
        retirement + ' years.');
        } else {
        console.log(firstName + ' is already retired.');
        }
    }

   yearsUntilRetirement(1990, 'John');
   yearsUntilRetirement(1948, 'Mike');
   yearsUntilRetirement(1969, 'Jane');

   */

   /*****
    * Function statements and expressions

    // This is a FUNCTION DECLARATION
    function whatDoYouDo(job, firstName) {


    }

    // This is a FUNCTION EXPRESSION
    var whatDoYouDo = function(job, firstName) {
        switch(job) {
            case 'teacher':
                return firstName + ' teaches kids how to code.';
            case 'driver':
                return firstName + ' drives a cab in Lisbon';
            case 'designer':
                return firstName + ' designs beautiful websites';
            default:
                return firstName + ' does something else';
        }
    }

    console.log(whatDoYouDo('teacher', 'John'));
    console.log(whatDoYouDo('designer', 'Mark'))
    console.log(whatDoYouDo('retired', 'Jane'));

    */

    /************
     * Arrays
     

     // Initialise new array
     var names = ['John', 'Mark', 'Jane'];
     var years = new Array(1990, 1969, 1948); // used less

     console.log(names);
     console.log(names.length);

     // Mutate array data
     names[1] = 'Ben';
     names[names.length] = 'Mary';
     console.log(names); 

     // Different data types in one array
     var john = ['John', 'Smith', 1990, 'designer', false]; 

     john.push('blue'); // adds blue to end of the array
     john.unshift('Mr'); // adds to the front of the array
     console.log(john);

     john.pop();
     john.pop();
     john.shift();
     console.log(john);
    console.log(john.indexOf(1990)); // returns which position 1990 appears in array
    // tests if element in array or not 
    // For example, using the ternary operator:
    var isDesigner = john.indexOf('designer') === -1 ? ' John is NOT a designer' : 'John IS a designer';
    console.log(isDesigner);

    */

    /*********
     * CODING CHALLENGE 2
     

     function tipCalculator(billTotal) {
         if (billTotal < 50) {
             var tip = 0.2 * billTotal;
             return tip;
         } else if (billTotal >= 50 && billTotal <= 200) {
             var tip = 0.15 * billTotal;
             return tip;
         } else {
             var tip = 0.1 * billTotal;
             return tip;
         }
     }

     var tip1 = tipCalculator(124);
     var tip2 = tipCalculator(48);
     var tip3 = tipCalculator(268);

     var tipsArray = [tip1, tip2, tip3];
     var billsArray = [tip1 + 124, tip2 + 48, tip3 + 268];
     console.log(tipsArray, billsArray);

     */

     /*********
      * Objects and properties
      
     // In arrays, the order matters a lot. In objects, order does not matter at all.

     var john = {
         firstName: 'John', // first name is property of john object
         lastName: 'Smith',
         birthYear: 1990,
         family: ['Jane', 'Mark', 'Bob', 'Emily'],
         job: 'teacher',
         isMarried: false
     };

     console.log(john); //print the properties of the john object
     console.log(john.firstName);
     console.log(john['lastName']) // access via data
     var x = 'birthYear';
     console.log(john[x]);

     john.job = 'designer';
     john['isMarried'] = true;
     console.log(john);

     // 2 ways to create new objects

     var jane = new Object();
     jane.firstName = 'Jane';
     jane.birthYear = 1969;
     jane['lastName'] = 'Smith';
     console.log(jane);

     */

     /******
      * Objects and methods

     var john = {
        firstName: 'John', // first name is property of john object
        lastName: 'Smith',
        birthYear: 1990,
        family: ['Jane', 'Mark', 'Bob', 'Emily'],
        job: 'teacher',
        isMarried: false,

        // This is a method that uses a function expression
        calcAge: function() {
            this.age = 2018 - this.birthYear;
            // this keyword refers to John's birth year
        }
    };

    john.calcAge();
    console.log(john);

    */

    /****
     * CODING CHALLENGE 4
     

     var Mark = {
         fullName: 'John Smith',
         mass: 110,
         height: 1.95,

         calcBMI: function() {
             this.BMI = this.mass / (this.height * this.height);
             return this.BMI;
         }
     }

     var John = {
         fullName: 'Mark Miller',
         mass: 78,
         height: 1.69,

         calcBMI: function() {
            this.BMI = this.mass / (this.height * this.height);
            return this.BMI;
     }
    }

    if (Mark.calcBMI() > John.calcBMI()) {
        console.log(Mark.fullName + ' has a greater BMI of ' + Mark.BMI
    + ' whereas ' + John.fullName + ' has a lower BMI of ' + John.BMI);
    } else if (John.calcBMI() > Mark.calcBMI()) {
        console.log(John.fullName + ' has a greater BMI of ' + John.BMI
    + ' whereas ' + Mark.fullName + ' has a lower BMI of ' + Mark.BMI);
    } else {
        console.log('They have the same BMI of ' + Mark.BMI + ' and ' 
    + John.BMI)
    }
    */

    /**********
     * Loops and iteration
     

     // Loop to count from 0 to 9
    for (var i = 1; i <= 20; i += 2 ) {
        console.log(i);
    }
    // i = 0, i < 10 true, log i to console, i++
    // i = 1, 1, 10 true, log i to the console, i++

    // var john = ['John', 'Smith', 1990, 'designer', false];
    // for (var i = 0; i < john.length; i++) {
    //     console.log(john[i]);
    // }

    // // while loop
    // var i = 0;
    // while (i < john.length) {
    //     console.log(john[i]);
    //     i++;
    // }

    // continue and break statements
    // continue used to quit the current iteration of loop
    // and continue with next one. break used to break out of loop
    var john = ['John', 'Smith', 1990, 'designer', false];
    for (var i = 0; i < john.length; i++) {
        if (typeof john[i] !== 'string') continue; // breaks out of iteration and continues to next one
        console.log(john[i]);
    }

    for (var i = 0; i < john.length; i++) {
        if (typeof john[i] !== 'string') break; // breaks out of loop
        console.log(john[i]);
    }
    
    // Looping backwards
    for (var i = john.length - 1; i >= 0; i--) {
        console.log(john[i]);
    }

    */

    /*****
     * CODING CHALLENGE 5
     */

var john = {
fullName: 'John Smith',
bills: [124, 48, 268, 180, 42],

    calculateTip: function() {
        this.tips = [];
        this.finalValues = [];

        for (i = 0; i < this.bills.length; i++) {
            
            var tipPercentage;
            var bill = this.bills[i];

            if (bill < 50) {
                tipPercentage = 0.2;
            } else if (bill >= 50 && bill <= 200) {
                tipPercentage = 0.15;
            } else {
                tipPercentage = 0.10;
                }

                this.tips[i] = tipPercentage * bill;
                this.finalValues[i] = bill + bill * tipPercentage;
        }

    }
}

var mark = {
fullName: 'Mark Miller',
bills: [77, 375, 110, 45],

    calculateTip: function() {
        this.tips = [];
        this.finalValues = [];

        for (i = 0; i < this.bills.length; i++) {

            var tipPercentage;
            var bill = this.bills[i];

            if (bill < 100) {
                tipPercentage = 0.2;
            } else if (bill >= 100 && bill <= 300) {
                tipPercentage = 0.10;
            } else {
                tipPercentage = 0.25;
                }
            
            this.tips[i] = tipPercentage * bill;
            this.finalValues = bill + tipPercentage * bill;
        }

    }
}

function calcTipAvg(theArray) {
    var sum = 0;
    for (i = 0; i < theArray.length; i++) {
        sum += theArray[i];
    }

    var average = sum / theArray.length; // get average
    return average;
}

// John's family
john.calculateTip();
mark.calculateTip();
console.log(john, mark);

john.average = calcTipAvg(john.tips);
mark.average = calcTipAvg(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
    console.log(john.fullName + '\s family pays' +
    ' higher tips, with an average of $' + john.average);
} else if (mark.average > john.average) {
    console.log(mark.fullName + '\s family pays' +
    ' higher tips, with an average of $' + mark.average);
}




    



      