
class Employee {
  constructor(name, id, email){
    this.name = name;
    this.id = id;
    this.email = email; 
  }

  info(){
    console.log(`${this.name}`, `${this.id}`, `${this.email}`);
  }

  getName(){
    console.log(`${this.name}`);
  }
  getId(){
    console.log(`${this.id}`);
  }
  getEmail(){
    console.log(`${this.email}`);
  }

  getRole(){
    console.log(`Employee`);
  }

}
module.exports = Employee;