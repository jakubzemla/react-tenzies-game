import { useState, useEffect } from 'react'

import './styles/App.scss'
import DiceWrapper from './components/DiceWrapper'
import Button from './components/Button'
import DiffSettings from './components/DiffSetting'


const App = () => {
  const [difficulty, setDifficulty] = useState(null)
  const [diceList, setDiceList] = useState([])
  const [isWinner, setIsWinner] = useState(false)
  const [attempts, setAttempts] = useState(0)


  const getDifficulty = (event) => {
    let chosenDiff = event.target.id * 1
    setDifficulty(chosenDiff)
  }

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const getDiceList = (numberOfDice) => {
    const currentList = []
    for (let i = 1; i <= numberOfDice; i++) {
      const randomNumber = getRandomNumber(1, 6)
      currentList.push({id: i, number: randomNumber, isMarked: false})
    }
    setDiceList(currentList)
  }

  const toggleDice = (event) => {
    let markedDice = event.target
    setDiceList(prevList => prevList.map(dice => dice.id != markedDice.id 
      ? dice 
      : {...dice, isMarked: !dice.isMarked}))
    checkIsWinner()
  }

  const rollUnmarkedDice = () => {
    setDiceList(prevList => prevList.map(dice => dice.isMarked ? dice : {...dice, number: getRandomNumber(1,6)}
    ))
    setAttempts(prevCount => prevCount + 1)
  }

  const checkIsWinner = () => {
    const controlNumber = diceList[0]?.number
    const markedList = diceList.filter(dice => dice.isMarked && dice.number === controlNumber)
    {markedList.length === difficulty - 1 && setIsWinner(true)}
  }

  const resetGame = () => {
    setIsWinner(false)
    setDifficulty(null)
    getDiceList(10)
    setAttempts(0)
  }

  useEffect(() => {
    getDiceList(difficulty)
  }, [difficulty])

  return (<main className="container">
    <div className="game-screen">
      {!difficulty && <div className="diff-settings">
        <h1>Choose difficulty</h1>
        <DiffSettings getDifficulty={getDifficulty}/>
      </div>}
      
      {difficulty && <div className="game">
          <h1>Tenzies</h1>
          <p>Roll until all dice are the same. Click each dice to freeze it at its current value between rolls.</p>
          <DiceWrapper diceList={diceList} toggleDice={toggleDice} attempts={attempts} isWinner={isWinner}/>
          <Button roll={rollUnmarkedDice} isWinner={isWinner} reset={resetGame}/>
      </div>}
    </div>
  </main>
  )
}

export default App