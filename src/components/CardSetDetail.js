import { useState } from 'react'
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

  const handlePrevCard = () => {
    if (cardSet.cards.length > 1 && cardIndex === 0) {
      setCardIndex(cardSet.cards.length - 1)
    } else {
      setCardIndex(cardIndex - 1)
    }
  }

  const handleNextCard = () => {
    if (cardSet.cards.length > 1 && cardIndex === cardSet.cards.length - 1) {
      setCardIndex(0)
    } else {
      setCardIndex(cardIndex + 1)
    }
  }

  return (
    <div className="cardset-details">
      { isPending && <OrangeLoader /> }
      { err && <div className="error">{ err }</div> }
      { cardSet && 
        (
          <div className="cardset-board">
            <Card card={cardSet.cards[cardIndex]} />
            <div className="cardset-controls">
              <button onClick={ handlePrevCard }>
                <PrevArrow />
              </button>
              <button onClick={ handleNextCard }>
                <NextArrow />
              </button>
            </div>
          </div>
        ) 
      }
    </div>
  );
}

export default CardSetDetail