const inquirer = require('inquirer')
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const path = require('path')
const fs = require('fs')

function initFunction(){
   function managerQuestions(){
        inquirer.prompt([
            {
                type: 'input',
                name: 'managers name',
                message: 'What is the team managers name?'
            }, {
                type: 'input',
                name: 'employee id',
                message: 'What is this managers id?'
            }, {
                type: 'input',
                name: 'manager email',
                message: 'What is this managers email address? '
            }, {
                type: 'input',
                name: 'office number',
                message: 'What is this managers office number'
            }
        ])
   } ;
   function engineerQuestions(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineers name',
            message: 'What is the team engineers name?'
        }, {
            type: 'input',
            name: 'engineers id',
            message: 'What is this engineers id?'
        }, {
            type: 'input',
            name: 'engineers email',
            message: 'What is this engineers email address? '
        }, {
            type: 'input',
            name: 'engineers github',
            message: 'What is this engineers github?'
        }
    ])
   };
   function internQuestions(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'intern name',
            message: 'What is the team intern name?'
        }, {
            type: 'input',
            name: 'intern id',
            message: 'What is this intern id?'
        }, {
            type: 'input',
            name: 'intern email',
            message: 'What is this intern email address? '
        }, {
            type: 'input',
            name: 'school',
            message: 'What school does this intern go to?'
        }
    ])
}}

// 

