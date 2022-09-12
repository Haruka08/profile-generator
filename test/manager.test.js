const Manager = require('../lib/manager');

test("test if this code will retern the series of questions", () => {
    const newManager = new Manager("Haruka", 123, "haruka@gmail.com", 1);
    expect(newManager.name).toBe("Haruka");
    expect(newManager.id).toBe(123);
    expect(newManager.email).toBe("haruka@gmail.com");
    expect(newManager.officeNum).toBe(1);
  });