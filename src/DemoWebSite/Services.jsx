import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ServicesData from "./ServiceData";

const ServiceCard = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <Card className="ServicesCard">
          <CardActionArea>
            <CardMedia
              component="img"
              alt={props.sName}
              height="140"
              image={props.imgsrc}
              title={props.sName}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className="MyFont"
              >
                {props.sName}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className="MyFont"
              >
                {props.sDes}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" className="MyFont">
              view More
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
};
const Services = () => {
  document.title = "Services";

  return (
    <>
      <div className="my-3">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className=" col-9 mx-auto">
            <div className=" row gy-4">
              {ServicesData.map((cele, idx) => {
                return (
                  <>
                    <ServiceCard
                      key={idx}
                      imgsrc={cele.imgsrc}
                      sName={cele.sName}
                      sDes={cele.sDes}
                    />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

export { ServiceCard };
