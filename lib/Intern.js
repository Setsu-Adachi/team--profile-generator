// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// TODO: Write code to define and export the Employee class


class Intern {
    constructor(name, id, email, school) {
        this.name = name;
        this.id = id;
        this.emial = email;
        this.school = school;
    },
    {
    getName() {
        return this.name;
    },
    getId() {
        return this.id;
    },
    getEmail() {
        return this.email;
    },
    getSchool() {
        return this.school;
    },

}

module.expors = { Employee, Intern };

