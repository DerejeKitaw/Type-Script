interface UserInterface{
    name: string;
    email:string;
    age:number;
    register();
    payInvoice();
}
class User implements   UserInterface{
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
    register(){
        console.log(this.name + ' is now registered');
    }
    payInvoice(){
        console.log(this.name + ' paid invoice');
    }
}

// create user object

let dereje = new User('Dereje Kitaw','dereje.kitaw@gmail.com',40);
// if age is private we can not access it outside the class. by default it is public.
console.log (dereje.age);

dereje.register();


class Member extends User{
    id:number;

    constructor(id:number,name:string,email:string,age:number){
        // supper must have parameters which is inherenting from other class
        super(name,email,age); //this is like making this.name=name;....
        this.id=id;
    }

    payinvoice(){
        super.payInvoice();
    }
}

let winta: User = new Member(1, 'Winta Tesfaye','wtesfaye@gmail.com',9);
winta.payInvoice();