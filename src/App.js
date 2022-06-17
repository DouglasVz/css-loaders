import './App.css';
import Board from './components/Board'
import Header from './components/header';
function App() {
  return (
    <div className="App">
      <Header/>
      <div className='App-body'>
        <div className='Use-cont'>
          <h1>How to Use</h1>
          <ul>
            <li>Click on any loader.</li>
            <li>Click on Html or Css copy button.</li>
            <li>Use it in your project and customize it if you want.</li>
          </ul>
        </div>
        <Board/>
      </div>
      <footer>
            <div>
                <a href='https://www.douglasvg.com'>Develop by Douglas Vásquez</a>
            </div>
      </footer>
    </div>
  )
}

export default App;
