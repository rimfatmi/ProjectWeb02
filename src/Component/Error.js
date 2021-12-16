import { Link } from "react-router-dom";

const Error = () => (
  <div className="error">
    <h1>Stop!</h1>
    <p>something is going wrong!</p>
    <Link to="/browse/popular" className="button">
      Back
    </Link>
  </div>
);

export default Error;
