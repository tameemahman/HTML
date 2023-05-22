//Fibonacci Series

let n1 = 0;
let n2 = 1;
let sum = 0;

console.log(n1 + " \n" + n2);

for (let i = 3; i <= 8; i++) {

    let sum = n1 + n2;
    console.log(sum);

    n1 = n2;
    n2 = sum;
}

