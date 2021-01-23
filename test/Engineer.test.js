//Testing for Engineer

const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initilization", () => {
        it("Able to set github from constructor argument", () => {
            const github = "gitHubUser";
            const employee = new Engineer("Grace", 3, "grace@fakemail.com", github);
            expect(employee.github).toBe(github); 
        });

        it("Able to get gitHub from getGithub()", () => {
            const github = "gitHubUser";
            const employee = new Engineer("Grace", 3, "grace@fakemail.com", github);
            expect(employee.getGithub()).toBe(github); 
        });

        it("Able to return 'Engineer' as the getRole()", () => {
            const testRole = "Engineer";
            const employee = new Engineer("Grace", 3, "grace@fakemail.com");
            expect(employee.getRole()).toBe(testRole);
        });
    })
})