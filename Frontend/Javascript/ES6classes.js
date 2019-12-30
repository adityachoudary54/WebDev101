console.log("ES6 classes");

class Employee {
    constructor(name, experience, division) {
        this.name = name;
        this.experience = experience;
        this.division = division;
    }
    slogan() {
        return `I am ${this.name} and this company is the best`;
    }
    joiningYear() {
        return 2019 - this.experience;
    }
    //Can be use without creating the object of the class
    static add(a, b) {
        return a + b;
    }
}
adi = new Employee("aditya", 23, 5);
console.log(adi);
console.log(Employee.add(34, 5));
class Programmer extends Employee {
    constructor(name, experience, division, language, github) {
        super(name, experience, division); //calls the constructor of the employee
        this.language = language;
        this.github = github;
    }
    //"this" can't be used in static functions
    favouriteLanguage() {
        if (this.language == "Python") {
            return "Python";
        } else {
            return "Javascript";
        }
    }
    static multiply(a, b) {
        return a * b;
    }
}
rohan = new Programmer("Rohan", 34, "Lays", "go", "rohan340");
console.log(rohan);
console.log(Programmer.multiply(5, 7));
