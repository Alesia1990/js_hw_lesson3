//task 1

let i = 1;

while(i <= 50){
    console.log(i);
    i++;
};

let a = 35;

while(a >= 8){
    console.log(a);
    a--;
};

//task 2

let b = 89;

while(b >= 11){
    document.write(b + "<br/>");
    b--;
};

//task 3

let sum = 0;

for(let i = 0; i <= 100; i++){
    sum += i;
}

console.log(`сумма чисел 100 = ${sum}`);

//task 4

let sum2 = 0;

for(let i = 1; i <= 5; i++){
    sum2 = 0;
    for(let j = 1; j <= i; j++){
        sum2 += j;
    }
    console.log(`Сумма чисел числа ${i} = ${sum2}`);
}

// task 5

for(let i = 8; i <= 56; i++){
    if(i % 2 == 1 ) continue;
    console.log(i);
}

//task 6

let multipl = 0;
for(let i = 2; i <= 9; i++){
    multipl = 0;
    for(let j = 1; j <= 10; j++){
        multipl = i * j;
        console.log(`${i} * ${j} = ${multipl}`);
    }
}
