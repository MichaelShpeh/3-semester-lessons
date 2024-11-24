console.warn('00.Основи синтаксису');

//! 1.Інструкція (statement)
//? Інструкція - це пов'язаний набір слів і символів, які об'єднуються,
//? щоб висловити одну ідею, тобто одну інструкцію для машини.
//? Інструкції в JavaScript завершуються крапкою з комою,
//? яку можна порівняти із крапкою наприкінці речення вашої рідної мови.
// = і * //? -  це оператори, які вчиняють дії над значеннями і змінними. 
a = b * 2;


//! 2.Вираз (expression)
//? Інструкції складаються із частин,
//? як і в будь-якій мові речення складаються із фраз
//? і ці фрази називаються виразами.
//? Вираз - це посилання на змінну чи значення,
//? або на набір змінних і значень у поєднанні з операторами.
[[a] = [[b] * [2]]] //? - ця інструкція з прикладу вище містить 5 виразів, 
//? які виділені квадратними дужками для візуалізації(це не синтаксис мови):
[2]  //? вираз значення літерала. 
[b],[a] //? вирази змінних. 
[b * 2]  //? арифметичний вираз множення.
[a = b * 2]  //? — вираз присвоювання.


//! 3.Літерал (безіменна константа)
//? Літерал - це фіксоване значення в коді, наприклад, 5 або "Hello".
//? Літерал вказується безпосередньо в коді програми та представляє певний тип даних
//? Літерали можуть бути ОПЕРАНДАМИ, коли вони беруть участь у виразі.
//todo ОПЕРАНД - це значення, яке використовується в операції.

//? 3-1.Числовий літерал:
int = 100;
float = 3.1415;

//? 3-2.Рядковий літерал:
"JavaScript is awesome!"

//? 3-3.Логічні літерали:
true, false

//? 3-4.Літерал null
//? Літерал посилання, адреса в пам'яті - зазвичай, 
//? числові літерали, що вказують на комірку в пам'яті 
null

//? 3-5.Літерал об'ектів:
//todo  { name: 'John', age: 30 }
//todo  { x: 1, y: 2 }

//? 3-6.Літерал масиву:
[1, 2, 3, 4]


//! 4.Інтерфейс
//? Інтерфейс  — це набір властивостей і методів сутності,
//? оступних для використання у вихідному коді.

//? 4-1.Властивість - описові характеристики
//? синтаксис: сутність.ім`я_властивості
"JavaScript is awesome".length;

//? 4-2.Метод - активна операція
//? синтаксис: сутність.ім`я_метода()
"JavaScript is awesome".toUpperCase();
