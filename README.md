# Employee Polls Application

Companies improve internal collaboration by letting employees access the application and create a poll with two options. Employees can vote on the solutions and see which one will come out on top. A dashboard was requested by HR that will list every employee and put them in order of total answered and created questions. This way, a prize can be given to the employee who ends up answering and creating the most polls.

A capstone project brief for Udacity's React Nanodegree course.

## Install and Run the Applicaiton

1. Clone the repository on your machine

`git clone https://github.com/eorosales/employee-polls.git`

2. Navigate to the project directory and install necessary dependencies.

```
cd employee-polls
npm install
```

3. Run the application.

`npm run start`

## Testing

Be sure you are at the root project directory and run tests.

```
npm run test
```

**Testing Details**

Tests are located in the following directories:

- employee-polls/src/authedUserSlice/authedUserSlice.test.js
- employee-polls/src/questionsSlice/questionsSlice.test.js
- employee-polls/src/usersSlice/usersSlice.test.js
- employee-polls/src/components/Login/login.test.js
  - contains /_snapshots_ directory
