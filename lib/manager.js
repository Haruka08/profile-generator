// importing employee class
const Employee = require("./employee");

// extending employee class with manager specific information
class Manager extends Employee {
  constructor (name, id, email, officeNum) {
    super(name, id, email);
    this.officeNum = officeNum;
  }
}

// exporting this to be available to use on other files
module.exports = Manager;