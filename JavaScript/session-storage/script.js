let key = prompt("Enter the key");
let value = prompt("Enter the value");

localStorage.setItem(key,value);

console.log(`The value at ${key} is ${value}`);
console.log(`The value at ${key} is ${localStorage.getItem(key)}`);

document.cookie = `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`;
console.log(document.cookie)
document.cookie = `${key} = "Nakum"`;
console.log(document.cookie)