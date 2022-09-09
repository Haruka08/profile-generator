// importing employee class
const Intern = require("./employee");

// extending employee class with intern specific information
class Intern extends Employee {
    constructor (name, id, email, school) {
      super(name, id, email);  
      this.school = school;
      }
}

// exporting this to be available to use on other files
module.exports = Intern;