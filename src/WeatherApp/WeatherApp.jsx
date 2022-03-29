import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import CardActionArea from "@material-ui/core/CardActionArea";
import { useEffect, useState } from "react";
const WeatherApp = () => {
  const [city, SetCity] = useState("Dhandhuka");
  const [localtime, SetLocalTime] = useState("no time");
  const [Data, SetData] = useState({
    cdata: "",
    ldata: "",
  });

  const InputEvent = (event) => {
    SetCity(event.target.value);
    FetchData();
  };

  const FetchData = async () => {
    const url = `https://api.weatherapi.com/v1/current.json?key=6fe9ba37abfa4d2484761750211709&q=${city}`;

    const result = await fetch(url);
    const sdata = await result.json();
    console.log(sdata);
    if (sdata) {
      SetData({
        cdata: sdata.current,
        ldata: sdata.location,
      });
    } else {
      SetData({
        cdata: null,
        ldata: null,
      });
    }
  };
  useEffect(() => {
    FetchData();
  }, []);

  return (
    <>
      <section id="main-body">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="main_box col mt-5  ">
                <div className="search_card">
                  <Card className="">
                    <CardActionArea className="">
                      <div className="card_action">
                        <div className="input_control">
                          <TextField
                            className="Input_field"
                            id="sdata"
                            variant="outlined"
                            placeholder="Search Here"
                            onChange={InputEvent}
                            value={city}
                          />
                        </div>
                        {!Data.cdata ? (
                          <h5 className=" text-center text-capitalize">
                            no data found
                          </h5>
                        ) : (
                          <div className="Search_result">
                            <h1 className=" text-center text-capitalize">
                              <span>
                                <img
                                  className="condition_icon"
                                  src={Data.cdata.condition.icon}
                                  alt="condition icon"
                                />
                              </span>
                              {Data.ldata.name}
                            </h1>
                            <h5 className=" text-center text-capitalize">
                              <span>
                                {Data.ldata.region} - {Data.ldata.country}
                              </span>
                            </h5>
                            <h3 className="text-center text-capitalize">
                              {Data.cdata.temp_c}
                              <i className="far fa-circle fa-circle-1"></i>c |{" "}
                              {Data.cdata.temp_f}
                              <i className="far fa-circle fa-circle-1"></i>f{" "}
                            </h3>
                            <h6 className=" text-center text-capitalize">
                              {Data.cdata.condition.text}
                            </h6>
                            
                            <p className="text-center text-capitalize">
                              last updated time : {Data.cdata.last_updated}
                            </p>
                          </div>
                        )}
                      </div>
                    </CardActionArea>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WeatherApp;
