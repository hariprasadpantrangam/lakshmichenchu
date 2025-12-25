import logo from './logo.svg';
import './App.css';
import Todolist from './Todolist';
import Courseselector from './Courseselector';
import Counter from './Counter';
import Quizapp from './Quizapp';
import Myimage from '../src/hari.jpeg';
import Movie from './Movie';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <img src={Myimage}  alt="harimage" width="300" />
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
      <Todolist />
      <Courseselector />
      <Movie />
      <Counter />
      <Quizapp />
      
    </div>
    
  );
}

export default App;
