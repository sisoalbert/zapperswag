import { Link, Outlet } from "react-router-dom";

const Details: React.FC = (): JSX.Element => {
  return (
    <div style={{ backgroundColor: "yellow" }}>
      <Outlet />
      <br />
      <button>
        <Link to="/">Back</Link>
      </button>
    </div>
  );
};

export default Details;
