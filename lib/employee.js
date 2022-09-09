// Class to collate basic information of an employee
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
      }
}

// exporting this to be available to use on other files
module.exports = Employee;