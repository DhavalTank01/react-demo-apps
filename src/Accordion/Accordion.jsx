import React, { useState } from "react";
import AccordionData from "./AccordionData";
import "../Accordion/Accordion.css";
import Button from "@material-ui/core/Button";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const MyAccordion = ({ id, question, answer }) => {
  const [show, SetShow] = useState(false);
  const [icon, SetIcon] = useState("➕");
  const DataShow = () => {
    if (show === false) {
      SetIcon("➖");
      SetShow(true);
    } else {
      SetIcon("➕");
      SetShow(false);
    }
  };
  return (
    <>
      <div className="mb-3">
        <div className="question">
          <Button onClick={DataShow} variant="contained" color="primary">
            <p>
              <span>{icon}</span>
              {question}
            </p>
          </Button>
        </div>
        {show && <p className="answer">{answer}</p>}
      </div>
    </>
  );
};
const Accordion = () => {
  return (
    <>
      <section className="main-div">
        <div className="center-div">
          <div className="title">
            <p>react interview questions</p>
          </div>
          <div className="">
            {AccordionData.map((cele) => {
              return <MyAccordion key={cele.id} {...cele} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Accordion;
