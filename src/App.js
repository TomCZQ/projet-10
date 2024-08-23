import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import './App.css';
import Header from "../src/components/Header/Header"
import Footer from "../src/components/Footer/Footer"
import Home from "../src/pages/Home/Home"
import SignIn from "../src/pages/Sign-in/Sign-in"
import Profile from './pages/Profile/Profile';
import { useLocation } from 'react-router-dom';
import { Provider} from 'react-redux'
import store from "./redux/store"

const App = () => {
  return (
      <Provider store={store}>
        <Router>
          <MainApp />
        </Router>
      </Provider>
  );
};

function MainApp() {

  const location = useLocation();

  return (
    
      <div className="body">
        <Header/>
        <div  className={location.pathname === "/signin"|| location.pathname === "/user" ? "full-height main bg-dark": "full-height main" }>
          <Routes>            
            <Route path="/" element={<Home/>} />
            <Route path="/signin" element={<SignIn/>} />
            <Route path="/user" element={<Profile/>} />
          </Routes>
        </div>
        <Footer/>
      </div>
    
  ); 
}

export default App;
