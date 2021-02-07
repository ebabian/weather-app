import './App.css';
import ListData from './Components/ListData.js';
import { Route, Redirect } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <h1>Weather App!</h1>
      <ListData />
      
    </div>
  );
}

export default App;
