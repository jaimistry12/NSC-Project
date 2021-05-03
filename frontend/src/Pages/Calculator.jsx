import React from "react";
import { Button, Row, Jumbotron } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

function Calculator() {
  const numApi = [
    { value: "one", label: "One" },
    { value: "two", label: "Two" },
    { value: "three", label: "Three" },
    { value: "four", label: "Four" },
    { value: "five", label: "Five" }
  ];
  const Ec2Instances = [
    { value: "one", label: "One" },
    { value: "two", label: "Two" },
    { value: "three", label: "Three" },
    { value: "four", label: "Four" },
    { value: "five", label: "Five" }
  ];
  return (
    <React.Fragment>
      <div
        style={{
          backgroundColor: "rgba(203, 221, 250, 0.808)",
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
            <h1>Number of API's:</h1>
            <InputGroup size="lg" className="mb-3">
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>
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
            <h1>Number of EC2 Instances:</h1>
            <InputGroup size="lg" className="mb-3">
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>
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
            <h1>Number of Users:</h1>
            <InputGroup size="lg" className="mb-3">
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Calculator;
