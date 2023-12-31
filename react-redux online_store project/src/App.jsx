
import Header from "./containers/Header";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";
import './App.css';

function App() {

  return (
    <div className="App">
      
      <Router>
        <Header />
     
      <Routes>
        <Route path="/" exact element={<ProductListing />} />
        <Route path="/product/ProductId" exact element={<ProductDetail />} />
        <Route>404 not Found!</Route>

      </Routes>
      
      
      </Router>
      
      

    </div>
  );
}
  

 

export default App
