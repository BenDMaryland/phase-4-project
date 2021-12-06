import './App.css';
import TopNav from './TopNav';
import About from './About';
import SignupForm from './SignupForm';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <TopNav />
      <Routes >
        <Route  path="/about/*" element={<About />} />
        <Route path="/signup/*" element={<SignupForm/>}/>
      </Routes>
    </div>
  );
      
      
}

export default App;
