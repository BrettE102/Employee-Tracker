const Engineer = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github;
    };
};

getGithub();

getRole();