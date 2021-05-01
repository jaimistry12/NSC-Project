import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export function Home() {
  const history = useHistory();
  return (
    <React.Fragment>
      <div
        style={{
          backgroundColor: "rgba(203, 221, 250, 0.808)",
          position: "absolute",
          top: 0,
          width: "100%",
          height: "100%",
          display: "flex",
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
          <h1
            style={{
              color: "#77777",
              fontFamily: "Verdana",
              fontWeight: "bold",
              fontSize: "60px",
              textAlign: "center"
            }}
          >
            Saas Price Optimization
          </h1>
          <p
            style={{
              color: "#77777",
              fontFamily: "Verdana",
              fontSize: "25px",
              textAlign: "center"
            }}
          >
            <b>Optimize prices for AWS blah blah</b>
          </p>
          <p
            style={{
              color: "#555",
              fontFamily: "Verdana",
              fontSize: "25px",
              fontWeight: "normal",
              textAlign: "center"
            }}
          >
            <b>Have a look around, we hope you enjoy what we have to offer!</b>
          </p>

          <Button
            style={{
              color: "white",
              backgroundColor: "#153fc8d8",
              margin: "5%",
              fontSize: "20px",
              fontFamily: "Verdana",
              alignItems: "center",
              justifyContent: "center",
              position: "relative"
            }}
            onClick={() => history.push("./Calculator")}
          >
            Click here to optimize
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
}
