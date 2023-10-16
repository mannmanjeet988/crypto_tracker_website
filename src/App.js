
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/Common/Footer';
import Header from './components/Common/Header';
import MainComponent from './components/LandingPage/MainComponent';



function App() {
  return (
    <div className="App">
      <Header/>
      <MainComponent />
      {/* <Footer/> */}
      {/* <BrowserRouter>
          <Routes>
            <Route> path="/" element ={<HomePage />}</Route>
          </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
