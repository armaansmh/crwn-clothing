import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/ShopPage/shoppage.component';
import {Route, Routes} from "react-router";

function App() {
  
  
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />}/>
        <Route path="/shop" element={<ShopPage />}/>
      </Routes>
    </div>
  );
}

export default App;
