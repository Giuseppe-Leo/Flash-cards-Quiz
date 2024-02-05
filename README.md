# Flash Cards Project

## About 
Thi project was developed during my learning course from codecademy!.

## Goals 

In this project was used:
 
 React-Redux/Redux-toolkit

 -configure each slices module using <b>createSlice()</b>;
 -configure store module with <b>configureStore()</b>;
 -use <b>useSelector()</b> along with each selectors in each  state slices to access the <b>Store</b>;
 -use<b>useDispatch</b> to dispatch actions to the store and update the rendering;

 ## To Run

Run `npm start` in the project root and the app will be available on port 3000.

## State

The app's state is totally normalized, with slices for topics, quizzes, and cards.

## Routes

- `/new-topic` – form to create a new topic
- `/topics` – index of all topics
- `/topics/:topicId` – page for an individual topic
- `/new-quiz` – form to create a new quiz
- `/quizzes` – index of all quizzes
- `/quizzes/:quizId` – page for an individual quiz

## To Test

1. Create topics
2. Create quizzes
3. Visit the page for an individual quiz and flip the cards over