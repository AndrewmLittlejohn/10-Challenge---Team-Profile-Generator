
const Employee = require('../lib/Employee.js');

// /Users/andrewlittlejohn/Desktop/Challenge folder/10 Challenge/lib/Employee.js

describe("Employee", () => {
  describe("name",()=> {
    it("should create an object with a name, id, and email and if provided valid arguments", () =>{
      // Eventually update so any name will pass this test
      const employee = new Employee("Andrew", "123", "name@email.com");
         
      expect(employee.name).toEqual("Andrew");
      expect(employee.id).toEqual("123");
      expect(employee.email).toEqual("name@email.com");
    });
  })
});
