
const Employee = require('../lib/Employee.js');

// /Users/andrewlittlejohn/Desktop/Challenge folder/10 Challenge/lib/Employee.js

describe("Employee", () => {
  describe("name",()=> {
    it("should return the employee's name as it was rendered in the terminal via inquirer", () =>{
      // Eventually update so any name will pass this test
      const name = 'Andrew';

      const obj = new Employee(name)
    
      expect(obj.name).toEqual(name);
    });

  })
});
