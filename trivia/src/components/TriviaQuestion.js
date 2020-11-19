import React, { useState } from 'react'

const TriviaQuestion = ({ category }) => {
  return (
    <li key={category.question}>
      <div>
        <b>Question:</b> {category.question}
      </div>
    </li>
  )
}

export default TriviaQuestion
