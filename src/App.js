import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Home/Banner/Banner";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path={"/"} element={<Banner></Banner>}></Route>
      </Routes>
    </>
  );
}

export default App;
