import Contact from "./Contact";
import About from "./About";
import Error from "./Error";
import User from "./User";
import "./index.css";
import { Route, Switch, Link, NavLink, Redirect } from "react-router-dom/";
import SearchFilter from "./SearchFilter";
import { useHistory } from "react-router-dom";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
const Home = () => {
  const Index = () => {
    document.title = "Home page";
    return (
      <>
        <h1 className="text-center text-capitalize">This is Home Page</h1>
      </>
    );
  };
  const Owner = (props) => {
    document.title = "Owner page";
    return (
      <>
        <h1 className="text-center text-capitalize">
          This is Owner Page {props.name}
        </h1>
      </>
    );
  };
  const Menu = () => {
    const his = useHistory();
    return (
      <>
        {/* <h3>Simple link</h3>
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact Us</a>
        <br></br>
        <br></br>
        <h3>React Link using react-router-dom</h3>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
        <br></br>
        <br></br>
        <h3>React NavLink using react-router-dom</h3> */}

        <nav className="navbar_dark">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a href="#">
                <KeyboardBackspaceIcon
                  onClick={() => {
                    his.goBack();
                  }}
                />
              </a>
            </li>
            <li className="nav-item">
              <NavLink exact activeClassName="active_link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact activeClassName="active_link" to="/about">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact activeClassName="active_link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact activeClassName="active_link" to="/contact/owner">
                Owner
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                activeClassName="active_link"
                to="/user/DhavalTank/01"
              >
                User
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact activeClassName="active_link" to="/search">
                Search
              </NavLink>
            </li>
          </ul>
        </nav>

        <br></br>
        <br></br>
      </>
    );
  };

  return (
    <>
      <div className="main-body">
        <Menu></Menu>

        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/about" component={About} />
          {/* using component method 
        this method create new component every time.
        */}
          <Route exact path="/contact" component={Contact} />
          {/* using render method 
        this method update the page info.
        */}
          <Route
            exact
            path="/contact/owner"
            render={() => {
              return <Owner name="DRT" />;
            }}
          />
          <Route exact path="/user/:uname/:id" component={User} />
          <Route exact path="/search" component={SearchFilter} />
          {/* show error page */}
          <Route component={Error} />
          {/* not shw error age but goto home page */}
          {/* <Redirect to="/" /> */}
        </Switch>
      </div>
      {/* Home
      <About />
      <Contact /> */}
    </>
  );
};
export default Home;
