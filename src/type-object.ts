// type: object
let user: object;
user = {}; // object

user = {
    id: 1,
    username: 'mouse',
    firstName: 'Mouse',
    isPro: true
};

console.log('user', user);
// Object vs object (clase JS vs clase TS)
const myObj = {
    id: 1,
    username: 'mouse',
    firstName: 'Mouse',
    isPro: true
};
const isInstance = myObj instanceof Object;
console.log('isInstance:', isInstance);
console.log('user.username', myObj.username);