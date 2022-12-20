const { Employee } = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }


getSchool(){
    return school
}

getRole() {
    return 'Intern'
}// Overridden to return 'Intern'
}

module.exports = Intern