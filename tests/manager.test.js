const Manager = require('../lib/manager.js');

//varible for engineer parameters globally
const manager = new Manager ("Billy", 1234, "testing@testing.com", "C27");

describe("parent", () => {
    
    describe("test to see if we can get the value passed into getOfficeNumber method", () => {
        it("should return values into the class methods of the Employee class", () => {
          expect(manager.getOfficeNumber()).toBe('C27')
    
        });
      })
      describe("test to see if we can get the value passed into getRole method", () => {
        it("should return values into the class methods of the Employee class", () => {
          expect(manager.getRole()).toBe('Manager')
    
        });
      })
      describe("test to see if we can get the value passed into officeNumber method", () => {
        it("should return values into the class methods of the Employee class", () => {
          expect(manager.officeNumber).toBe('C27')
    
        });
      })
})