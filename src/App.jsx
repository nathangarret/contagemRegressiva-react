import './App.css'

import Title from "./components/Title.jsx";
import Counter from "./components/Counter.jsx";

import useCountdown from "./hooks/useCountdown.jsx";

import newYear from "./assets/newyear.jpg";

function App() {

  const [day, hour, minute, second]
      = useCountdown("Oct 20, 2023 00:00:00");

  return (
      <div className="App" style={{backgroundImage: `url(${newYear})`}}>
        <div className="container">
          <Title title="Contagem regressiva para 2023"/>
          <div className="countdown-container">
            <Counter title="Dias" number={day}/>
            <Counter title="Horas" number={hour}/>
            <Counter title="Minutos" number={minute}/>
            <Counter title="Segundo" number={second}/>
          </div>
        </div>
      </div>
  )
}
export default App
