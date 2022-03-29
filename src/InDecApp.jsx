import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import Alert from '@material-ui/lab/Alert';
const InDecApp = () => {
  const [cnt, SetCnt] = useState(0);
  const Increm = () => {
    let ncnt = cnt + 1;
    SetCnt(ncnt);
  };
  const Decrem = () => {
    let ncnt;
    if (cnt > 0) {
      ncnt = cnt - 1;
    } else {
      ncnt = cnt;
      alert("Sorry, Zero limit reatch.");
      // <Alert variant="outlined" severity="warning">
      //   This is a warning alert — check it out!
      // </Alert>
    }
    SetCnt(ncnt);
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1 className="title">{cnt}</h1>
          <div className="btn_div">
            {/* <button onClick={Increm}><i class="fas fa-plus"></i></button> */}
            <Tooltip title="Add" aria-label="add">
              <Button onClick={Increm}>
                <AddIcon />
              </Button>
            </Tooltip>
            {/* <button onClick={Decrem}><i class="fa fa-minus" aria-hidden="true"></i></button> */}
            <Tooltip title="Delete" aria-label="delete">
              <Button onClick={Decrem}>
                <RemoveIcon />
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};

export default InDecApp;
