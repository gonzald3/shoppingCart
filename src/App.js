import './App.css';
import Header from './components/Header'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home'
import Cart from './components/Cart'
import React from 'react'


function App() {
  return (

    
    <Router>
    <Header />
      <div className="App">
        
        {/* <Link to="/cart">Click Here</Link> */}
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />}/>
          </Routes>
        </div>
        </div>
    </Router>

  );
}

export default App;
