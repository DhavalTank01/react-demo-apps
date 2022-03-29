import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import React, { useState } from "react";
import todoimg from "./images/img1.png";
import Button from "@mui/material/Button";

const Home = () => {
  const [udata, SetUdata] = useState("");
  const [List, SetList] = useState([]);
  const [Icon, SetIcon] = useState(true);
  const [EditItem, SetEditItem] = useState(null);
  const AddItem = () => {
    if (!udata) {
      alert("Pleace add item.");
    } else if (udata && !Icon) {
      SetList(
        List.map((ele) => {
          if (ele.id === EditItem) {
            return { ...ele, name: udata };
          }
          return ele;
        })
      );
      SetIcon(true);
      SetEditItem(null);
      SetUdata("");
    } else {
      SetList((preData) => {
        const newData = { id: new Date().getTime().toString(), name: udata };
        return [...preData, newData];
      });
      SetUdata("");
    }
  };
  const deleteItem = (id) => {
    SetList(() => {
      return List.filter((item, idx) => {
        return id !== item.id;
      });
    });
  };

  const editItem = (id) => {
    const editData = List.find((ele) => {
      return id === ele.id;
    });

    SetIcon(false);
    SetUdata(editData.name);
    SetEditItem(editData.id);
  };

  const ListItem = (prop) => {
    return (
      <>
        <li className="list-group-item" id={prop.id}>
          {prop.text}
          <DeleteOutlineIcon
            className="delete-icon"
            onClick={() => deleteItem(prop.id)}
          />
          <EditIcon className="edit-icon" onClick={() => editItem(prop.id)} />
        </li>
      </>
    );
  };
  return (
    <section id="home-section">
      <div className="container-fluid">
        <div className=" container-lg">
          <div className="row main-box ">
            <div className="col">
              <figure className="image-box d-flex align-items-center flex-column justify-content-center">
                <img src={todoimg} alt="logo" />
                <h4 className="text-capitalize text-center mt-1">
                  Add your list here
                </h4>
              </figure>
              <div className="addItem ">
                <div className="col">
                  <div className="input-group  input-box">
                    <div className="Input_Filed">
                      <input
                        placeholder="Add Item"
                        name="udata"
                        id="udata"
                        className="control-Input"
                        value={udata}
                        onChange={(event) => {
                          SetUdata(event.target.value);
                        }}
                      />
                    </div>

                    <div className="add-btn-box">
                      <Button
                        variant="outlined"
                        className="add-btn"
                        onClick={AddItem}
                      >
                        {Icon ? <AddIcon /> : <EditIcon />}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="showItem">
                <ul className="list-group">
                  {List.map((cele, index) => {
                    return (
                      <ListItem text={cele.name} id={cele.id} key={cele.id} />
                    );
                  })}
                </ul>

                <div className="d-flex align-items-center j flex-column">
                  <Button
                    variant="outlined"
                    className="clear-btn"
                    onClick={() => {
                      SetList([]);
                    }}
                  >
                    clear all
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
