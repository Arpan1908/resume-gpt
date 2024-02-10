
import './App.css';
import Register from './pages/Register';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Subscription from './pages/Subscription';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes >
        <Route path="/register" element={<Register/>} />
        <Route path="/subscription" element={<Subscription/>} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
