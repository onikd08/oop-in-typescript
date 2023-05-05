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

// in Operator guard

interface INormalUserAccount {
  name: string;
  age: number;
}

interface IAdminUserAccount {
  name: string;
  age: number;
  role: "admin";
}

const isAdmin = (
  userAccount: INormalUserAccount | IAdminUserAccount
): boolean => {
  if ("role" in userAccount) {
    return !!userAccount.role;
  } else {
    return false;
  }
};
const adminUser1: IAdminUserAccount = { name: "Admin", age: 40, role: "admin" };
const normalUser1: INormalUserAccount = { name: "User 1", age: 30 };

console.log(isAdmin(normalUser1));
