const Engineer = require('../lib/engineer');

test("test if this code will retern the series of questions", () => {
    const newEngineer = new Engineer("Haruka", 123, "haruka@gmail.com", "haruka08");
    expect(newEngineer.name).toBe("Haruka");
    expect(newEngineer.id).toBe(123);
    expect(newEngineer.email).toBe("haruka@gmail.com");
    expect(newEngineer.gitHub).toBe("haruka08");
  });