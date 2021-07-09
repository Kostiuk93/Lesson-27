"use strict";

// let x = 5; alert( x++ ); // 5

// [ ] + false - null + true 
// console.log(typeof([] + false)); // "false" - строка(string)
// console.log([] + false - null + true); // Nan

// let y = 1; 
// let x = y = 2; 
// alert(x); //2

// console.log([ ] + 1 + 2); // 12 - строка + 1 + 2= 12

// alert( "1"[0] ); / 1

// console.log(2 && 1 && null && 0 && undefined); // null
// И (&&) запинается на лжи
// ИЛИ (||) запинается на правде

// console.log( !!( a && b ) и (a && b) );
// console.log (!!( 1 && 2 ) === (1 && 2)); // false. оба выражения не равны
// Два знака НЕ (!!) превращают выражение в булиновое(ложное )

// alert( null || 2 && 3 || 4 ); // 3 так как ИЛИ запинается на правде.
// Первый выполненный логический оператор выполнится && (И) по приоритету

// const a = [1, 2, 3];
// const b = [1, 2, 3]; 
// console.log(a == b); // a и b не равны, так как это 2 разные переменные с одинаковыми данными

// alert( +"Infinity" ); // Infinity - ЧИСЛО, так как стоит унарный знак +
// alert( typeof(+"Infinity") );

// console.log("Ёжик" > "яблоко"); // false 

// console.log( 0 || "" || 2 || undefined || true || falsе ); // 2 - запинается на правде (true)