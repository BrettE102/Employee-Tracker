// dependencies
const inquirer = require('inquirer')
// const path = require('path')
const fs = require('fs')

// import classes
// const generateTeam = require('./src/PlaceHolder')
const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const htmlTemplate = require('./src/generateHtml.js')
// const { default: Choices } = require('inquirer/lib/objects/choices')

var team = []

function initQuestions(){
   function managerQuestions(){
    console.log('hello2')
        inquirer.prompt([
            {
                type: 'input',
                name: 'managersName',
                message: 'What is the team managers name?'
            }, {
                type: 'input',
                name: 'employeeId',
                message: 'What is this managers id?'
            }, {
                type: 'input',
                name: 'managerEmail',
                message: 'What is this managers email address? '
            }, {
                type: 'input',
                name: 'officeNumber',
                message: 'What is this managers office number'
            }
        ]).then((managerAnswers) => {
            const manager = new Manager(managerAnswers.managersName,managerAnswers.employeeId, managerAnswers.managerEmail, managerAnswers.officeNumber)
            team.push(manager)
            generateTeam();
        })
    
   } ;

   managerQuestions()

   

   function engineerQuestions(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineersName',
            message: 'What is the team engineers name?'
        }, {
            type: 'input',
            name: 'engineersId',
            message: 'What is this engineers id?'
        }, {
            type: 'input',
            name: 'engineersEmail',
            message: 'What is this engineers email address? '
        }, {
            type: 'input',
            name: 'engineersGithub',
            message: 'What is this engineers github?'
        }
    ]).then((engineerAnswers) => {
        const engineer = new Engineer(engineerAnswers.engineersName, engineerAnswers.engineersId, engineerAnswers.engineersEmail, engineerAnswers.engineersGithub)
        team.push(engineer)
        generateTeam()
    })
   };
   function internQuestions(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is the team intern name?'
        }, {
            type: 'input',
            name: 'internId',
            message: 'What is this intern id?'
        }, {
            type: 'input',
            name: 'internEmail',
            message: 'What is this intern email address? '
        }, {
            type: 'input',
            name: 'school',
            message: 'What school does this intern go to?'
        }
    ]).then((internAnswers) => {
        const intern = new Intern(internAnswers.internName, internAnswers.internId, internAnswers.internEmail, internAnswers.school)
        team.push(intern)
        generateTeam()
    })
    
    


}
function generateTeam() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'team',
            message: 'What type of team member do you want to add',
            choices: ['intern', 'manager', 'engineer', 'no one']
        }
    ]).then((newTeam) => {
        switch (newTeam.team){
            case 'engineer':
              engineerQuestions(); 
              break
              case 'manager':
                managerQuestions(); 
                break 
                case 'intern':
                    internQuestions(); 
                    break 
                    default : const holdHtmlArr = htmlTemplate.render(team);
                    fs.writeFile('./dist/team.html', holdHtmlArr.join(""), (err)=>
                    err? console.log(err):console.log('HTML created successfully!'))  
        } 
    })
   }
}



initQuestions();





