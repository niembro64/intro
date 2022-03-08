// import logo from "./logo.svg";
import "./App.css";

function App() {

  const hello = "hey there";

  const printStuff = (message) => {
    console.log(message);
  }

    return (
        <>
            <div className="App">
                <h1>1+2</h1>
                <h1>{1+2}</h1>
                <h2><marquee>hello</marquee></h2>
                <h2><marquee>{hello}</marquee></h2>

                <button onClick={printStuff}>click me!!!</button>
                <button onClick={() => {printStuff("Hi from second button")}}>New Click</button>
            </div>
        </>
    );
}

export default App;
