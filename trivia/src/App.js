/* globals fetch */
import './App.css'
import 'tachyons'
import { useEffect, useState } from 'react'
import TriviaQuestions from './components/TrivaQuestions'
import QuestionAnswer from './components/QuestionAnswer'

function App () {
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)

  useEffect(() => {
    fetch('https://opentdb.com/api_category.php')
      .then(response => response.json())
      .then(data => {
        setCategories(data.trivia_categories)
      })
  }, [])

  if (selectedCategory) {
    return (
      <TriviaQuestions
        category={selectedCategory}
        clearSelectedCategory={() => setSelectedCategory(null)}
      />
    )
  }

  return (
    <div>
          <h1> TRIVIA GAME  </h1>
          <h2>Pick a category to start!</h2>
          <ul className='categories'>
            {categories.map(category => (
              <li key={category.id}>
                <button className='categoryBtn'
                  onClick={() => setSelectedCategory(categories)}>
                  <strong>{category.name}</strong>
                </button>
              </li>
            ))}
          </ul>
        )
    }
    <div className='triviaQuestions'>
        {TriviaQuestions}
    </div>
    </div>
  )
}

export default App
