const Manager = require('../lib/Manager.js');


  describe("Engineer",()=> {
    it("should create an object with a name, id, email and office number if provided valid arguments", () =>{
      // Eventually update so any name will pass this test
      const manager = new Manager("Andrew", "123", "name@email.com", "01");
         
      expect(manager.name).toEqual("Andrew");
      expect(manager.id).toEqual("123");
      expect(manager.email).toEqual("name@email.com");
      expect(manager.officeNumber).toEqual("01");
    });
  });