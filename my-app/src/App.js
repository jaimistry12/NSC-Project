import React from 'react';

import firebase from 'firebase';
import config from './config';


class App extends React.Component {

  constructor(props){
    super(props);

    console.log(firebase.apps.length)
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
      console.log("New Firebase initiliazed"); 
      console.log(firebase.apps.length)
    }else {
      firebase.app(); 
      console.log("Firebase old"); 
    }
    console.log("Firebase initiliazed"); 
    
    this.state = {
      ec2Data: {},
      apiData: {},
      dbData: {}
    };
    
  }

  componentDidMount() {
      let ec2 = firebase.database().ref('EC2');
      ec2.on('value', snapshot => {
        const state = snapshot.val()
        this.setState({
          ec2Data: state
        });
        console.log(snapshot.val())
      });
      
      let APIgateway = firebase.database().ref('API Gateway');
      APIgateway.on('value', snapshot => {
        const state = snapshot.val()
        this.setState({
          apiData: state
        });
        console.log(snapshot.val())
      });
  
      let dbInfo = firebase.database().ref('Database_Server');
      dbInfo.on('value', snapshot => {
        const state = snapshot.val()
        this.setState({
          dbData: state
        });
        console.log(snapshot.val())
      });
    
  }
  
  componentDidUpdate(prevProps, prevState) {
    // check on previous state
    // only write when it's different with the new state
    console.log(this.state.ec2Data)
    console.log(this.state.apiData)

    console.log(this.calculatePrice(3,1,1))
  }

  writeUserData = () => {
    
  }
  
  getUserData = () => {
    
  }

  calculatePrice(numApi, numEc2, numUsers) {
    let Amazon_Elastic_Block_Storage_EBS_price = parseFloat(this.state.ec2Data[0].Amazon_Elastic_Block_Storage_EBS)
    let EC2_instance_specifications_price = parseFloat(this.state.ec2Data[1].EC2_instance_specifications)
    let HTTP_APIs_price = parseFloat(this.state.apiData[0].HTTP_APIs)
    let REST_APIs_price = parseFloat(this.state.apiData[1].REST_APIs)
    let WebSocket_APIs_price = parseFloat(this.state.apiData[2].WebSocket_APIs)
    let DBGB_monthly_space_price = parseFloat(this.state.dbData[0].DBGB_monthly_space_cost)


    // calculations
    let total = 0;

    // for now for numApi -> make sure is 3 or greater 

    let numEach = numApi / 3
    let remainder = numApi % 4
    let numHTTP = numEach
    let numREST = numEach
    let numWebSocket = numEach

    if (remainder === 1){
      numHTTP++
    }
    if (remainder === 2){
      numREST++
    }

    let apisPrice = (numHTTP * HTTP_APIs_price) + (numREST * REST_APIs_price) + (numWebSocket * WebSocket_APIs_price)
    total += apisPrice

    // for now for numEc2 -> num instances x price for 30 gb 

    let ec2price = (numEc2 * Amazon_Elastic_Block_Storage_EBS_price) + (numEc2 * EC2_instance_specifications_price)
    total += ec2price

    // num users accessing database/server
    let dbTables = 10
    let spacePerTableGb = 1

    let backendPrice = (DBGB_monthly_space_price * dbTables * spacePerTableGb * numUsers)
    total += backendPrice


    return total
  }

  
  
  render() {
    
    return (
      <React.Fragment>
        
      </React.Fragment>
    );
  }

}

export default App;