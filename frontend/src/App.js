import React from "react";
import ReactDOM from "react-dom";
import logo from "./logo.svg";
import "./Styles/App.css";
import firebase from "firebase";
import config from "./config";
import { Home } from "./Pages/Home";
import Calculator from "./Pages/Calculator";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    console.log(firebase.apps.length);
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
      console.log("New Firebase initiliazed");
      console.log(firebase.apps.length);
    } else {
      firebase.app();
      console.log("Firebase old");
    }
    console.log("Firebase initiliazed");

    /*
    
    Parameters for MVP:
      Load Balancer vs API gateway 
      Ec2 instances    
      Backend usage/calls


    */

    // how to populate!!!
    //firebase.database().ref('Sample').update({message:"Hello"});

    let ec2 = firebase.database().ref("EC2");
    ec2.on("value", snapshot => {
      const state = snapshot.val();

      console.log(snapshot.val());
      //this.setState(state);
    });

    let APIgateway = firebase.database().ref("API Gateway");
    APIgateway.on("value", snapshot => {
      const state = snapshot.val();
      console.log(snapshot.val());
      //this.setState(state);
    });
  }

  componentDidMount() {
    this.getUserData();
  }

  componentDidUpdate(prevProps, prevState) {
    // check on previous state
    // only write when it's different with the new state
  }

  writeUserData = () => {};

  getUserData = () => {};

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/calculator" exact component={Calculator} />
        </Switch>
      </Router>
    );
  }
}

export default App;
