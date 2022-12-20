const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber;
    };

getOfficeNumber(){
    return officeNumber
}
getRole(){
    return 'Engineer'
}  // overridden to return 'Engineer'
};

module.exports = Manager