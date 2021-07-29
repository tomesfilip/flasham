import { Link } from "react-router-dom";

const CreateSetButton = () => {
  return (  
    <Link to="/">
      <button className="create-set-button">create set</button>
    </Link>
  );
}
export default CreateSetButton;