
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Common/Footer';
import Header from './components/Common/Header';
import DashboardPage from "./pages/DashboardPage"
import MainComponent from './components/LandingPage/MainComponent';
import { Dashboard } from '@mui/icons-material';
 import HomePage from './pages/HomePage';



function App() {
  return (
    <div className="App">
      {/* <Footer/> */}
      <BrowserRouter>
          <Routes>
            <Route path="/"  element ={<HomePage />} />
            <Route path="/dashboard" element ={<DashboardPage />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
