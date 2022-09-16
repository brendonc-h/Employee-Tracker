const Intern = require('../lib/intern.js');

//varible for engineer parameters globally
const intern = new Intern ("Billy", 1234, "testing@testing.com", "Denver University");

describe("parent", () => {
    
    describe("test to see if we can get the value passed into getSchool method", () => {
        it("should return values into the class methods of the Employee class", () => {
          expect(intern.getSchool()).toBe('Denver University')
    
        });
      })
      describe("test to see if we can get the value passed into getRole method", () => {
        it("should return values into the class methods of the Employee class", () => {
          expect(intern.getRole()).toBe('Intern')
    
        });
      })
      describe("test to see if we can get the value passed into school method", () => {
        it("should return values into the class methods of the Employee class", () => {
          expect(intern.school).toBe('Denver University')
    
        });
      })
})