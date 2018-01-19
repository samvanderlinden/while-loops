
//Print all numbers between -10 and 19
console.log("Printing numbers from -10 to 20");

var num = -10;

while(num < 20) {
    console.log(num);
    num ++;
}

//Print all even numbers between 10 and 40
console.log("Printing all evens from 10 to 40");

var evens = 10;

while(evens <= 40) {
    console.log(evens)
    evens +=2;
}

//Print all odd numbers between 300 and 333
console.log("Printing all odds from 300 to 333");

var odds = 300;
while(odds <= 333) {
    if(odds % 2 !== 0) {
    console.log(odds);
    }
    odds+=1;
}

//Print all numbers divisible by 5 AND 3 between 5 and 50

console.log("Printing all numbers divisible by 3 AND 5 between 5 and 50");

var divisible = 5;
while(divisible <= 50) {
    if(divisible % 5 === 0 && divisible % 3 === 0) {
        console.log(divisible);
    }
    divisible+=1;
}