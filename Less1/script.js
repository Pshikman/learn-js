
'use strict'; //обозначает написание кода на новом стандарте ES6!!!

// Comment
/*Multy-String 
  comment*/
//   Comment ctrl+U HotkeY

// alert('Hello');

//Переменные
// var leftBorderWidth = 1;
// let second = 2;
// const pi = 3.14;



var numer = 5;
var string = "Hello";
var sym = Symbol(); //новый тип данных
var boolean = true;
null; //объекта не существует
undefined; //пустой объект
var ob = {};

console.log(4/0); //Infinity
console.log('string'*9); //Not A Number (NaN)
//console.log(something); //ЭТО null
let something; //это undefined

//Объект
let persone = {
    name: "John",
    age: "25",
    isMarried: false
};
console.log(persone.name);
console.log(persone["age"]);

//Объект - массив
let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];
console.log(arr[1])

//Простое уведомление
//alert("Hello World");

//Уведомление с двумя кнопками Ok(true) и Cancel(false)
// let answer = confirm("Are you Here?");
// console.log(answer);


//let answer = prompt("Есть ли вам 18?", "Да");
//console.log(answer); //Вся информация от пользователя будет в виде строкЮ вне зависимости от того как она получена!


// let answer = prompt("Есть ли вам 18?", "Да");
// console.log(typeof(answer)); //typeof помогает определить какой тип данных мы получаем.


//Операторы
// console.log("arr" + " - object");
// console.log(4 + " - object");

//Превращаем строковый тип данных в числовой (знак +)
// let answer = +prompt("Сколько Вам лет?", "18");
// console.log(typeof(answer));

// console.log(4 + +" - object");


//Модификация переменных - инкримент, декримент (увеличение\уменьшение на единицу)
let incr = 10,
    decr = 10;
// incr++; //увеличение на 1
// decr--; //уменьшение на 1 
// console.log(incr); 
// console.log(decr);

// (префиксная форма)
// console.log(++incr); 
// console.log(--decr);

// (постфиксная форма)
console.log(incr++); 
console.log(decr++);

//Остаток от деления чисел
console.log(5%2);

// Знак равенства:
// = присваивание
// == проверка на равенство
// === строгая проверка по типу данных
console.log("2" == 2);
console.log("2" === 2);

//Логические операторы
// Оператор "И" &&
let isChecked = true,
    isClose = true;
console.log(isChecked && isClose);

let isChecked2 = true,
    isClose2 = false;
console.log(isChecked2 && isClose2);

// Оператор "ИЛИ" ||
let isChecked3 = true,
    isClose3 = false;
console.log(isChecked3 || isClose3);

let isChecked4 = false,
    isClose4 = false;
console.log(isChecked4 || isClose4);

//Оператор отрицания !
let isChecked5 = false,
    isClose5 = true;
console.log(isChecked5  || !isClose5);

//Оператор +
let apples = 3;
let bananas = 2;
console.log(apples + bananas)

let orranges = "10",
    qiwi = "5";
console.log(orranges + qiwi)

let mandarines = "20",
    lemons = "1";
console.log(+mandarines + +lemons);
console.log(mandarines + lemons);

//Присваивание (применить оператор к переменной и сохранить результат в ней же) =
var n = 2;
n = n + 5;
n = n * 2;
console.log(n);

