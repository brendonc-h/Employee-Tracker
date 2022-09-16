const Engineer = require('../lib/engineer.js');

//varible for engineer parameters globally
const engineer = new Engineer ("Billy", 1234, "testing@testing.com", "brendonc-h");

describe("parent", () => {
    
    describe("test to see if we can get the value passed into getGitHub method", () => {
        it("should return values into the class methods of the Employee class", () => {
          expect(engineer.getGitHub()).toBe('brendonc-h')
    
        });
      })
      describe("test to see if we can get the value passed into gitHub method", () => {
        it("should return values into the class methods of the Employee class", () => {
          expect(engineer.gitHub).toBe('brendonc-h')
    
        });
      })
      describe("test to see if we can get the value passed into getRole method", () => {
        it("should return values into the class methods of the Employee class", () => {
          expect(engineer.getRole()).toBe('Engineer')
    
        });
      })
})