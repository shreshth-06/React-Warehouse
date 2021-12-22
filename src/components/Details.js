import React from "react";
import { Link, useLocation } from "react-router-dom";

const Details = () => {
  const data = useLocation();
  const {
    value: { val },
  } = data;
  return (
    <>
      <center>
        <div
          style={{
            left: "35%",
            height: "100vh",
            width: "100vw",
            overflow: "hidden",
            backgroundColor: "rgb(176, 189, 199)",
          }}
        >
          <div
            style={{
              borderRadius: "20px",
              border: "1px solid rgb(0 0 0)",
              width: "400px",
              height: "auto",
              padding: "20px",
              backgroundColor: "white",
              marginTop: "70px",
            }}
          >
            <h1>
              <b>Name : {val.name}</b>
            </h1>
            <h3>City : {val.city}</h3>
            <h3>Cluster : {val.cluster}</h3>
            <h3>Space Available : {val.space_available}</h3>
            <h3>Type : {val.type}</h3>
          </div>

          <Link
            to="/"
            className="btn btn-sm btn-dark"
            style={{
              marginTop: "8px",
              paddingLeft: "30px",
              paddingRight: "30px",
              paddingBottom: "1px",
            }}
          >
            <h6>Go Back</h6>
          </Link>
        </div>
      </center>
    </>
  );
};

export default Details;
