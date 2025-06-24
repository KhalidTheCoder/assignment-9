import { Outlet, useNavigation } from "react-router";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import Loading from "./components/Loading";

function App() {
  const { state } = useNavigation();
  return (
    <>
      <Navbar></Navbar>
      {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>}
      <Footer></Footer>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
