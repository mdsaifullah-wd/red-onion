import { Link, Outlet } from "react-router-dom";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <div className="food-catagories small-container" id="foods">
        <Link to="/breakfast">Breakfast</Link>
        <Link to="/lunch">Lunch</Link>
        <Link to="/dinner">Dinner</Link>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Home;
