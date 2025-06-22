import { Outlet } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Home></Home>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
