import React from 'react';
import ReactDOM from 'react-dom'
import Login from './src/components/login/Login.jsx';
import Signup from './src/components/login/Signup.jsx';


class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
           <div className="app">
               <Login />
               <Signup />
           </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('App'));
