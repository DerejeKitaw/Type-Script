var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.age = age;
        this.email = email;
        console.log('User Created:' + this.name);
    }
    //Creating methods for the class
    User.prototype.registor = function () {
        console.log(this.name + ' is now registered');
    };
    return User;
}());
// create user object
var dereje = new User('Dereje Kitaw', 'dereje.kitaw@gmail.com', 40);
// if age is private we can not access it outside the class. by default it is public.
console.log(dereje.age);
dereje.registor();
