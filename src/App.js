import './App.css';
import HomePage from './pages/homepage/homepage.component';
import './pages/homepage/homepage.component'
import {Route, Routes} from "react-router"

function App() {
  const HatPage = () => (
    <div>
      <h1>Hats page</h1>
    </div>
  )
  
  
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />}/>
        <Route path="/hats" element={<HatPage />}/>
      </Routes>
    </div>
  );
}

export default App;
