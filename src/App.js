import './App.css';
import Home from './pages/home';
import Contact from './pages/contact';
import {BrowserRouter, Routes, Route} from 'react-router-dom' 

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="" Component={Home}></Route>
      <Route path="/contact" Component={Contact}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
