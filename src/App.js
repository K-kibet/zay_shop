import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Single from './pages/Single';
import Footer from './components/Footer';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';

import {
  Routes,
  Route,
  useNavigate,
  Redirect
 } from "react-router-dom";
 import { useSelector } from 'react-redux';

import "./App.css";
import Admin from "./pages/Admin";
import Topbar from './components/Topbar';
import Newsletter from './components/Newsletter';
import Settings from './pages/Settings';
import Auth from './pages/Auth';
import Search from './components/Search';

function App() {
  const navigation = useNavigate();
  const user = useSelector((state) => state.user.currenUser)
  return (
    <div className='app'>
        <Topbar />
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/shop/:id' element={<Single/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/auth' element={<Auth />} />
          <Route path='*' element={<Error/>} />
          <Route path='/settings' element={<Settings />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Newsletter />
        <Footer />
    </div>
 );
 }
 export default App;