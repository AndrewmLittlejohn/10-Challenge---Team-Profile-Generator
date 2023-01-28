const Engineer = require('../lib/Engineer.js');

  describe("Engineer",()=> {
    it("should create an object with a name, id, email and github if provided valid arguments", () =>{
      // Eventually update so any name will pass this test
      const engineer = new Engineer("Andrew", "123", "name@email.com", "andrewmlittlejohn");
         
      expect(engineer.name).toEqual("Andrew");
      expect(engineer.id).toEqual("123");
      expect(engineer.email).toEqual("name@email.com");
      expect(engineer.github).toEqual("andrewmlittlejohn");
    });
  });


