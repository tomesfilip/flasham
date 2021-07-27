import { Link } from 'react-router-dom';

const ActionButton = ({ btnText, route }) => {
  return (
    <Link to={route}>
      <button className="action-btn" >
        { btnText }
      </button>
    </Link>
  );
}

export default ActionButton;