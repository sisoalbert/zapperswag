import { Link, Outlet } from "react-router-dom";
import ProductsList from "../components/ProductsList";

const Home: React.FC = (): JSX.Element => {
  return (
    <div style={{ backgroundColor: "yellow" }}>
      <Outlet />
      {/* <br />
      <button>
        <Link to="/">Back</Link>
      </button> */}
      <ProductsList />
    </div>
  );
};

export default Home;
