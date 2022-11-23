import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Login from './pages/Login';
import Register from './pages/Register';
import Single from './pages/Single';
import ModalTop from './components/ModalTop';
import Footer from './components/Footer';


import {
 createBrowserRouter,
 RouterProvider,
 Outlet,
} from "react-router-dom";
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
const user = true;

const Layout = () => {
 return (
  <>
    <ModalTop />
    <Navbar />
    <Outlet />
    <Footer />
  </>)
}

const router = createBrowserRouter([{
  path: "/",
  element: <Layout />,
  children: [
    { 
      path: "/",
      element: <Home />
    },
    {
      path: "/shop",
      element: <Shop />
    },
    {
      path: "/shop/:id",
      element: <Single/>
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/contact",
      element: <Contact />
    },
    {
      path: "/cart",
      element: <Cart />
    }
  ]},
  {
    path: "/register",
    element: <Register />
  },
 {
  path: "/login",
  element: <Login />
 },
 {
  path: "*",
  element: <Error />
 }
])

function App() {
  return (
  <div className='App'>
      <RouterProvider router={router} />
  </div>
 );
 }
 export default App;