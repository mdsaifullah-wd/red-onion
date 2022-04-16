import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Foods from "./components/Home/Foods/Foods";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/*" element={<Home></Home>}>
          <Route index element={<Foods></Foods>}></Route>
          <Route path=":foodType" element={<Foods></Foods>}></Route>
        </Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </>
  );
}

export default App;
