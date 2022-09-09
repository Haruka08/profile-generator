const Employee = require('../lib/employee');

test("test if this code will retern the series of questions", () => {
    const newEmployee = new Employee("Haruka", 123, "haruka@gmail.com");
    expect(newEmployee.name).toBe("Haruka");
    expect(newEmployee.id).toBe(123);
    expect(newEmployee.email).toBe("haruka@gmail.com");
  });