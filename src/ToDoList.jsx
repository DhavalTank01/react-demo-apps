import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Tooltip from "@material-ui/core/Tooltip";

const ToDOListItems = (props) => {
  return (
    <>
      <div className="todo_style">
        <Tooltip title="Delete Item">
          <DeleteForeverIcon
            className="closebtn"
            onClick={() => {
              props.onSelect(props.id);
            }}
          />
        </Tooltip>
        <li key={props.ind}> {props.text} </li>
      </div>
    </>
  );
};
const ToDoList = () => {
  const [inputList, SetInputList] = useState("");
  const [todolist, SetTodoList] = useState([]);
  const deleteItem = (id) => {
    SetTodoList((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  const InputEvent = (prop) => {
    SetInputList(prop.target.value);
  };

  const AddList = () => {
    SetTodoList((oldItems) => {
      return [...oldItems, inputList];
    });
    SetInputList("");
  };
  return (
    <>
      <div className="main-box">
        <div className="center">
          <h1 className="title">ToDo List</h1>
          <div className="input-box">
            <TextField
              type="text"
              name="inputdate"
              value={inputList}
              onChange={InputEvent}
              id="outlined-basic"
              className="add_item"
              label="Add Item"
              variant="outlined"
              placeholder="Add Item"
              title="Add Item"
            />
            <Tooltip title="Add Item">
              <Button className="add_btn" onClick={AddList} variant="contained">
                <AddIcon />
              </Button>
            </Tooltip>
          </div>
          <ol>
            {todolist.map((item, index) => {
              return (
                <ToDOListItems
                  text={item}
                  key={index}
                  id={index}
                  onSelect={deleteItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default ToDoList;
