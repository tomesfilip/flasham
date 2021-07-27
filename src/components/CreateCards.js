import AddCardButton from "../atoms/AddCardButton";
import CardSetHeading from "../atoms/CardSetHeading";
import CreateSetButton from "../atoms/CreateSetButton";
import Controls from "../molecules/Controls";

const CreateCards = () => {
  return ( 
    <div className="create-cards">
      <input type="text" placeholder="CARDSET TITLE" />
      <CardSetHeading headingText="QUESTION" />
      <input type="text" />
      <CardSetHeading headingText="ANSWER" />
      <input type="text" />
      <AddCardButton />
      <Controls />
      <div className="create-cards-footer">
        <div className="cards-counter"></div>
        <CreateSetButton />
      </div>
    </div>
  );
}
export default CreateCards;