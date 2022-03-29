import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import React from "react";
import oimg1 from "../DemoWebSite/images/o1.jpg";
import oimg2 from "../DemoWebSite/images/o2.jpg";
import oimg3 from "../DemoWebSite/images/o3.jpg";
const OwnerCard = (props) => {
  return (
    <>
      <Card className="owner-card">
        <CardActionArea>
          <img src={props.oimgdata} alt={props.oname} className="card-img" />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className="text-capitalize MyFont"
            >
              {props.oname}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className="mb-1 MyFont"
            >
              {props.oemail}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className="text-capitalize MyFont"
            >
              {props.odes}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            className="text-capitalize btn-contact"
          >
            contact
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
const About = () => {
  document.title = "About Us";
  return (
    <>
      <section
        id="AboutSection"
        className="d-flex align-items-center justify-content-center flex-column  "
      >
        <div className="row mb-4">
          <h1 className="text-center text-capitalize">Meet our Owners</h1>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-3">
                <div className="col ">
                  <OwnerCard
                    oname="Dhaval tank"
                    odes="Back and frontend devloper"
                    oemail="dhaval2001@gmail.com"
                    oimgdata={oimg1}
                  />
                </div>
                <div className="col mb-3">
                  <OwnerCard
                    oname="pradip chavda"
                    odes="frontend devloper"
                    oemail="pradip161@gmail.com"
                    oimgdata={oimg2}
                  />
                </div>
                <div className="col mb-3">
                  <OwnerCard
                    oname="parth chauhan"
                    odes="frontend devloper"
                    oemail="parth178@gmail.com"
                    oimgdata={oimg3}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
export { OwnerCard };
