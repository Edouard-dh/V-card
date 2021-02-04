import './scss/main.scss';
import Body_left from './components/Body_left';
import Body_right from './components/Body_right';



const App =() => {

  return (
    <div className="App_full">
      <div className="App_top">
        <Body_left />
        <Body_right />
      </div>
    </div>
  );

  }
export default App;
