import { Link } from "react-router-dom";
const Error = () => {
  document.title = "Error page";
  return (
    <>
      <h1 className="text-center text-capitalize">404 Error</h1>
      <h1 className="text-center text-capitalize">page not found</h1>
      <h3 className="text-center text-capitalize "><Link className="error_link" to="/">Go Back</Link></h3>
    </>
  );
};
export default Error;
