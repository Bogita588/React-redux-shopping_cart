
import Header from "./containers/Header";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";

function App() {

  return (
    <div className="className">
      <Header />
      <Router>
     
      <Routes>
        <Route path="/" exact component={ProductListing} />
        <Route path="/product/:ProductId" exact component={ProductDetail} />
        <Route>404 not Found!</Route>

      </Routes>
      
      
      </Router>
      
      

    </div>
  );
}
  

 

export default App
