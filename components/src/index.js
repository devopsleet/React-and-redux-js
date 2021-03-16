// import the libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
//Create a react component
const App = () =>{

    // return statement
    return (
        <div className="ui container comment">
            <ApprovalCard />
           <CommentDetail author="Gagan" TimeAgo="6"/>
           
        </div>
    );
};

//Take a react component and show it on a screen
ReactDOM.render(<App />, document.querySelector('#root'));
