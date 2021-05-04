import React from "react";
import { Button, Jumbotron } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export function Home() {
  const history = useHistory();
  return (
    <React.Fragment>
      <div
        style={{
          backgroundColor: "EFEFEF",
          position: "absolute",
          backgroundImage:
            "url(" +
            "https://t4.ftcdn.net/jpg/03/01/46/11/360_F_301461106_EXXsPkG6yiOPO4Lb2mGyzNjkcWIg39w7.jpg" +
            ")",
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
            borderStyle: "solid",
            borderColor: "white",
            padding: "30px",
            textAlign: "center"
          }}
        >
          <Jumbotron
            style={{
              color: "white",
              fontFamily: "Verdana",
              fontWeight: "bold",
              fontSize: "60px",
              textAlign: "center"
            }}
          >
            SAAS Cost Estimator
          </Jumbotron>
          <p
            style={{
              color: "white",
              fontFamily: "Verdana",
              fontSize: "25px",
              textAlign: "center"
            }}
          >
            <b>Optimized Price Calculations</b>
          </p>
          <p
            style={{
              color: "white",
              fontFamily: "Verdana",
              fontSize: "25px",
              fontWeight: "normal",
              textAlign: "center"
            }}
          ></p>

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
            onClick={() => history.push("./Calculator")}
          >
            Calculate
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
}
