import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    //Not required by React!
constructor(props){
    super(props); //refernce to the constructor funton of parent class

    this.state = {lat: 40, errorMessage: ''};

    window.navigator.geolocation.getCurrentPosition(
        (position) => {
            this.setState({lat:position.coords.latitude});
        },
        (err) => {
            this.setState({errorMessage: err.message});

        }
        );

}

    //React says we have to define render
render(){
    if (this.state.errorMessage && !this.state.lat){
        return <div>Error: {this.state.errorMessage}</div>
    }

    if(!this.state.errorMessage && this.state.lat){
        return <div>Latitude: {this.state.lat}</div>;
    }

    return <div>Loading!</div>
}

}

ReactDOM.render(<App />, document.querySelector('#root'));