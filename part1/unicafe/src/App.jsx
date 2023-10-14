import { useState} from "react";
import Statistics from "./Statistics";

const App = () => {
  const [good,setGood] = useState(0);
  const [neutral,setNeutral]=useState(0);
  const [bad,setBad]=useState(0);

  const goodclick = () => {
    setGood(good+1);
  }

  const badClick = () => {
    setBad(bad+1);
  }

  const neutalClick =() => {
    setNeutral(neutral+1);
  }


  return(
    <div>
      <h1>give feedback</h1>
      <button onClick={goodclick}>good</button>
      <button onClick={neutalClick}>neutral</button>
      <button onClick={badClick}>bad</button>
      <Statistics good={good} bad={bad}neutral={neutral} />
    </div>
  )
}

export default App;