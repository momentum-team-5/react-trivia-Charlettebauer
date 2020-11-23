export default function Submit (props) {
  const { clearSelectedCategory, questions } = props

  function sumCorrectAnswers () {
    // //   tallies number of correct answers
    let numCorrect = 0
    for (const question of questions) {
      if (question.chosenAnswer === question.correct_answer) {
        numCorrect += 1
      }
    }
    return numCorrect
  }

  return (
    <div>
      <h2> Congratulations! You got {sumCorrectAnswers()}/10 answers correct! </h2>
      <h3>Want to try again?
        <button className='ma2' onClick={clearSelectedCategory}>
          Select another category
        </button>
      </h3>
      <ul />
    </div>

  )
}
