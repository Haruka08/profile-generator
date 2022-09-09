const Intern = require('../lib/intern');

test("test if this code will retern the series of questions", () => {
    const newIntern = new Intern("Haruka", 123, "haruka@gmail.com", "University of Birmingham");
    expect(newIntern.name).toBe("Haruka");
    expect(newIntern.id).toBe(123);
    expect(newIntern.email).toBe("haruka@gmail.com");
    expect(newIntern.school).toBe("University of Birmingham");
  });