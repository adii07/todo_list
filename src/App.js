import './App.css';
import Textfield from '@mui/material/TextField';
function App() {
  return (
    <div className='App'>
      <h1>Todo List</h1>
      <Textfield id="standard-basic" label="Add a task" variant="standard" style={{maxWidth:'75%'}}></Textfield>
    </div>
    
  );
}

export default App;
