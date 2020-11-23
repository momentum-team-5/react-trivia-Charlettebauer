import { useState, useEffect } from 'react'
import TriviaQuestion from './TriviaQuestion'
import Submit from './Submit'

export default function CategoryData (props) {
  const { category, clearSelectedCategory } = props
  const [questions, setQuestions] = useState([])
  const [checkAnswers, setCheckAnswers] = useState(false)

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=10&category')
      .then(res => res.json())
      .then(data => {
        setQuestions(data.results)
      })
  }, [category])

  if (checkAnswers) {
    return (
      <Submit
        clearSelectedCategory={clearSelectedCategory}
        questions={questions}
        category={category}
        answers={checkAnswers}
        answerView={() => setCheckAnswers(true)}
      />
    )
  }

  function setAnswer (questionNum, answer) {
    let newQuestions = questions.slice(0, questionNum)
    newQuestions.push({
      ...questions[questionNum],
      chosenAnswer: answer
    })
    newQuestions = newQuestions.concat(questions.slice(questionNum + 1))
    setQuestions(newQuestions)
  }

  return (
    <div>
      <h3>{category.name}</h3>
      <h2>Pick a new queston!
        <button className='categoryBtn' onClick={clearSelectedCategory}>Return to all categories</button>
      </h2>
      <ul className='questions'>
        {questions.map((question, index) => (
          <TriviaQuestion
            questionText={question.question}
            correctAnswer={question.correct_answer}
            incorrectAnswers={question.incorrect_answers}
            chosenAnswer={question.chosenAnswer}
            questionNum={index}
            key={index}
            onAnswer={(answer) => setAnswer(index, answer)}
          />
        ))}
      </ul>
      <div>
        {' '}
        Submit your answers?
        <button type='submit' onClick={() => setCheckAnswers(!checkAnswers)}>
          Submit!
        </button>
      </div>
    </div>
  )
}
