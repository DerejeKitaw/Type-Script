// Simple generic
function echo<T>(data: T) {
  return data;
}

console.log('Der');

// Built-in Generic
const testResult: Array<number | string> = [1.94, '2.33'];
const testResult2: (number | string)[] = [1.94, '2.33'];

function printAll<T>(args: T[]) {
  args.forEach(element => {
    return console.log(element);
  });
}
printAll(['Apple', 'Bananas', 7]);

// Generic Types
function echo1(data: any) {
  return data;
}
const echo2: <T>(data: T) => T = echo1;
console.log(echo2('something'));

// Generic Class
class SimpleMath<T> {
  baseValue: ;
  multipleValue: T;
  constructor() {
    this.baseValue = 0;
    this.multipleValue = 0;
  }
  calculate(): number {
    return +this.baseValue * +this.multipleValue;
  }
}
const simpleMath = new SimpleMath();
simpleMath.baseValue = 10;
simpleMath.multipleValue = '10';

console.log(simpleMath.calculate());
