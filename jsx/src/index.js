// Import React and React Dom Libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText(){

    return 'click on me!';
}

// Create a react component
const App = () =>{
const buttonText = 'Click Me!';

return (
    <div>
        <label for="name">Enter Name</label>
        <input id="name" type="text" />
        <button style={{backgroundColor:"blue" ,color:"white"}}>{getButtonText()}</button>
    </div>
);
};


// Take a react component and show it on the screen
ReactDOM.render(
<App/>, 
document.querySelector('#root')

);