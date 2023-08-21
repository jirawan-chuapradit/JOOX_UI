import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import "./App.css"
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <div className="middle_container">
          <Sidebar/>
          <Content/>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
