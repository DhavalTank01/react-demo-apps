import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNotes from "./CreateNotes";
import NoteCard from "./NoteCard";
import "./KeepApp.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const KeepApp = () => {
  const [NotesData, SetNotes] = useState([]);
  const AddNote = (notes) => {
    alert("Add Note Successfully." + notes);
    SetNotes((preData) => {
      return [...preData, notes];
    });
  };
  const DeleteNote = (nid) => {
    alert("Note Delete Successfully." + nid);
    SetNotes((oldData) => {
      oldData.filter((item, idx) => {
        return idx !== nid;
      });
    });
  };
  console.log(NotesData);
  return (
    <>
      <div className="AppBodyBox">
        <Header />
        <div className="KeepNoteBody">
          <CreateNotes passAddEvent={AddNote} />
          <div className="user-notes">
            {NotesData.map((value, index) => {
              return (
                <>
                  <div className="notes">
                    <NoteCard
                      passdeleteEvent={DeleteNote}
                      key={index}
                      id={index}
                      Title={value.title}
                      Content={value.content}
                    />
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default KeepApp;
