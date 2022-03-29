import React, { useEffect, useState } from "react";
const App = () => {
  const [data, SetData] = useState([]);
  const getData = async () => {
    const result = await fetch("https://data.covid19india.org/data.json");
    const adata = await result.json();
    const temp = adata.statewise;
    SetData(temp);
  };
  useEffect(() => {
    getData();
  });
  return (
    <>
      <div className="container-fluid">
        <div className="main-heading">
          <h1 className="text-center text-capitalize mt-3 mb-3">
            india covid-19 dashboard
          </h1>
        </div>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th>State</th>
                <th>Confirmed</th>
                <th>Recoverd</th>
                <th>Deaths</th>
                <th>Active</th>
                <th>Updated Time</th>
              </tr>
            </thead>
            <tbody>
              {data.map((cdata, idx) => {
                return (
                  <>
                    <tr key={idx}>
                      <td>{cdata.state}</td>
                      <td>{cdata.confirmed}</td>
                      <td>{cdata.recovered}</td>
                      <td>{cdata.deaths}</td>
                      <td>{cdata.active}</td>
                      <td>{cdata.lastupdatedtime}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default App;
