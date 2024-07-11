import logo from './logo.svg';
import './App.css';
import Register from './screens/Register'
import Userlist from './screens/Userlist';
import Contact from "./screens/Contact"
import About from './screens/About';
import { Provider } from 'react-redux'
import store from "./store/store"
import {createBrowserRouter,RouterProvider,} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/userlist",
    element: <Userlist/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
]);

function App() {
  return (
    <div className="App">
<Provider store={store}>
<RouterProvider router={router} />
</Provider>
   {/* <Register/> */}
   {/* <Userlist/> */}
  
    </div>
  );
}

export default App;
