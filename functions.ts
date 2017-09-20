function getSum(num1:number, num2:number):number{
    return num1 + num2;
}
console.log('getSum = '+ getSum(1,4));

let mySum =function(num1:any, num2:any){
    return num1 + num2;
}
console.log('mySum = '+mySum('1',4));