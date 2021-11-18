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
        inputEmail.type("hariskaisardaniels@gmail.com");
    });

});
```


## Run Test
To run the test, you need to follow these steps
- First, open terminal in your Code Editor by clicking ctrl + `
- Then type `npx cypress open` and press ENTER on your keyboard
  
  ![Screenshot_Terminal](https://user-images.githubusercontent.com/74105380/126939714-9c33dc8b-1ebd-410b-b433-e2f3f2d24297.jpg)
  
- Wait until Cypress Test Runner open up
- Then, click `test.spec.js` to run the test
  
  ![Screenshot_Test_Runner](https://user-images.githubusercontent.com/74105380/126940145-51af5625-8ebf-472c-ba4f-bd202393fbf9.jpg)

- And the test will run  

https://user-images.githubusercontent.com/74105380/132805226-43b3184d-ee8e-4a00-b481-617fa629cb50.mp4

  
# All is Done!
