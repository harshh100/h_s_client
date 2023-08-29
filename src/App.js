import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Itm_list';
import './App.css';
import Contact from './components/Contact';
// import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Aboutus from './components/Aboutus';
import Footer from './components/Footer';
import Unknownurl from './components/Unknownurl';

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
              <Route path='*' element={<Unknownurl />} />
            </Routes>
            <Footer />
          </Router>
        </div>
      </div >
    </>
  );
}
export default App;
