function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

// Test cases
// console.log(saturdayFun("bathe my dog"));
// console.log(saturdayFun()); 
 


//function expression
 const mondayWork = function (activity = "go to the office") {
   return `This Monday, I will ${activity}.`;
 };
 console.log(mondayWork("Work from home"));
 console.log(mondayWork());




 //wrapAdjective
 function wrapAdjective(flair = "*") {
   return function (adjective = "special") {
     return `You are ${flair}${adjective}${flair}!`;
   };
 }