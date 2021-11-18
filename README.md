# This Is a Q4 of SQA Written Test at Cermati.com

## Project Information
For this project, i use Cypress

### Cypress
Fast, easy and reliable testing for anything that runs in a browser.

## Preparation
- Clone from this repo https://github.com/harisdaniels/register-cermati.com.git.
- The steps of cloning Github Repository, can be found [here](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository).

### Setup
For windows and mac, you can [download node](https://nodejs.org/en/) and install.

### Package Installation
Before start development and running the test you need to install packages that needed for this simple project. To install them, you need to do these step:

- Go to your project repo directory in your local machine with your favorite terminal.
- and type `npm install` in your terminal and press ENTER on your keyboard to install all dependecies
- wait, and done

## Test Structure
- Use `describe` function to create Test Suite (group of test cases)
- Use `It` function to create a test case
- Example:
```
/// <reference types="cypress" />

describe("As a user, I want to register my account to Cermati.com", () => {

    it("It should be able to visit the website", () => {
        const URL = "https://www.cermati.com/gabung";
        cy.visit(URL);
    });
    
    it("It should be able to input email", () => {
        const inputEmail = cy.get("#email");
        inputEmail.type("johndoe@gmail.com");
    });

});
```
> *NOTE: The email and password in this source code is dummy example. You have to change the email and password of your own for running this test.

## Run Test
To run the test, you need to follow these steps
- First, open terminal in your Code Editor by clicking ctrl + `
- Then type `npx cypress open` and press ENTER on your keyboard
  
  <img width="958" alt="Screenshot_1" src="https://user-images.githubusercontent.com/74105380/142380485-5a6897f4-5356-4aeb-bfcf-81ffc579a815.png">
  
- Wait until Cypress Test Runner open up
- Then, click `register-cermati.js` to run the test

  <img width="591" alt="Screenshot_3" src="https://user-images.githubusercontent.com/74105380/142380697-2c0c733b-d6d7-4c88-96c5-c5abf6a7e932.png">

- And the test will run  

https://user-images.githubusercontent.com/74105380/142380854-2f8b9db6-1f2c-4ada-9291-0bb0b75f81b4.mp4


  
# All is Done!
