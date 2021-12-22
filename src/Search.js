import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import stockarea from "./stockarea.jpg";
import JSONDATA from "./warehouse.json";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const searchText = (event) => {
    setSearchTerm(event.target.value);
  };

  let dataSearch = JSONDATA.filter((val) => {
    return Object.keys(val).some((key) =>
      val[key]
        .toString()
        .toLowerCase()
        .includes(searchTerm.toString().toLowerCase())
    );
  });
  return (
    <>
      <div style={{ height: "100vh", overflow: "scroll" }}>
        <div className="py-8">
          <div className="row justify-content-center">
            <div className="col-12 mb-5">
              <div className="mb-3 col-4 mx-auto text-center">
                <label className="form-lable h4">
                  <h1>Search</h1>
                </label>
                <input
                  type="text"
                  placeholder="search by name, city, cluster, space-limit..."
                  value={searchTerm}
                  className="form-control"
                  onChange={searchText.bind(this)}
                />
              </div>
            </div>
            {dataSearch.map((val, key) => {
              return (
                <div className="col-6 col-md-3 col-sm-3 mx-4 mb-5" key={key}>
                  {" "}
                  <div className="card p-0  h-80 shadow">
                    <img src={stockarea} alt=".." className="card-img-top" />
                    <div className="card-body my-2s">
                      <div
                        style={{
                          right: "2px",
                        }}
                      >
                        <center>
                          <h5 className="card-title mx-4">
                            <b>{val.name}</b>
                          </h5>

                          <h5>
                            <i>city : {val.city}</i>
                          </h5>

                          <Link
                            to={{ pathname: "/details", value: { val } }}
                            className="btn btn-lg btn-dark"
                            style={{
                              paddingLeft: "30px",
                              paddingRight: "30px",
                              paddingBottom: "1px",
                            }}
                          >
                            <h6>Details</h6>
                          </Link>
                        </center>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
