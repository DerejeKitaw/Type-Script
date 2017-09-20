class User{

    name: string;
    email:string;
    age:number;

    constructor (name:string, email:string, age: number){
        this.name=name;
        this.age=age;
        this.email=email;

        console.log('User Created:'  + this.name);

    }

    //Creating methods for the class
    registor(){
        console.log(this.name + ' is now registered');
    }
}

// create user object

let dereje = new User('Dereje Kitaw','dereje.kitaw@gmail.com',40);
// if age is private we can not access it outside the class. by default it is public.
console.log (dereje.age);

dereje.registor();