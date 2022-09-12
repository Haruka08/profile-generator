// Class to collate basic information of an employee
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;

      }
      getName() {
        return this.name
      }
      getID() {
        return this.id
      }
      getEmail() {
        return this.email
      }
      getRole() {
        return "Employee"
      }
}

// exporting this to be available to use on other files
module.exports = Employee;