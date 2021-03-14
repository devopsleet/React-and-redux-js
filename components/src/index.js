// import the libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommonDetail from './CommentDetail';

//Create a react component
const App = () =>{

    return (
        <div className="ui container comment">
           
           
            <div className="comment">
            < a href="/" className="avatar">
                <img alt="avatar" src={faker.image.image()}/>
            </a>
            <div className="content">
                <a href="/" className="author">
                    Sam
                </a>
                <div className="metadata">
                    <span className="date">Today at 1PM</span>
                </div>
                <div className="text">Nice blog post</div>
            </div>
            </div>
            <div className="comment">
            < a href="/" className="avatar">
                <img alt="avatar" src={faker.image.image()}/>
            </a>
            <div className="content">
                <a href="/" className="author">
                    Sam
                </a>
                <div className="metadata">
                    <span className="date">Today at 1PM</span>
                </div>
                <div className="text">Nice blog post</div>
            </div>
            </div>
        </div>
    );
};

//Take a react component and show it on a screen
ReactDOM.render(<App />, document.querySelector('#root'));
