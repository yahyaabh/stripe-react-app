import "./styles.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Sidebar from "./Sidebar";
import SubMenu from "./SubMenu";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Hero />
      <SubMenu />
    </div>
  );
}
