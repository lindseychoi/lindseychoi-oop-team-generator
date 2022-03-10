const Employee = require("../lib/employee.js");

test("should create a class called employee", () => {
    var nameVal = "lindsey";
    var emailVal = "lindsey@gmail.com";
    var idVal = "1989";
    var roleVal = "Engineer";
    const obj = new Employee(nameVal, emailVal, idVal, roleVal);
    obj.name = nameVal;
    expect(obj.name).toEqual(nameVal);
    expect(obj.email).toEqual(emailVal);
    expect(obj.id).toEqual(idVal);
    expect(obj.role).toEqual(roleVal);
})
