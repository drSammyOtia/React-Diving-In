
import HeyReactWorld from "./components/HeyReactWorld";
function App() {

  const saygoodbye = "See You In The Coding Lab Number";
  const number = 26;
  return (
    <div className="App">
      <HeyReactWorld/>
      <div>{saygoodbye} {number * number + number}</div>
      
      

    </div>
  );
}

export default App;
