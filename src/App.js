import logo from './logo.svg';
import './App.css';
import { GetTime } from 'test-get-time'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <GetTime specificDay='2018-01-05'/>
      </header>
    </div>
  );
}

export default App;
