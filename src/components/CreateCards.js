import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AddCardButton from "../atoms/AddCardButton";
import CardFormHeading from "../atoms/CardFormHeading";
import CreateSetButton from "../atoms/CreateSetButton";

const CreateCards = () => {
  const [cardsetTitle, setCardsetTitle] = useState('')
  const [flashCards, setFlashCards] = useState([])
  const [flashCard, setFlashCard] = useState(null)
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [count, setCount] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()

  }

  return ( 
    <div className="create-cards">
      <input type="text" placeholder="CARDSET TITLE" className="cardset-title-input" onChange={ e => setCardsetTitle(e.target.value) } />
      <div className="container">
        <form className="card-form" onSubmit={handleSubmit}>
          <CardFormHeading headingText="QUESTION" />  
          <input type="text" className="question-input" onChange={ e => setQuestion(e.target.value) } />
          <CardFormHeading headingText="ANSWER" />
          <input type="text" className="answer-input" onChange={ e => setAnswer(e.target.value) } />
          <AddCardButton />
        </form>
      </div>
      <div className="create-cards-footer">
        <div className="cards-counter">{ count }</div>
        <CreateSetButton />
      </div>
    </div>
  );
}
export default CreateCards