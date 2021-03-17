import React from 'react';
import ReactDOM from 'react-dom';

const App = () =>{
    // getting the physical location
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (err) => console.log(err)
    )

    return <div>Hi there!</div>;
};

ReactDOM.render(<App />, document.querySelector('#root'));