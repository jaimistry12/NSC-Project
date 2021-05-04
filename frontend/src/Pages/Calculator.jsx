import React from "react";
import { Button, Row, Jumbotron } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import firebase from "firebase";

import App from "../App";

const Calculator = () => {
  const api = React.useRef();
  const ec2 = React.useRef();
  const users = React.useRef();
  let ec2Data = {};
  let apiData = {};
  let dbData = {};
  // this.state = {
  //   ec2Data: {},
  //   apiData: {},
  //   dbData: {}
  // };
  function calculateOnClick(numApi, numEc2, numUsers) {
    let ec2 = firebase.database().ref("EC2");
    ec2.on("value", snapshot => {
      const state = snapshot.val();

      ec2Data = state;

      console.log(snapshot.val());
    });

    let Amazon_Elastic_Block_Storage_EBS_price = parseFloat(
      ec2Data[0].Amazon_Elastic_Block_Storage_EBS
    );
    let EC2_instance_specifications_price = parseFloat(
      ec2Data[1].EC2_instance_specifications
    );
    // let HTTP_APIs_price = parseFloat(this.state.apiData[0].HTTP_APIs)
    // let REST_APIs_price = parseFloat(this.state.apiData[1].REST_APIs)
    // let WebSocket_APIs_price = parseFloat(this.state.apiData[2].WebSocket_APIs)
    //let DBGB_monthly_space_price = parseFloat(this.state.dbData[0].DBGB_monthly_space_cost)

    // calculations
    let total = 0;

    // for now for numApi -> make sure is 3 or greater

    // let numEach = numApi / 3
    // let remainder = numApi % 4
    // let numHTTP = numEach
    // let numREST = numEach
    // let numWebSocket = numEach

    // if (remainder === 1){
    //   numHTTP++
    // }
    // if (remainder === 2){
    //   numREST++
    // }

    // let apisPrice = (numHTTP * HTTP_APIs_price) + (numREST * REST_APIs_price) + (numWebSocket * WebSocket_APIs_price)
    // total += apisPrice

    // for now for numEc2 -> num instances x price for 30 gb

    let ec2price =
      numEc2 * Amazon_Elastic_Block_Storage_EBS_price +
      numEc2 * EC2_instance_specifications_price;
    total += ec2price;

    // num users accessing database/server
    let dbTables = 10;
    let spacePerTableGb = 1;

    //let backendPrice = (DBGB_monthly_space_price * dbTables * spacePerTableGb * numUsers)
    //total += backendPrice
    console.log(total);
    return total;
  }

  // function calculateOnClick() {}

  return (
    <React.Fragment>
      <div
        style={{
          backgroundColor: "EFEFEF",
          position: "absolute",
          top: 0,
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          padding: 0
        }}
      >
        <div
          style={{
            textAlign: "center"
          }}
        >
          <Jumbotron
            style={{
              color: "#77777",
              fontFamily: "Verdana",
              fontWeight: "bold",
              fontSize: "45px",
              textAlign: "center"
            }}
          >
            Choose which fields you want to optimize for:
          </Jumbotron>
        </div>
        <br />
        <br />
        <div
          style={{
            width: "30%",
            margin: "auto"
          }}
        >
          <Row>
            <center>
              <h1>Number of API's:</h1>
              <InputGroup size="lg" className="mb-3">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  style={{
                    fontSize: "20px",
                    fontFamily: "Verdana",
                    position: "relative"
                  }}
                  ref={api}
                />
              </InputGroup>
            </center>
          </Row>
        </div>
        <br />
        <div
          style={{
            width: "30%",
            margin: "auto"
          }}
        >
          <Row>
            <center>
              <h1>Number of EC2 Instances:</h1>
              <InputGroup size="lg" className="mb-3">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  style={{
                    fontSize: "20px",
                    fontFamily: "Verdana",
                    position: "relative"
                  }}
                  ref={ec2}
                />
              </InputGroup>
            </center>
          </Row>
        </div>
        <br />
        <div
          style={{
            width: "30%",
            margin: "auto"
          }}
        >
          <Row>
            <center>
              <h1>Number of Users:</h1>
              <InputGroup size="lg" className="mb-3">
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  style={{
                    fontSize: "20px",
                    fontFamily: "Verdana",
                    position: "relative"
                  }}
                  ref={users}
                />
              </InputGroup>
            </center>
          </Row>
          <center>
            <Button
              style={{
                color: "white",
                backgroundColor: "#024697",
                margin: "5%",
                fontSize: "20px",
                fontFamily: "Verdana",
                alignItems: "center",
                justifyContent: "center",
                position: "relative"
              }}
              variant="outline-success"
              onClick={() =>
                (document.getElementById("Output").innerHTML =
                  "The total is $" +
                  calculateOnClick(
                    api.current.value,
                    ec2.current.value,
                    users.current.value
                  ))
              }
            >
              Submit
            </Button>
            <center>
              <p
                id="Output"
                style={{
                  borderStyle: "solid",
                  borderColor: "#024697",
                  color: "#77777",
                  fontFamily: "Verdana",
                  fontWeight: "bold",
                  fontSize: "30px",
                  textAlign: "center"
                }}
              ></p>
            </center>
          </center>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Calculator;
