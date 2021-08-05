import { useEffect, useState } from 'react'

const Card = ({ card }) => {
  const [cardText, setCardText] = useState('')
  const [isQuestion, setIsQuestion] = useState(true)

  const handleCardFlip = () => {
    setCardText(isQuestion ?  card.answer : card.question)
    setIsQuestion(isQuestion => !isQuestion)
  }

  useEffect(() => {
    setCardText(card.question)
  }, [card.question])

  return ( 
    <div className="card" onClick={ handleCardFlip }>
      <div className="question-answer">
        { cardText }
      </div>
    </div>
  );
}

export default Card