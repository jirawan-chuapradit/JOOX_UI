import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import "./App.css"

function App() {
  return (
    <div className="App">
        <Navbar/>
        <div className="middle_container">
          <Sidebar/>
          <div className="content_container">
            <a> content</a>
          </div>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
