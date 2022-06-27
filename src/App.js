
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header'
function App() {
  return (
    <Router>
    <div className="App">
     {/* localhost.com/ */}
     <Routes>
          <>
           <Route path="/checkout" element={<><Header/></>}>

           
            </Route>
            <Route path="/login">
         
            </Route>
            <Route path="/" element={<><Header/><Home/></>} >
            
            </Route>
          </>
     </Routes>
    </div>
    </Router>
  );
}

export default App;
