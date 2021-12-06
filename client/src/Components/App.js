import './App.css';
import TopNav from './TopNav';
import About from './About';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <TopNav />
      <Routes >
        <Route  path="/about/*" element={<About />} />
      </Routes>
    </div>
  );
      
      
}

export default App;
