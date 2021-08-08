import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import OrangeLoader from '../atoms/OrangeLoader'
import Card from '../molecules/Card'
import PrevArrow from '../atoms/PrevArrow'
import NextArrow from '../atoms/NextArrow'

const CardSetDetail = () => {
  const { id } = useParams();
  const { data: cardSet, isPending, err } = useFetch(`http://localhost:8000/cardSets/${id}`)
  const [ cardIndex, setCardIndex ] = useState(0)
  const [ isQuestion, setIsQuestion ] = useState(true)

  const handlePrevCard = () => {
    if (cardSet.cards.length > 1 && cardIndex === 0) {
      setCardIndex(cardSet.cards.length - 1)
    } else {
      setCardIndex(cardIndex - 1)
    }
    setIsQuestion(true)
  }

  const handleNextCard = () => {
    if (cardSet.cards.length > 1 && cardIndex === cardSet.cards.length - 1) {
      setCardIndex(0)
    } else {
      setCardIndex(cardIndex + 1)
    }
    setIsQuestion(true)
  }

  const handleFlipCard = () => {
    setIsQuestion(!isQuestion)
  }

  return (
    <div className="cardset-details">
      { isPending && <OrangeLoader /> }
      { err && <div className="error">{ err }</div> }
      { cardSet && 
        (
          <div className="cardset-board">
            <Card clickHandler={ handleFlipCard }>
              { isQuestion ? cardSet.cards[cardIndex].question : cardSet.cards[cardIndex].answer }
            </Card>
            <div className="cardset-controls">
              <PrevArrow clickHandler={ handlePrevCard } />
              <NextArrow clickHandler={ handleNextCard } />
            </div>
          </div>
        ) 
      }
    </div>
  );
}

export default CardSetDetail