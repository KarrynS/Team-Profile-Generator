//TDD for Employee

const Employee = require("../lib/Employee.js");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should return an object that holds an instance of Employee", () => {
            const employee = new Employee();
            expect(typeof(employee)).toEqual("object");
        });

        it("Able to set name from constructor arguments", () => {
            const name = "Grace";
            const employee = new Employee(name);
            expect(employee.name).toBe(name); 
        });

        it("Able to set ID from constructor arguments", () => {
            const testId = "3";
            const employee = new Employee("Foo", testId);
            expect(employee.id).toBe(testId); 
        });
     
        it("Able to set email from constructor arguments", () => {
            const testEmail = "grace@fakemail.com";
            const employee = new Employee("Foo", 3, testEmail);
            expect(employee.id).toBe(testEmail); 
        });

        it("Able to get name from getName()", () => {
            const testName = "Grace";
            const employee = new Employee(testName);
            expect(employee.getName()).toBe(testName); 
        });

        it("Able to gey ID from getId()", () => {
            const testId = "3";
            const employee = new Employee("Foo", testId);
            expect(employee.getId()).toBe(testId); 
        });

        it("Able to get email from getEmail()", () => {
            const testEmail = "grace@fakemail.com";
            const employee = new Employee("Foo", 3, testEmail);
            expect(employee.getEmail).toBe(testEmail); 
        });
    })
})