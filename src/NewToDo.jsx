import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";

const NewToDo = () => {
  const [usritem, SetUserItem] = useState("");
  const [listItems, SetListItem] = useState([]);

  const InputEvent = (obj) => {
    SetUserItem(obj.target.value);
  };
  const AddItem = () => {
    SetListItem((preVal) => {
      return [...preVal, usritem];
    });
    SetUserItem("");
  };

  const ShowList = (props) => {
    const [flag, SetFlag] = useState(false);
    const CutIt = () => {
      SetFlag(true);
    };
    return (
      <>
        <li id={props.id}>
          <Button variant="contained" className="delete_btn">
            <DeleteIcon onClick={CutIt}></DeleteIcon>
          </Button>
          <span style={{ textDecoration: flag ? "line-through" : "none" }}>
            {props.text}
          </span>
        </li>
      </>
    );
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1 className="title">ToDo List</h1>
          <br></br>
          <div className="add_item_box">
            <TextField
              id="outlined-basic"
              className="usrinput"
              label="Add Item"
              name="usritem"
              placeholder="Add Item"
              variant="outlined"
              onChange={InputEvent}
              value={usritem}
            />
            <Button
              variant="contained"
              onClick={AddItem}
              color="primary"
              className="add_btn"
            >
              <AddIcon></AddIcon>
            </Button>
          </div>
          <div className="list_show">
            <ol>
              {listItems.map((item, idx) => {
                return <ShowList id={idx} key={idx} text={item}></ShowList>;
              })}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewToDo;
