import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import HomeIcon from "@material-ui/icons/Home";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import CallIcon from "@material-ui/icons/Call";
import DirectionsIcon from "@material-ui/icons/Directions";
const Contact = () => {
  document.title = "Contact us";
  const [UserData, SetUserData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [Data, SetData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const InputEvent = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    SetUserData((preVal) => {
      return { ...preVal, [name]: value };
    });
  };

  const ContactDetails = (event) => {
    event.preventDefault();
    if (
      UserData.fname === "" ||
      UserData.lname === "" ||
      UserData.email === "" ||
      UserData.phone === "" ||
      UserData.subject === "" ||
      UserData.message === ""
    ) {
      alert("Please Fill the form.");
    } else {
      alert(
        `Thank you ${Data.fname} ${Data.lname}. We will contact as soon as posible.`
      );
      SetData(() => {
        return {
          fname: UserData.fname,
          lname: UserData.lname,
          email: UserData.email,
          phone: UserData.phone,
          subject: UserData.subject,
          message: UserData.message,
        };
      });
      SetUserData(() => {
        return {
          fname: "",
          lname: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        };
      });
    }
  };
  return (
    <>
      <section
        id=""
        className="d-flex align-items-center justify-content-center flex-column mt-3 "
      >
        <div className="container-fluid">
          <div className="row ">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col">
                  <div className="map-box">
                    <div className="map">
                      <Card className="map-card">
                        <CardActionArea>
                          <CardContent>
                            <iframe
                              className="home-map"
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.1357112449705!2d71.97264361478844!3d22.386240785279053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395ed52297b7be11%3A0xfccabb21ee55c78f!2sSatvara%20Society%2C%20Dhandhuka%2C%20Gujarat%20382460!5e0!3m2!1sen!2sin!4v1631600885737!5m2!1sen!2sin"
                              allowfullscreen=""
                              loading="lazy"
                              title="My Address"
                            ></iframe>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </div>
                    <div className="address-info">
                      <Card className="mt-1">
                        <CardActionArea>
                          <CardContent>
                            <Typography
                              variant="body2"
                              color="textSecondary"
                              component="p"
                              className="text-capitalize MyFont"
                            >
                              <HomeIcon /> Satavara Society,
                              <br></br>
                              railway station opposite,
                              <br></br>
                              Dhandhuka - 382460
                            </Typography>
                            <Typography
                              variant="body2"
                              color="textSecondary"
                              component="p"
                              className="mt-1 MyFont"
                            >
                              <EmailIcon /> dhaval2001@gmail.com
                            </Typography>
                            <Typography
                              variant="body2"
                              color="textSecondary"
                              component="p"
                              className="text-capitalize mt-1 MyFont"
                            >
                              <PhoneIphoneIcon /> 9904924102 (mon - fri 10 AM to
                              6 PM)
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Button
                            size="small"
                            color="primary"
                            className="contact-btn1"
                          >
                            <a
                              href="https://maps.google.com/maps?ll=22.386241,71.974832&z=16&t=m&hl=en&gl=IN&mapclient=embed&q=Satvara%20Society%20Dhandhuka%2C%20Gujarat%20382460"
                              target="_blank" rel="noreferrer"
                              className="text-decoration-none contact-btn1 MyFont"
                            >
                              <DirectionsIcon /> Direction
                            </a>
                          </Button>
                          <Button
                            size="small"
                            color="primary"
                            className="MyFont"
                          >
                            <CallIcon />
                            call now
                          </Button>
                        </CardActions>
                      </Card>
                    </div>
                  </div>
                </div>
                <div className="col d-flex align-items-center justify-content-center">
                  <div className="form-box">
                    <form
                      className="contact-form"
                      noValidate
                      autoComplete="off"
                    >
                      <div className="controls">
                        <h4 className="text-capitalize text-center ">
                          get in toch
                        </h4>
                        <TextField
                          value={UserData.fname}
                          className="input-box"
                          name="fname"
                          type="text"
                          placeholder="Enter your first name"
                          id="standard-basic"
                          label="First Name"
                          onChange={InputEvent}
                        />
                      </div>
                      <div className="controls">
                        <TextField
                          value={UserData.lname}
                          name="lname"
                          className="input-box"
                          onChange={InputEvent}
                          type="text"
                          placeholder="Enter your last name"
                          id="standard-basic"
                          label="Last Name"
                        />
                      </div>

                      <div className="controls">
                        <TextField
                          value={UserData.email}
                          name="email"
                          className="input-box"
                          onChange={InputEvent}
                          type="email"
                          placeholder="Enter your email"
                          id="standard-basic"
                          label="Email"
                        />
                      </div>
                      <div className="controls">
                        <TextField
                          value={UserData.phone}
                          name="phone"
                          className="input-box"
                          onChange={InputEvent}
                          type="number"
                          placeholder="Enter your phone number"
                          id="standard-basic"
                          label="Phone Number"
                        />
                      </div>
                      <div className="controls">
                        <TextField
                          value={UserData.subject}
                          name="subject"
                          className="input-box"
                          onChange={InputEvent}
                          id="outlined-multiline-static"
                          type="text"
                          placeholder="Enter your subject"
                          label="Subject"
                          multiline
                          rows={4}
                        />
                      </div>
                      <div className="controls">
                        <TextField
                          value={UserData.message}
                          name="message"
                          className="input-box"
                          onChange={InputEvent}
                          type="text"
                          placeholder="Enter your message"
                          id="outlined-multiline-static"
                          label="Message"
                          multiline
                          rows={4}
                        />
                      </div>
                      <div className="controls d-flex align-items-center justify-content-center">
                        <Button
                          color="primary"
                          onClick={ContactDetails}
                          className="MyFont"
                        >
                          Submit
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
