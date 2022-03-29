//installation

// install node js
// install VS Code
// install npm and create react app
// 1. npm install -g create-reacr-app
// 2. create-react-app <app name>

import React from "react";
import ReactDOM from "react-dom";
// 1. Basic About React

// ReactDOM.render('what show','Where show','callback function')
// 1st way
ReactDOM.render("This Is React App", document.getElementById("root"));
// 2nd way
ReactDOM.render(
  React.createElement("h1", null, "This Is React App"),
  document.getElementById("root")
);
// 3rd way
let h1 = document.createElement("h1");
h1.innerHTML = "Dhaval Tank";
document.getElementById("root").appendChild(h1);

let h1 = document.createElement("h1");
h1.innerHTML = "Hello World";
document.getElementById("root").appendChild(h1);

// 2. JSX
// JSX OR javaScript XML OR javaScript
ReactDOM.render(
  React.createElement("h1", null, "This is react app."),
  document.getElementById("root")
);

//  multiple element into render method
// 1st way
ReactDOM.render(<div>Hii Hello</div>, document.getElementById("root"));
// 2nd way use array
ReactDOM.render(
  ["Dhaval Tank", "Jaydip Tank"],
  document.getElementById("root")
);

// 3. React Fragment
// React fragment for avoid one extra div added into DOM
//1st way
ReactDOM.render(
  <React.Fragment>'Dhaval Tank' Jaydip Tank</React.Fragment>,
  document.getElementById("root")
);
//2nd way
ReactDOM.render(
  <>
    <p>Dhaval</p>
    <p>Jaydip</p>
  </>,
  document.getElementById("root")
);

// React Ex 1
import React from "react";
import ReactDOM from "react-dom";
ReactDOM.render(<h1>This is react app</h1>, document.getElementById("root"));
ReactDOM.render(
  <>
    <h1>This IS Exercise 1</h1>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores eius
      excepturi minus fugit nihil, suscipit modi quo in nobis ad architecto
      beatae magni expedita corrupti a omnis dolor et repudiandae ea quae
      facilis aliquam eveniet? Ducimus quos repudiandae quaerat, ad tenetur esse
      culpa vero enim earum. Qui non nam consequuntur quo magni optio molestiae,
      impedit rerum, modi amet ut ea sequi culpa inventore exercitationem est
      corporis vel harum! Cumque vitae, officia molestiae perferendis,
      consectetur mollitia facere magnam fugiat perspiciatis illo voluptatem
      modi quisquam eum tempore libero esse nemo explicabo. Debitis perspiciatis
      ex similique quo accusamus. Repellendus delectus officia deserunt
      deleniti!
    </p>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
      <li>Item 5</li>
    </ul>
  </>,
  document.getElementById("root")
);

// 4. React Expressions
let name = "Dhaval Tank";
let a = 11;
let b = 22;
ReactDOM.render(
  [
    <h3>React Expressions</h3>,
    <p> My name is {name}</p>,
    <p> Sum is {3 + 4}</p>,
    <p> a + b is {a + b}</p>,
  ],
  document.getElementById("root")
);

// 5. template literals
let fname = "Dhaval";
let lname = "Tank";
let rollnum = 4244;

ReactDOM.render(
  <>
    <span>
      {" "}
      My Name is {fname} {lname}{" "}
    </span>
    <br></br>
    <span> My Name is {fname + lname} </span>
    <br></br>
    <span> My Name is {`${fname} ${lname}`} </span>
    <br></br>
    <span>
      {" "}
      {` My Name is ${fname} ${lname} and roll number is ${rollnum}`}{" "}
    </span>
  </>,
  document.getElementById("root")
);

// Ex 2 live colock
const fname = "Dhaval";
const lname = "Tank";
let date = new Date();

ReactDOM.render(
  <>
    <span>{`Hello, My Name is ${fname} ${lname} .`}</span>
    <br></br>
    <span>{`Today's date is ${date.getDate()} / ${
      date.getMonth() + 1
    } / ${date.getFullYear()} .`}</span>
    <br></br>
    <span></span>
    <span id="nctime">{`Cuurent time is ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} .`}</span>
    {/* <span>{`Current Date is: ${date.toLocaleDateString()}`}</span> */}
    {/* <br></br> */}
    {/* <span>{`Current Time is: ${date.toLocaleTimeString()}`}</span> */}
  </>,
  document.getElementById("root")
);

