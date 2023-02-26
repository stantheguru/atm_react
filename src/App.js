import './App.css';
import Main from './pages/Main';
import {
  BrowserRouter as Router
} from "react-router-dom";


function App() {
  return (
    <div className="app">
   <Router>
<Main/>
      </Router>
    </div>
  );
}

export default App;
