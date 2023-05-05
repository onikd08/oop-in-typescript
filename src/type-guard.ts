/*
Type Guard or type narrowing
 => typeof
 => in operator (only applicable for accessing object or interface property) 
*/

// typeof guard

type checkType = string | number | boolean;

function getType(param: checkType): string {
  if (typeof param === "string") {
    return param + " is string";
  }
  if (typeof param === "number") {
    return param + " is number";
  }
  if (typeof param === "boolean") {
    return param + " is boolean";
  }
  return "type could not be found";
}

console.log(getType("false")); // output: string
