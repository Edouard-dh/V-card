import './scss/main.scss';
import Body_left from './components/Body_left';
import Body_right from './components/Body_right';



function App() {

  return (
    <div className="App_full">
      <div className="App_top">
        <Body_left />
        <Body_right />
      </div>
      <div className="App_bot">

      </div>
    </div>
  );
}

export default App;
