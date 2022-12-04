import "./App.css";
import { Fragment } from "react";
import Navbar from "./components/navigation/navbar.component";
import Main from "./components/main/main.component";
import Footer from "./components/footer/footer.component";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Main />
      <Footer />
    </Fragment>
  );
};

export default App;
