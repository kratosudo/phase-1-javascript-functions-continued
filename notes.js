// function razzle(lawyer = "jekyll", target = "hydee"){
//     console.log(`${lawyer} razzle-dazzles ${target}!`);
// }
// razzle("methusela", "tchala");


// const person = {
//     name: 'hydee',
//     greet: function(){
//         console.log('hello ' + this.name);
//     }
// }
// person.greet();


// const fn = function () {
//   console.log("Yet more razzling");
// };
// fn();

// (function (baseNumber) {
//     return baseNumber + 3;
// })
// console.log();

// const array = (function (thingToAdd) {
//   const base = 3;
//   return [
//     function () {
//       return base + thingToAdd;
//     },
//     function () {
//       return base;
//     },
//   ];
// })(2);
// console.log(array[1]());


// function demoChain(name) {
//   const part1 = "hi";
//   return function () {
//     const part2 = "there";
//     return function () {
//       console.log(`${part1.toUpperCase()} ${part2} ${name}`);
//     };
//   };
// }

// demoChain("Dr. Stephen Strange")()();