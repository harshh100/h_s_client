import Navbar from './componants/Navbar';
import Home from './componants/Home';
import Menu from './componants/Itm_list';
import './App.css';
import Contact from './componants/Contact';
// import Ruff from './componants/ruff';
// import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Aboutus from './componants/Aboutus';
// import ServicesArea from './componants/ServicesArea';
import Footer from './componants/Footer';
// import ServicesArea from './componants/ServicesArea';

function App() {
  return (
    <>
      <div className='mainapp'>
        <div className="RouterDiv">
          <Router>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<Aboutus />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/menu' element={<Menu />} />
            </Routes>
            <Footer />
          </Router>
        </div>
      </div >
    </>
  );
}
export default App;
