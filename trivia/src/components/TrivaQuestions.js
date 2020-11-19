import { useState, useEffect } from 'react'
import TriviaQuestion from './TriviaQuestion'

const TriviaQuestions = (props) => {
  const { category, clearSelectedCategory } = props
  const [questions, setQuestions] = useState([])
  const [answer, setAnswer] = ('')

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=10')
      .then(res => res.json())
      .then(data => {
        setQuestions(data.results)
      })
  }, [category])

  return (
    <div>
      <h2>{category.name}</h2>
      <button onClick={clearSelectedCategory}>Return to all categories</button>
      <TriviaQuestion category={questions.length ? questions[0] : {}} />
      <input
        type='text'
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <input type='submit' value='Submit Answer' />
    </div>
  )
}

export default TriviaQuestions
