import ActionButton from '../atoms/ActionButton'

const HomeButtons = () => {
  return (  
    <div className="home-buttons">
      <ActionButton btnText="create cards" route="create-cards" />
      <ActionButton btnText="play" route="choose" />
    </div>
  );
}

export default HomeButtons;