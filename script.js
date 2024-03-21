console.log(3>5);
console.log(typeof 'false');
console.log(5 == '5.00');
console.log(5 === '5.00');
const age = 15
if(age >= 16){
    console.log('you can drive');
} else if(age >= 14){
    console.log('almost there');
}
else {
    console.log('you cannot drive');
}

if (5){
    console.log('truthy')
}
const result = 0 ? 'truthy' : 'falsey';
console.log(result);
const message = 5 && 'hello';
console.log(message);
const currency = undefined || 'USD';
console.log(currency);