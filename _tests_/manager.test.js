const Manager = require("../lib/manager");

test("should create a class called Manager", () => {
    var nameVal = "lindsey";
    const obj = new Manager(nameVal);
    obj.name = nameVal;
    expect(obj.name).toEqual(nameVal);
})