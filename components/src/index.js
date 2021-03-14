// import the libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

//Create a react component
const App = () =>{

    return (
        <div className="ui container comment">
           <CommentDetail author="Gagan" />
           
        </div>
    );
};

//Take a react component and show it on a screen
ReactDOM.render(<App />, document.querySelector('#root'));
