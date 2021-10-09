import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Box from "./component/Box"

function App() {
  return <>
  <h1 className="display-4">Tic Tac Toe</h1>
  <br/>
  <button type="button" class="btn btn-secondary btn1"><span>Player 1 - X</span></button>
  <button type="button" class="btn btn-secondary"><span>Player 2 - O</span></button>
  <br/>
  <br/>
  <div>
  <Box/>
  </div>
  </>
}

export default App;
