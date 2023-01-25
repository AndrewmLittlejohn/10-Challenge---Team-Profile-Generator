class Badge {
  constructor(name, id, email, gitId){
    this.name = name;
    this.id = id;
    this.email = email; 
    this.gitId = gitId
  }
  info(){
    console.log(`${this.name}`, `${this.id}`, `${this.email}`, `${this.gitId}`);
  }
}

module.exports = {Badge};