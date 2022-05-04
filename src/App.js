import './App.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home';
import { BrandIdentityContextProvider } from './contexts/BrandIdentityContext';
// import NavBar from './components/NavBar/NavBar';
// import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <BrandIdentityContextProvider>
     <BrowserRouter>
     {/* <NavBar/> */}
        <Routes>
          <Route path="/" element={<Home />}/>      
          
        </Routes>
    </BrowserRouter>    
    {/* <Footer/>    */}
    </BrandIdentityContextProvider> 
    </div>
  );
}

export default App;
