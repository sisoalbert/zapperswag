import People from "./components/People";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import NavBar from "./components/NavBar";
import Checkout from "./pages/CheckOut";
// import Payment from "./pages/Payment";
// import Address from "./pages/Address";

const App: React.FC = (): JSX.Element => {
  // const mainRoutes = {
  //   path: "/",
  //   element: <People />,
  //   children: [
  //     { path: "*", element: <Navigate to="/404" /> },
  //     { path: "/", element: <NavBar /> },
  //     { path: "404", element: <NavBar /> },
  //     { path: "account", element: <Navigate to="/account/list" /> },
  //   ],
  // };
  // const routing = useRoutes([mainRoutes]);

  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<Home />} />
          <Route path="/:productId" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          {/* <Route path="/payment" element={<Payment />} />
          <Route path="/address" element={<Address />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <NavBar />
      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
