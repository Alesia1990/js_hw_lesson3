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

// task 7

let n = 1000;
let num = 0;

for( ; ;num++){
    n = n /2;
    if(n <= 50) break;
}
console.log(`количество итераций = ${num}, результат = ${n}`)

//task 8

let c;
let d = 0;
let sum3 = 0;
let arithmeticMean;
for( ; ; d++){
    c = +prompt("Введите значение");
    if(c == " " || c == 0) break;
    if(isNaN(c)) {
        console.log("Ошибка");
        break;
    };
    sum3 += c;
}
arithmeticMean = sum3 / d;
console.log(`Общая сумма = ${sum3} \n Среднее арифметическое чисел = ${arithmeticMean} `);

//task 9

let str = "4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57";
let num2 = " ";
let max = 0;
let min = 0 + num2;
for(let i = 0; i < str.length; i++){
    if(str[i] != " "){
        num2 += str[i];
        if (num2 > max) max = num2;
        if (num2 < min) min = num2;
    } else{
        num2 =" ";
    }
}
console.log(`Максимальное число = ${max}`);
console.log(`Минимальное число = ${min}`);

//task 10

let num3 = 8094264389542;
let sum4 = 0;
let f = 0;
let reverse =" ";

num3 = String(num3);

for( ;f < num3.length; f++){
    console.log(num3[f]);
    sum4 += +num3[f];
}

for(let i = num3.length - 1; i >= 0; i--){
    reverse += num3[i];
}
console.log(`Цифр в числе = ${f}`);
console.log(`Сумма цифр в числе = ${sum4}`);
console.log(`Обратный порядок = ${reverse}`);