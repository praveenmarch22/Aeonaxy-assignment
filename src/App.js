import "./App.css";
import FirstContainer from "./components/FirstContainer";
import Footer from "./components/Footer";
import MiddleContainer from "./components/MiddleContainer";
import NavBar from "./components/NavBar";
import RegistrationForm from "./components/RegistrationForm";
import SecondContainer from "./components/SecondContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <FirstContainer />
      <div className="flex ">
        <SecondContainer />
        <RegistrationForm />
      </div>
      <MiddleContainer />
      <Footer />
    </div>
  );
}

export default App;
