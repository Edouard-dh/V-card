import './scss/main.scss';
import Body_top from'./components/Body_top';
import Body_left from'./components/Body_left';
import Body_right from'./components/Body_right';



function App() {
  
  return (
    <div className="App">
      {/* <Body_top/> */}
      <Body_left/>
      <Body_right/>
    </div>
  );
}

export default App;
