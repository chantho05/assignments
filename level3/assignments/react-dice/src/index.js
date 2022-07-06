import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>

    <App />

  </div>



);

// Using what you have just learned about `state` in React, you are going to create a 
// `<DiceBox />` component that renders 5 dice numbers for the user to view.



// 1. Create a component called `<DiceBox />`
// 2. Write a method in  `<DiceBox />` that produces 5 random numbers between 1 and 6 
// and saves them in state.
// 3. Display the 5 random numbers in your `<DiceBox />` JSX.
// 4. Provide a button the user can click on that will redo step 
// 2 and present the new numbers to the user.