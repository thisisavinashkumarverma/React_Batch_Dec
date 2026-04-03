var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var StudentDetails = /** @class */ (function () {
    function StudentDetails(id, name) {
        this.id = id;
        this.age = 30;
        this.name = name;
    }
    StudentDetails.prototype.displayStudentDetails = function () {
        console.log("Name is " + this.name);
        console.log("Student id is " + this.id);
    };
    return StudentDetails;
}());
var Abc = /** @class */ (function (_super) {
    __extends(Abc, _super);
    function Abc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Abc.prototype.displayAbcDetails = function () {
        console.log("Namne is " + this.name);
    };
    return Abc;
}(StudentDetails));
var obj1 = new StudentDetails(1234, "Krish");
obj1.displayStudentDetails();
// Declaring class variables
// access_specifier variablename:datatype;  public userName:string;
