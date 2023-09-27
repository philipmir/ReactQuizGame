import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './components/Welcome'
import Game from './components/Game'
import Result from './components/Result'
import { Route, Routes } from 'react-router-dom'

// function App() {
//   const WELCOME = 'welcome', GAME = 'game', RESULT = 'result';
//   const [currentScreen, setCurrentScreen] = useState(WELCOME);
//   const [score, setScore] = useState(0);

//   let content = null;

// const restartQuiz = () => {
//   setScore(0);
//   setCurrentScreen(WELCOME);
// }


//   switch(currentScreen) {
//     case WELCOME :
//       content = <Welcome nextScreen={() => setCurrentScreen(GAME) }/>;
//       break;
//     case GAME : 
//       content = <Game answeredCorrectly={() => setScore(score + 1) } showResult={() => setCurrentScreen(RESULT)}/>;
//       break;
//     case RESULT : 
//       content = <Result score={score} restartQuiz={restartQuiz}/>
//       break;
//     default: 
//       content = <Welcome />
//   }

//   return (
//       <div>
//        {content}
//      </div>
//   )
// }


"EN LIKADAN MEN MED ROUTER"

function App() {
  
  const [score, setScore] = useState(0);

  

const restartQuiz = () => {
  setScore(0);
  // setCurrentScreen(WELCOME);
}


  // switch(currentScreen) {
  //   case WELCOME :
  //     content = <Welcome nextScreen={() => setCurrentScreen(GAME) }/>;
  //     break;
  //   case GAME : 
  //     content = <Game answeredCorrectly={() => setScore(score + 1) } showResult={() => setCurrentScreen(RESULT)}/>;
  //     break;
  //   case RESULT : 
  //     content = <Result score={score} restartQuiz={restartQuiz}/>
  //     break;
  //   default: 
  //     content = <Welcome />
  // }

  return (
      <div className='App'>
        <Routes>
          <Route path='/'
           element={<Welcome />} />
          <Route path='/game'
           element={<Game answeredCorrectly={() => setScore(score + 1) } />} />
           <Route path='/game/:currentquestion'
           element={<Game answeredCorrectly={() => setScore(score + 1) } />} />
          <Route path='/result'
           element={<Result />} />
        </Routes>
     </div>
  )
}

export default App
