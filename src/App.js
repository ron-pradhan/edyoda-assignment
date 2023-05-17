import './App.css';
import Form from './Components/Form/Form';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className='wrapper'>
        <div className='left'>
          <Home />
        </div>
        <div>
          <Form />
        </div>
      </div>
    </>
  );
}

export default App;
