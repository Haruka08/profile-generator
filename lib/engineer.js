// importing employee class
const Employee = require("./employee");

// extending employee class with engineer specific information
class Engineer extends Employee {
    constructor (name, id, email, gitHubUser) {
      super(name, id, email);  
      this.gitHubUser = gitHubUser;
      }
      getRole() {
        return "Engineer"
      }
      getGithub() {
        return this.gitHubUser
      }
}

// exporting this to be available to use on other files
module.exports = Engineer;