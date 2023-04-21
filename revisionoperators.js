//Comparison Operators
//Comparison operators compare two values and give a feedback of a boolen value where it returns true or false.
//==Equal to operator
const m = 5;
const b= 2;
const c= 'Hello'
console.log(m==b)//returns false
console.log(m==5)//returns true
console.log(m==2)//returns false
console.log(c=='hello')//returns false
//not equal to
//!= it evaluates to true if the operators are not equal two
const d= 7;
const e= 10;
console.log(d!=7)
console.log(e!=4)
//strictly equal to
//===evaluate to  true if the values are of the same type.
const h= 2;
const l='2'
console.log(h===l);
//strictly not equal to
//!==
const s = 3;
const p = 'hello'
console.log(s!==p)//true
//greater than operator
//>
const t= 4;
const y= 3;
console.log(t>y)
//greater than or egual to
const o= 4;
const A= 7;
console.log(A>=o)
//less than 
//greater than or equal to


//switch statements
//The break statement is optional. If the break statement is encountered, the switch statement ends.
//If the break statement is not used, the cases after the matching case are also executed.
//The switch statement evaluates a variable/expression inside parentheses ()
let a = 2;

switch (a){
    case 1 :
        a = 'one';
        break;
    case 2:
        a= 'two';
        break;
    default:
        a= 'not found';
        break;
        
}
console.log(`The value is ${a}`);

//A while loop evaluates the condition inside the parenthesis ().
//If the condition evaluates to true, the code inside the while loop is executed.
let i = 1, n = 5;
//while loop from i = 1 to 5
while(i <= n){
console.log(i);
i += 1;
}


