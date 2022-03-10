const Employee = require("../lib/employee.js");

test("should create a class called employee", () => {
    var nameVal = "lindsey";jes
    var emailVal = "lindsey@gmail.com";
    var idVal = "1989";
    var roleVal = "Engineer";
    const obj = new Employee(nameVal, emailVal, idVal, roleVal);
    obj.name = nameVal;
    expect(nameVal in obj.name).toEqual(true);
    expect(emailVal in obj.email).toEqual(true);
    expect(idVal in obj.id).toEqual(true);
    expect(roleVal in obj.role).toEqual(true);
})
