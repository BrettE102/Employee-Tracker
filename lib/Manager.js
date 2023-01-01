const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
    };

getOfficeNumber(){
    return officeNumber
}
getRole(){
    return 'Engineer'
}  // overridden to return 'Engineer'
};

module.exports = Manager