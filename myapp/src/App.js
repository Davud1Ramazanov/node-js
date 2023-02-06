import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  const [HeightSmile, setHeightSmile] = useState(400);
  const [WidthSmile, setWidthSmile] = useState(400);
  const [VisibleSmile, setVisibleSmile] = useState('hidden');

  function ReloadSmile(){
    setCount(0);
    setHeightSmile(400);
    setWidthSmile(400);
    setVisibleSmile(VisibleSmile='hidden');
  }

  function Plus() {
    setCount(count + 1)

    if (count > 10) {
      setHeightSmile(HeightSmile-50);
      setWidthSmile(WidthSmile-50);
    }

    if(count==19){
      ReloadSmile();
    }
  }


  function Minus() {
    setCount(count - 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={Plus}>
          <img src='/smile.jpg' height={HeightSmile} width={WidthSmile} style={{ header: setHeightSmile ,width: setWidthSmile }}></img>
         <br></br> <button onClick={Plus} style={{visibility: VisibleSmile}}>Reload</button>
        </button> <br></br>
        <label className='myP'> COUNT: {count} </label>
      </header>
    </div>
  );
}

export default App;
