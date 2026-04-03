
class StudentDetails {
    private id:number;
    protected name:string;
    public age:number;
    constructor(id:number, name:string) {
        this.id = id;
        this.age  = 30;
        this.name = name;
    }
    public displayStudentDetails() {
        console.log("Name is " + this.name);
        console.log("Student id is " + this.id);
    }
}

class Abc extends StudentDetails{
    displayAbcDetails() {
        console.log("Namne is " + this.name);
    }
}

var obj1 = new StudentDetails(1234, "Krish");
obj1.displayStudentDetails();

// Declaring class variables
// access_specifier variablename:datatype;  public userName:string;

 