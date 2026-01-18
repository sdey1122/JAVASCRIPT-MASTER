// An object literal is a list of key:value pairs inside curly braces {}.
// key = property name
// value = property value

// Example 1 --->
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  eyeColor: "blue",
  address: {
    city: "Kolkata",
    state: "West-Bengal",
    pincode: 712554,
  }
};

console.log(person.address);
console.log(person.address.city);

function details(){
    console.log(`Full Name ---> ${person.firstName} ${person.lastName}`);  
}
details();