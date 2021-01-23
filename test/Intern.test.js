//Testing for Intern

const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("Able to set school from constructor function", () => {
            const school = "2University";
            const employee = new Intern("John", 5, "john@fakemail.com", school);
            expect(employee.school).toBe(school);
        });

        it("Able to get school from getSchool()", () => {
            const school = "2University";
            const employee = new Intern("John", 5, "john@fakemail.com", school);
            expect(employee.getSchool()).toBe(school);
        });
        it("Able to return 'Intern' as the getRole()", () => {
            const testRole = "Intern";
            const employee = new Intern("John", 5, "john@fakemail.com");
            expect(employee.getRole()).toBe(testRole);
        });
    })
})