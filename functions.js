function getSum(num1, num2) {
    return num1 + num2;
}
console.log('getSum = ' + getSum(1, 4));
var mySum = function (num1, num2) {
    if (typeof num1 == 'string') {
        num1 = parseInt(num1);
    }
    if (typeof num2 == 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
console.log('mySum = ' + mySum('1', '5'));
function getName(firstName, lastName) {
    // when only one argument passed return first name only - descard undifined
    if (lastName == undefined) {
        return firstName;
    }
    return firstName + ' ' + lastName;
}
console.log(getName('Dereje', 'Kitaw'));
console.log(getName('Dereje'));
