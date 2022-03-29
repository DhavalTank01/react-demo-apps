import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const CreateNotes = (props) => {
  const [UserData, SetUserData] = useState({
    title: "",
    content: "",
  });

  const [Flag, SetFlag] = useState(false);

  const InputEvent = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    SetUserData((preData) => {
      return {
        ...preData,
        [name]: value,
      };
    });
  };
  const AddEvent = () => {
    props.passAddEvent(UserData);
    SetUserData({
      title: "",
      content: "",
    });
  };

  const ShowBox = () => {
    {
      Flag ? SetFlag(false) : SetFlag(true);
    }
  };

  return (
    <>
      <div className="note-box">
        <form autoComplete="off">
          {Flag ? (
            <TextField
              type="text"
              label="Title"
              className="note-title"
              placeholder="Title"
              required
              name="title"
              value={UserData.title}
              onChange={InputEvent}
            />
          ) : null}
          <textarea
            className="note-notes"
            required
            cols=""
            rows=""
            placeholder="Write your note"
            name="content"
            value={UserData.content}
            onChange={InputEvent}
            onClick={ShowBox}
          ></textarea>
          {Flag ? (
            <Button className="note-btn" onClick={AddEvent}>
              <AddIcon />
            </Button>
          ) : null}
        </form>
      </div>
    </>
  );
};

export default CreateNotes;
