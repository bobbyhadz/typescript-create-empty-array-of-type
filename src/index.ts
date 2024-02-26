export {};

// EXAMPLE 1 - Declare an Empty Array for a typed Variable in TypeScript

type Animal = {
  name: string;
  age: number;
};

const arr: Animal[] = [];

const a1: Animal = { name: 'Alfred', age: 2 };

arr.push(a1);

// 👇️ [{name: 'Alfred', age: 2}]
console.log(arr);

// ---------------------------------------------------

// // EXAMPLE 2 - Declare an Empty Array for a typed Variable using a type assertion

// type Animal = {
//   name: string;
//   age: number;
// };

// const arr = [] as Animal[];

// const a1: Animal = { name: 'Alfred', age: 2 };

// arr.push(a1);

// // 👇️ [{name: 'Alfred', age: 2}]
// console.log(arr);
