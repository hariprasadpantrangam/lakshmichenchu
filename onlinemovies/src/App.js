import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{backgroundColor:'deeppink',color:'white'}}>HARIPRAASAD SOFTWARE SOLUTIONS</h1>
        <h3 style={{backgroundColor:'goldenrod',color:'white'}}>madhapur,hyderabad,telangana</h3>
        <marquee style={{backgroundColor:'blue',color:'white'}}>for services contact:9573572830</marquee>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
       
        </a>
      </header>
    </div>
  );
}

export default App;
