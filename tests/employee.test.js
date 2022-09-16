const Employee = require('../lib/employee.js');

const employee = new Employee ("Billy", 1234, "testing@testing.com")

describe("Employee", () => {
    
    describe("parent properties", () => {
        it("should return input properties for the employee parameters", () => {
          expect(employee.name).toBe("Billy");
          expect(employee.id).toBe(1234);
          expect(employee.email).toBe("testing@testing.com");
        })
      });
      
      describe("test to see if we can get the value passed into getEmail method", () => {
        it("should return values into the class methods of the Employee class", () => {
          expect(employee.getEmail()).toBe("testing@testing.com")
        });
      describe("test to see if we can get the value passed into getName method", () => {
        it("should return values into the class methods of the Employee class", () => {
          expect(employee.getName()).toBe("Billy")
        });
      })
      describe("test to see if we can get the value passed into getId method", () => {
        it("should return values into the class methods of the Employee class", () => {
          expect(employee.getId()).toBe(1234)
    
        });
      })
      describe("test to see if we can get the value passed into getId method", () => {
        it("should return values into the class methods of the Employee class", () => {
          expect(employee.getRole()).toBe('Employee')
    
        });
      })
      });
    })