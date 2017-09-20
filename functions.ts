function getSum(num1:number, num2:number):number{
    return num1 + num2;
}
console.log('getSum = '+ getSum(1,4));

let mySum =function(num1:any, num2:any){
    if (typeof num1 == 'string'){
        num1=parseInt(num1);
    }
    if (typeof num2 == 'string'){
        num2=parseInt(num2);
    }
    return num1 + num2;
}
console.log('mySum = '+mySum('1','5'));