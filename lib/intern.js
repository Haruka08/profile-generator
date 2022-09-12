// importing employee class
const Employee = require("./employee");

// extending employee class with intern specific information
class Intern extends Employee {
    constructor (name, id, email, school) {
      super(name, id, email);  
      this.school = school;
      }

      getRole() {
        return "Intern"
      }
      getSchool() {
        return this.school
      }
}

// exporting this to be available to use on other files
module.exports = Intern;