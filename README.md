# Cypress Testing for Real-World Website

## 1. What are we testing and what is this about?

We are using Cypress to perform end-to-end testing on a real-world website <a href="https://www.automationexercise.com/"> Automation Exercise Website</a>. The purpose of these tests is to ensure that the key functionalities of the website work as expected across different user scenarios. This includes testing user interactions like form submissions, navigating through pages, validating content, etc.

What test cases have been tested in this project?

-   Test Case 1: Register User
-   Test Case 2: Login User with correct email and password
-   Test Case 3: Login User with incorrect email and password
-   Test Case 4: Logout User
-   Test Case 5: Register User with existing email
-   Test Case 6: Contact Us Form
-   Test Case 7: Verify Test Cases Page
-   Test Case 8: Verify All Products and product detail page

## 2. Requirements

To run these tests, you will need the following:

-   Node.js (version >= 12.x)
-   npm or yarn package manager
-   Cypress (installed via npm or yarn)

## 3. How to Install

To install Cypress and set up the project, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/aivaras23/cypress-test-project.git
    ```

2. Navigate into the project directory:

    ```bash
    cd cypress-test-project
    ```

3. Install the required dependencies:

    ```bash
    npm i
    ```

    Or, if you are using yarn:

    ```bash
    yarn
    ```

## 4. How to Run Tests

Once the dependencies are installed, you can run the Cypress tests using the following commands:

1. Open the Cypress Test Runner (for interactive mode):

    ```bash
    npm run test
    ```

    Or, if using yarn:

    ```bash
    yarn test
    ```

2. Run all tests in headless mode:

    ```bash
    npm run test:cmd
    ```

    Or, if using yarn:

    ```bash
    yarn test:cmd
    ```

This will run the tests in the background without opening the Cypress window.

### Optional:

-   You can configure your testing environment by modifying the `cypress.config.js` file.
-   Tests can also be written and edited in the `cypress/integration` directory.

---

For more details on writing and customizing tests, you can refer to the official [Cypress documentation](https://docs.cypress.io/).
