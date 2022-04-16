import './App.css';
import Body from './components/Body/Body';
import {BrowserRouter, Route, Routes} from 'react-router-dom' 
import MeaningDetails from './components/MeaningDetails/MeaningDetails';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body/>}/>
        <Route path="details" element={<MeaningDetails/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
