const Employee = require('./Employee.js')

class Engineer extends Employee{
  constructor(name, id, email, github){
    super(name, id, email);
    this.github = github;
    
  }  
  getRole() {
    console.log(`Engineer`);
  }

  getGithub(){
    console.log(`${this.github}`)
  }

}

module.exports = Engineer;
