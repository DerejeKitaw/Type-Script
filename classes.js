var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.age = age;
        this.email = email;
        console.log('User Created:' + this.name);
    }
    //Creating methods for the class
    User.prototype.register = function () {
        console.log(this.name + ' is now registered');
    };
    User.prototype.payInvoice = function () {
        console.log(this.name + ' paid invoice');
    };
    return User;
}());
// create user object
var dereje = new User('Dereje Kitaw', 'dereje.kitaw@gmail.com', 40);
// if age is private we can not access it outside the class. by default it is public.
console.log(dereje.age);
dereje.register();
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = 
        // supper must have parameters which is inherenting from other class
        _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payinvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
var winta = new Member(1, 'Winta Tesfaye', 'wtesfaye@gmail.com', 9);
winta.payInvoice();
