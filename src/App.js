
import './App.css';
import Portfolio from "./Portfolio"
import { BrowserRouter as Router} from "react-router-dom"; 
function App() {
  return (
    <div className="App">
    <Router>
    <Portfolio/>
    </Router>
      
    </div>
  );
}

export default App;
