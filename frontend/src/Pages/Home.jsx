import React from "react";
import { Card, Badge, Button, Container, CardDeck } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import classes from "../Styles/HomeStyle.css";
import pageStyles from "../Styles/PageStyle.css";

export function Home() {
  const history = useHistory();
  return (
    <React.Fragment>
      <div className={classes.Content}>
        <div className={classes.SubContent}>
          <h1 className={pageStyles.title}>Saas Price Optimization</h1>
          <p className={"mb-2 " + pageStyles.bigText}>
            <b>Optimize prices for AWS blah blah</b>
          </p>
          <p className={pageStyles.bigText}>
            <b>Have a look around, we hope you enjoy what we have to offer!</b>
          </p>

          <Button
            style={{
              color: "#587758",
              margin: "5%"
              // boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)",
            }}
            onClick={() => history.push("./Calculator")}
            className="btn btn-outline-dark"
          >
            Click here to optimize
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
}
