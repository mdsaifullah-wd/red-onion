import Banner from "./Banner/Banner";

const Home = ({ children }) => {
  return (
    <>
      <Banner></Banner>
      {children}
    </>
  );
};

export default Home;
