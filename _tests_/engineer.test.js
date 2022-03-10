const Engineer = require("../lib/engineer");

test("should create a class called Engineer", () => {
    var nameVal = "lindsey";
    const obj = new Engineer(nameVal);
    obj.name = nameVal;
    expect(obj.name).toEqual(nameVal);
})