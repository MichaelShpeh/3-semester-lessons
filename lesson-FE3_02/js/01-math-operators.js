console.log('1.Математичні оператори');

//! Арифметичні операції
//? Правильне іменування складових виразу. 
//? + - * / % називаються операторами, 
//? а то на чому вони застосовуються операндами.
const userAge = 30 - 6; // Числа 30 та 6 - операнди
const h = 180;
const t = 10;
const userHeight = h - t; // h та t - операнди


//? Бінарні оператори застосов до двух операндів (-)
const clientAge = 30 - 6;
//? Унарні застосов до одного операнда (=)
const userCash = -800;


//? Задаємо змінні
const x = 8;
const y = 5;
const x2 = 10;

//? Додавання
console.log("x + y =", x + y); 

//? Віднімання
console.log("x - y =", x - y);
console.log("y - x =", y - x);

//? Множення
console.log("y * x =", x * y); 

//? Ділення
console.log("y / x =", x / y); 
console.log("y / x2 =", x2 / y);

//? Залишок від ділення
console.log("Залишок від ділення y / x =", x % y); 
console.log("Залишок від ділення y / x2 =", x2 % y); 

//? Зведення у ступінь
console.log("x(8) у ступіні y(5) =", x ** y); // 32768
console.log("2 у ступіні 3 =", 2 ** 3); // 32768



//! Комбіновані оператори
//? Арифметичні операції із заміною
//todo Ділення: /=. Приклад: 
//todo Залишок від ділення: %=. Приклад: 

//? Додавання із заміною
//todo x += y еквівалентно x = x + y
let valueSum = 10;
// valueSum = valueSum + 5; //! var 1.
valueSum += 5;  //! var 2.
console.log("valueSum:", valueSum);

//? Віднімання із заміною
//todo x -= y еквівалентно x = x - y
let valueX = 10;
let valueY = 4;
// valueX = valueX - valueY; //! var 1.
valueX -= valueY;  //! var 2.
console.log("Додавання - valueX:", valueX);

//? Множення із заміною
//todo x *= y еквівалентно x = x * y
let valueG = 4;
let valueU = 3;
// valueG = valueG * valueU; //! var 1.
valueG *= valueU;  ///! var 2.
console.log("Множення - valueG:", valueG);

//? Ділення із заміною
//todo x /= y еквівалентно x = x / y
let valueM = 100;
let valueN = 5;
// valueM = valueM / valueN; //! var 1.
valueM /= valueN;  //! var 2.
console.log("Ділення - valueM:", valueM);

//? Залишок від ділення із заміною
//todo x %= y еквівалентно x = x % y
let valueO = 30;
let valueP = 20;
// valueO = valueO % valueP; //! var 1.
valueO %= valueP;  //! var 2.
console.log("Залишок від ділення valueO/valueP --> valueO:", valueO);