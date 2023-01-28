const Intern = require('../lib/Intern.js');


  describe("Intern",()=> {
    it("should create an object with a name, id, email and school if provided valid arguments", () =>{
      // Eventually update so any name will pass this test
      const intern = new Intern("Andrew", "123", "name@email.com", "stansberry");
         
      expect(intern.name).toEqual("Andrew");
      expect(intern.id).toEqual("123");
      expect(intern.email).toEqual("name@email.com");
      expect(intern.school).toEqual("stansberry");
    });
  });