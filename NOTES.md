# Project Planning Walkthrough

---

## 1. Identify Views

### Dashboard View Requirements

- located at the home or 'root' (`/`)
- show header containing navigation, username, and logout button
- show cards of answered polls by logged in user
- show cards of unanswered polls by logged in user
- each card will show:
  - author of question
  - formattted date and time question was created
  - ability to show more details when clicked

### Leaderboard View Requirements

- located at `/leaderboard`
- show header containing navigation, username, and logout button
- display a table of users, # of questions answered, and # of questions unanswered
- sort in order of most questions answered

### Question

- located at `/question/:id`
- author of question
- formattted date and time question was created
- optionOne and optionTwo and a submit button

### New Question View Requirements

- located at `/new-question`
- show header containing navigation, username, and logout button
- has text input for optionOne and optionTwo
- show submit button when inputs are submitted

### Login

- located at `/login`
- show dropdown of all users to select from
- display text input to enter password
- show submit button to handle form

### View Recap

- Dashboard
- Leaderbaord
- Question
- New Question
- Login

---

## 2. Break Down of View Into a Hierarchy of Components

### Dashboard Components

- **App** - overall container for the project
- **Header** - displays navigation, username, and logout button
- **QuestionList** - display question cards answered and unanswered questions in respective groups
- **QuestionCard** - responsible for displaying relevant question info

### Leaderboard Components

- **App** - overall container for the project
- **Header** - displays navigation, username, and logout button
- **LeaderBoard** - table showing username, questions answered, and questions unanswered

### New Question

- **App** - overall container for the project
- **Header** - displays navigation, username, and logout button
- **NewQuestion** - displays the form to create a new question

### Question

- **App** - overall container for the project
- **Header** - displays navigation, username, and logout button
- **Question** - displays content of question by id

### Login

- **App** - overall container for the project
- **Login** - show login form

### Components Recap

- **App**
- **Header**
- **QuestionList**
- **QuestionCard**
- **NewQuestion**
- **Question**
- **Leaderboard**
- **Login**

---

## 3. Determine What Events Happen in the App

### Header

- _get_ the **authedUser**

### QuestionsList

- _get_ the list of **questions**
- _get_ logged in **authedUser**
- _get_ **questions** based on what **authedUser** has answered and not answered

### QuestionCard

- _get_ particular **question**
- _get_ logged in **auhtedUser**

### Question

- _get_ particular **question**
- _update_ partciular question **question**
- _get_ **authedUser** to add to users who answered question

### NewQuestion

- _post_ new **question** once it is submitted

### Leaderboard

- _get_ all **users** to populate leaderboard

### Login

- _get_ all **users** for user to choose from
- _set_ **authedUser** based on selection

---

## 4. The Store

- **Users**: used by Login Leaderboard
- **authedUser**: used by Login, Header, Dashboard, QuestionsList, NewQuestion
- **questions**: used by Dashboard, QuestionList, QuestionCard, Question

---

## Gameplan

- [ ] Actions
- [ ] Reducers and Middlware
- [ ] Initializing App Data
- [ ] Dashboard Component
- [ ] Question List Component
- [ ] Question Card Component
- [ ] Question Component
- [ ] New Question Component
