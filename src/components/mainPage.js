import React, { useEffect, useState } from "react";
import { useSelector, useDispatch,connect } from "react-redux";
import { getMainData } from "../actions/mainPageActions";
import { Row, Col, Card, Button } from "react-bootstrap";
import { types } from "../reducers/types";
import { store } from "../App";
import { Link } from "react-router-dom";
import {withRouter} from 'react-router-dom';
const MainPage = () => {
  const dispatch = useDispatch();
  const { mainData } = useSelector((state) => state.rootState);

  useEffect(() => {
    dispatch(getMainData());
  }, []);

  const getRedirectionData = (item) => {
    switch (item) {
      case "books":
        return 1;
      case "characters":
        return 583;
      case "houses":
        return 378;
      default:
        return 583;
    }
  };
  return (
    <div className="root-container" style={{ marginTop: "2em" }}>
      <div>
        <div className="d-flex justify-content-center">
          <p className="bold-text" style={{ fontSize: "30px" }}>
            CHOOSE OPTION
          </p>
        </div>
        <div className="d-flex justify-content-space-around card-styles">
          {mainData &&
            Object.keys(mainData).map((item, index) => {
              return (
                <div className="p-1" xs="12" md="4" lg="3" key={index}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Title>{item?.toUpperCase()}</Card.Title>
                      <Link
                        to={`/data/${item}/${getRedirectionData(item)}`}
                        variant="primary"
                        style={{ color: "#303c47" }}
                      >
                        Most Viewed {item?.toUpperCase()}'s
                      </Link>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default withRouter(MainPage);