function getTime() {
  var date = new Date();
  let ct = `Cuurent time is ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} `;
  document.getElementById("nctime").innerHTML = ct;
}
setInterval(getTime);

// 6. Attribute in JSX
let link1 = "https://ksschool.org.in";
let linkName1 = "K S Website";
let linkName2 = "Google";
let link2 = "https://google.com";

let image1 = "https://picsum.photos/100/100?grayscale";
let image2 = "https://picsum.photos/100/100";

ReactDOM.render(
  <>
    <span contentEditable="true">
      This Is React App and it is editable content.
    </span>
    <br></br>
    <a href={link1} target="_blank">
      {linkName1}
    </a>
    <br></br>
    <a href={link2} target="_blank">
      {linkName2}
    </a>
    <br></br>
    <img src={image1} alt="image1" />
    <br></br>
    <img src={image2} alt="image2" />
    <br></br>
  </>,
  document.getElementById("root")
);

// 7. importing CSS File in react
// note: class is already define so we user className instedof class keyword.

let image1 = "https://picsum.photos/500/500?random=1";
let image2 = "https://picsum.photos/500/500?random=2";
let image3 = "https://picsum.photos/500/500?random=3";
ReactDOM.render(
  <>
    <div className="Title">
      <p>This is React App</p>
    </div>
    <div class="para">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        praesentium ipsam minima maiores quisquam eligendi veritatis adipisci
        pariatur! Provident exercitationem aliquid laboriosam magnam? Nulla,
        placeat. Voluptas porro pariatur iusto corrupti.
      </p>
    </div>
    <div className="Images">
      <img src={image1} alt="image1" />
      <img src={image2} alt="image2" />
      <img src={image3} alt="image3" />
    </div>
  </>,
  document.getElementById("root")
);

//
// React ex 3 greeting messsage
let message = "";
// let date = new Date(2021, 8, 13, 20);
let date = new Date();
let hour = date.getHours();
const mainBox = {
  background: "white",
  width: "35%",
  textAlign: "center",
  textTransform: "capitalize",
  fontSize: "45px",
  margin: "15% auto",
  borderRadius: "20px",
  boxShadow: "0px 0px 3px 5px lightgrey",
  fontWeight: "bold",
  padding: "10px",
};

const messageCSS = {};
const greetingMessage = {};

if (hour >= 1 && hour < 12) {
  message = "Good Morning";
  messageCSS.color = "green";
} else if (hour >= 12 && hour < 19) {
  message = "Good Afternoon";
  messageCSS.color = "orange";
} else {
  message = "Good Night";
  messageCSS.color = "blue";
}
let nctime = "";
function getTime() {
  var date = new Date();
  let ct = `Cuurent time is ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} `;
  document.getElementById("nctime").innerHTML = ct;
}
setInterval(getTime);

ReactDOM.render(
  <>
    <div style={mainBox}>
      <span>{`Current Date is: ${date.toLocaleDateString()}`}</span>
      <br></br>
      <span id="nctime">{`Cuurent time is ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} .`}</span>
      <p style={greetingMessage}>
        <span style={messageCSS}> {message} sir</span>
      </p>
    </div>
  </>,
  document.getElementById("root")
);

// 8. import and export in ReactJS
import myname from "./app1"; // app1 is external jsx file.
import { rno, year } from "./app1";
import * as obj1 from "./app1";

ReactDOM.render(
  <>
    <h2>This is react app</h2>
    <h3>import export in react.</h3>
    <ol>
      <li>hii</li>
      <li>{myname}</li>
      <li>{rno}</li>
      <li>{year}</li>
      <li>{obj1.default}</li>
      <li>{obj1.year}</li>
      <li>{obj1.getAge()}</li>
    </ol>
  </>,
  document.getElementById("root")
);

//
// ex 5 create calculater using impoer and export.
// to run this app we need file like calculater.jsx,CalApp.jsx
import Calculater from "./CalApp";
import { Title } from "./CalApp";

ReactDOM.render(
  <>
    <Title /> <Calculater />
  </>,
  document.getElementById("root")
);

// code of CalApp.jsx
import React from "react";
import { add, sub, mul, div } from "./calculater";

function Calculater() {
  return (
    <div>
      <ul>
        <li>Sum of two number is: {add(10, 20)} </li>
        <li>Sub of two number is: {sub(10, 5)} </li>
        <li>Sub of two number is: {sub(10, 15)} </li>
        <li>Div of two number is: {div(10, 3)} </li>
        <li>Mul of two number is: {mul(10, 3)} </li>
      </ul>
    </div>
  );
}

