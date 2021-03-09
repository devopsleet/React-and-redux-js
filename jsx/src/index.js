// Import React and React Dom Libraries
import React from 'react';
import ReactDOM from 'react-dom';


// Create a react component
const App = () =>{
const style = {backgroundColor : 'blue'}; //JS Object

return (
    <div>
        <label for="name">Enter Name</label>
        <input id="name" type="text" />
        <button style={style}>click on me!</button> //refrencing an object in JSX
    </div>
);
};


// Take a react component and show it on the screen
ReactDOM.render(
<App/>, 
document.querySelector('#root')

);