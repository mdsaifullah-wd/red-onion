import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Foods from "./components/Home/Foods/Foods";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/home/:foodType"
          element={
            <Home>
              <Foods></Foods>
            </Home>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