function Title() {
  return <h2>This is calculater using inport and export.</h2>;
}

export default Calculater;
export { Title };

// code of calculater.jsx
function add(a1, b1) {
  let a = a1;
  let b = b1;
  return a + b;
}
function sub(a2, b2) {
  let a = a2;
  let b = b2;
  return a - b;
}
function div(a3, b3) {
  let a = a3;
  let b = b3;
  return (a / b).toFixed(2);
}
function mul(a4, b4) {
  let a = a4;
  let b = b4;
  return a * b;
}

export { add, sub, mul, div };


// prop in react.
// here card is custom element of react 
import Card from "./Cards";
import "./props.css";



ReactDOM.render(
  <>
    <div className="app_title">
      <p> list of best songs </p>
    </div>
    <div className="cards">
      <Card 
        imgsrc="https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_universalmusic/music/1622508521/srch_universalmusic_00602438379347-INUM72100032.jpg"
        title="Baarish Ban Jaana"
        category="Hindi Songs"
        link="https://wynk.in/u/eo5anhu8I"
      />

      <Card
        imgsrc="https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_universalmusic/music/1625359129/srch_universalmusic_00602438554621-INUM72100040.jpg"
        title="Filhaal2 Mohabbat"
        category="Hindi Songs"
        link="https://wynk.in/u/L03gCC7tM"
      />
      <Card
        imgsrc="https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/music/8903431780997/1615215618/srch_hungama_54811256.jpg"
        title="Dil Tod Ke"
        category="Hindi Songs"
        link="https://wynk.in/u/wmNfuil4l"
      />
      <Card
        imgsrc="https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_believe/music/3616553143438/1613558709/srch_believe_A10320WT038019607U.jpg"
        title="Rabba Mehar Kari"
        category="Hindi Songs"
        link="https://wynk.in/u/WVR0HbMOG"
      />
      <Card
        imgsrc="https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_universalmusic/music/1542503550/srch_universalmusic_00602577273605-INUM71800036.jpg"
        title="Jo Tu Na Mila"
        category="Hindi Songs"
        link="https://wynk.in/u/tfUPUoTFM"
      />
      <Card
        imgsrc="https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/music/8903431765260/1615224016/srch_hungama_51227840.jpg"
        title="Malang (Title Track)"
        category="Hindi Songs"
        link="https://wynk.in/u/d9giCeOPl"
      />
      <Card
        imgsrc="https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1566549349/49075853.jpg"
        title="Pachtaoge"
        category="Hindi Songs"
        link="https://wynk.in/u/m7TUJXpGY"
      />
      <Card
        imgsrc="https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_sonymusic/music/srch_sonymusic_A10328E0009298868Y.jpg"
        title="Shayad"
        category="Hindi Songs"
        link="https://wynk.in/u/hn1yOKQ7T"
      />
    </div>
  </>,
  document.getElementById("root")
);

