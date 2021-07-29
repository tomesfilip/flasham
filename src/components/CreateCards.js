import AddCardButton from "../atoms/AddCardButton";
import CardSetHeading from "../atoms/CardSetHeading";
import CreateSetButton from "../atoms/CreateSetButton";
import Controls from "../molecules/Controls";

const CreateCards = () => {
  return ( 
    <div className="create-cards">
      <input type="text" placeholder="CARDSET TITLE" className="cardset-title-input" />
      <div className="container">
        <div className="mid-inputs">  
          <CardSetHeading headingText="QUESTION" />
          <input type="text" className="question-input" />
          <CardSetHeading headingText="ANSWER" />
          <input type="text" className="answer-input" />
          <AddCardButton />
          <Controls />
        </div>
      </div>
      <div className="create-cards-footer">
        <div className="cards-counter">3</div>
        <CreateSetButton />
      </div>
    </div>
  );
}
export default CreateCards;