import logo from './logo.svg';
import './App.css';
import ReactC from './components/reactC';
import HOC from './components/HOC';
import SamarTbki from './components/samartebki';
import Card from "./components/card"
function App() {
  let bool = true;
  let person1 = {
    name: "lobna",
    favFood: "jelbana"
  }
  let person2 =
  {
    name: "samar",
    favFood: "lasagna"
  }

  const people = [person1, person2];
  people.map((value, index) => {
    console.log("value :" + JSON.stringify(value) + " index:" + index);
  })
  return (

    <div className="App">
      <header className="App-header">
        {/* <ReactC>
          <p>Hello From App</p>
          <span>React is bad</span>
        </ReactC> */}
        {/* <SamarTbki /> */}
        {/* {bool&&<h1>Hello </h1>}
        <h1>Good Bye</h1>  */}
        <div className='container'>
          {people.map((p) =>
            <Card name={p.name} favFood={p.favFood} />
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