// code of cards.jsx
// Card is custom element.
function Card(props) {
  return (
    <>
      <div className="card">
        <div className="cardimage">
          <a href={props.link} target="_blank" rel="noopener noreferrer"> <img src={props.imgsrc} alt={props.title} /></a>
        </div>
        <div className="cardinfo">
          <span className="category">{props.category}</span>
          <a href={props.link} target="_blank" rel="noopener noreferrer" className="title"><h3 >{props.title}</h3>  </a>
          <a className="cardlink" href={props.link} target="_blank" rel="noopener noreferrer">
           play now
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;


// access value using array in react.
import { Card } from "./Cards";
import { Sdata } from "./Cards";
import "./props.css";

ReactDOM.render(
  <>
    <div className="app_title">
      <p> list of best songs </p>
    </div>
    <div className="cards">
      <Card
        imgsrc={Sdata[0].imgsrc}
        title={Sdata[0].title}
        category={Sdata[0].category}
        link={Sdata[0].link}
      />
      <Card
        imgsrc={Sdata[1].imgsrc}
        title={Sdata[1].title}
        category={Sdata[1].category}
        link={Sdata[1].link}
      />
      <Card
        imgsrc={Sdata[2].imgsrc}
        title={Sdata[2].title}
        category={Sdata[2].category}
        link={Sdata[2].link}
      />
      <Card
        imgsrc={Sdata[3].imgsrc}
        title={Sdata[3].title}
        category={Sdata[3].category}
        link={Sdata[3].link}
      />
      <Card
        imgsrc={Sdata[4].imgsrc}
        title={Sdata[4].title}
        category={Sdata[4].category}
        link={Sdata[4].link}
      />
      <Card
        imgsrc={Sdata[5].imgsrc}
        title={Sdata[5].title}
        category={Sdata[5].category}
        link={Sdata[5].link}
      />
      <Card
        imgsrc={Sdata[6].imgsrc}
        title={Sdata[6].title}
        category={Sdata[6].category}
        link={Sdata[6].link}
      />
      <Card
        imgsrc={Sdata[7].imgsrc}
        title={Sdata[7].title}
        category={Sdata[7].category}
        link={Sdata[7].link}
      />
    </div>
  </>,
  document.getElementById("root")
);

// map fn for access value of array in react
// syntax: array.map(function(currentValue, index, arr), thisValue)
// ex best song list app  in react.
function ncard(val) {
  return (
    <Card
      imgsrc={val.imgsrc}
      title={val.title}
      category={val.category}
      link={val.link}
    />
  );
}
{/* 1st way using map with fn. */}
ReactDOM.render(
  <>
    <div className="app_title">
      <p> list of best songs </p>
    </div>
    <div className="cards">
{Sdata.map(ncard)}
</div>
</>
, document.getElementById('root'));

{/* 2nd way using map with fn. */}
ReactDOM.render(
  <>
    <div className="app_title">
      <p> list of best songs </p>
    </div>
    <div className="cards">
{Sdata.map(function ncard(val) {
  return (
    <Card
      imgsrc={val.imgsrc}
      title={val.title}
      category={val.category}
      link={val.link}
    />
  );
})}
</div>
</>
, document.getElementById('root'));

{/* 3rd way using map array fate fn. */}
ReactDOM.render(
  <>
    <div className="app_title">
      <p> list of best songs </p>
    </div>
    <div className="cards">
{Sdata.map((val) => {
  return (
    <Card
      imgsrc={val.imgsrc}
      title={val.title}
      category={val.category}
      link={val.link}
    />
  );
})}
</div>
</>
, document.getElementById('root'));

// if else in react
const Hindi = () => {
  return (
    <Card
      key={Sdata[0].id}
      imgsrc={Sdata[0].imgsrc}
      title={Sdata[0].title}
      category={Sdata[0].category}
      link={Sdata[0].link}
    />
  );
};
const Internationl = () => {
  return (
    <Card
      key={Sdata[10].id}
      imgsrc={Sdata[10].imgsrc}
      title={Sdata[10].title}
      category={Sdata[10].category}
      link={Sdata[10].link}
    />
  );
};

let userChoice = "";
userChoice = "International Top Hits";
userChoice = "Hindi";

// 1st way of if else
const FavS = () => {
  if (userChoice === "Hindi") {
    return <Hindi />;
  } else {
    return <Internationl />;
  }
};

// 2nd way (ternary operator)
const FavS2 = () => {
  return ((userChoice==="Hindi") ?  <Hindi /> : <Internationl />); 
};

const App = () => {
  return (
    <>
      <div className="app_title">
        <p> list of best songs</p>
      </div>
      <div className="cards">
        <FavS2 />
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
// ex ssong playlist show
import App from './SongList';
import "./props.css";

ReactDOM.render(<App />, document.getElementById("root"));


// ex slot matchine
import SlotMachine from "./SlotMachine";
ReactDOM.render(<SlotMachine />, document.getElementById("root"));
// need Sloatmachine.jsx file

// hooks and useState

import Hooks from "./Hooks";
import  "./hooks.css";
ReactDOM.render(<Hooks />,document.getElementById("root"));

// hooks.jsx file code
import React, { useState } from "react";
// let cnt = 0;

const Hooks = () => {
  const [cnt, setCount] = useState(0);
  const IncNum = () => {
    setCount(cnt + 1);
  };
  const DecNum = () => {
    setCount(cnt - 1);
  };

  return (
    <>
      <div className="main-box-cnt">
        <h1 className="cntnum">{cnt}</h1>
        <button className="incbtn" onClick={IncNum}>+</button>
        <button className="decbtn" onClick={DecNum}>-</button>
      </div>
    </>
  );
};

export default Hooks;

// ex on click time update using hooks(useState)
import './Hooksclock.css';
import Hooks_clock from './Hooks_clock';
ReactDOM.render(<Hooks_clock />,document.getElementById('root'));

// ex digital clock using hooks
import "./Hooksclock.css";
import DigitalClock from "./DigitalClock";
ReactDOM.render(<DigitalClock />, document.getElementById("root"));

// events in react
import Events from "./Events";
import "./events.css";
ReactDOM.render(<Events />, document.getElementById("root"));

// onclick show name which enter by user 
import ShowName from "./ShowName";
import "./ShowName.css";
ReactDOM.render(<ShowName />,document.getElementById("root"));

// ex react form when registration form submit details show
import ReactForm2 from './ReactForm2';
import "./ShowName.css";
ReactDOM.render( <ReactForm2 />, document.getElementById("root"));
// (... operator) OR spread operator in react.

// 1st use of spread Op is pass as array
var fullName = ["dhaval", "tank"];
var bioData = [1, ...fullName, 20, "male"];

console.log("class 1");
console.log(fullName);
console.log(bioData);

// 2nd use of spread Op is pass as object;
const obj1 = {
  fname: "dhaval",
  lname: "tank",
};

const obj2 = {
  id: 1,
  ...obj1,
  age: 20,
  gender: "male",
};
console.log("class 2");
console.log(obj1);
console.log(obj2);

// 3rd use of spread Op is obj destructring
const list1 = ["dhaval", "parth", "pradip"];
const list2 = ["react", "html", "php"];
const [first, ...rem] = [...list1, ...list2];
console.log("class 3");
console.log(list1);
console.log(list2);
console.log(first);
console.log(rem);

// 4th use od spread Op is concate 2 obj or array.
const list3 = ["dhaval", "parth", "pradip"];
const list4 = [4244, 4178, 4006];
const list5 = [...list3, ...list4];

console.log("class 4");
console.log(list3);
console.log(list4);
console.log(list5);

// registration form using spread oprator.
import RegistrationForm from "./RegistrationForm";
import './ShowName.css';
ReactDOM.render(<RegistrationForm />,document.getElementById("root"));

// ex todo list 
import ToDoList from "./ToDoList";
import "./ToDoList.css";
ReactDOM.render(<ToDoList />, document.getElementById("root"))

// ex onclick increment and decrement number. using metarial UI
import InDecApp from "./InDecApp";
import "./InDecApp.css";
ReactDOM.render(<InDecApp />, document.getElementById("root"));

// ex todo list using metrial UI
import NewToDo from "./NewToDo";
import './NewToDo.css';
ReactDOM.render(<NewToDo />, document.getElementById("root"));

// ex Accordion
import Accordion from "./Accordion/Accordion";
ReactDOM.render(<Accordion />, document.getElementById("root"));

// webpage using bootstrap 
import WebPage from "../src/WebPage1/WebPage";
ReactDOM.render(<WebPage />, document.getElementById("root"));

// ex KeepApp
import KeepApp from "../src/KeepApp/KeepApp";
ReactDOM.render(<KeepApp />, document.getElementById("root"));

// context API
// 1.craete context
// 2. provide to provide context
// 3. consumer to use context
import CompA from "./ContextAPI_useContext/CompA";
ReactDOM.render(<CompA />, document.getElementById("root"));

// use Effect 
// this fn call automaticaly when any hooks change.
ReactDOM.render(<UseEffect />, document.getElementById("root"));

// ex use effect 
// when click btn change the title of html page and show cnt value.
ReactDOM.render(<UseEffectEx />, document.getElementById("root"));

// ex featch data from api and show
import StateWise from "./StateWise/StateWise";
ReactDOM.render(<StateWise />, document.getElementById("root"));

// get data using axios of api
import Pokemon from "./Pokemon";
ReactDOM.render(<Pokemon />, document.getElementById("root"));

// react-router-dom
// Route, Switch, Link, NavLink, Redirect,
// useParams, useLocation, useHistory
import { BrowserRouter } from "react-router-dom";
import Home from "./ReactNavBar/Home";
ReactDOM.render(
  <>
  {/* BrowserRouter for use side routering  */}
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </>,
  document.getElementById("root")
);

// demo website
import App from "./DemoWebSite/App";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// react weather app
import App from "./WeatherApp/App";
ReactDOM.render(<App></App>, document.getElementById("root"));
