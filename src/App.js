import './App.css';
import NavBar from "./container/Navbar";
import MainSection from "./container/MainSection";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <MainSection />
      </header>
    </div>
  );
}

export default App;
