import { Outlet } from "react-router-dom";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Outlet></Outlet>
    </>
  );
};

export default Home;
