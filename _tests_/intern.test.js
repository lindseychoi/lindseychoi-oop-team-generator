const Intern = require("../lib/intern");

test("should create a class called Intern", () => {
    var nameVal = "lindsey";
    const obj = new Intern(nameVal);
    obj.name = nameVal;
    expect(obj.name).toEqual(nameVal);
})