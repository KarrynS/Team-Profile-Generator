//Testing for Manager

const Manager = require ("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("Able to set officeNumber from constructore argument", () => {
            const officeNumber = "12345678";
            const employee = new Manager("Jared", 1, "jared@fakemail.com", officeNumber);
            expect(employee.officeNumber).toBe(officeNumber);
        });
        it("Able to get officeNumber from getOfficeNumber()", () => {
            const officeNumber = "12345678";
            const employee = new Manager("Jared", 1, "jared@fakemail.com", officeNumber);
            expect(employee.getOfficeNumber()).toBe(officeNumber);
        })
        it("able to return 'Manager' as the getROle()", () => {
            const testRole = "Manager";
            const employee = new Manager("Jared", 1, "jared@fakemail.com");
            expect(employee.getRole()).toBe(testRole);        })

    })
})