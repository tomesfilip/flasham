import { Link } from 'react-router-dom'

const CardSetList = ({ cardSets }) => {
  return ( 
    <div className="cardset-list">
        {
          cardSets.map(cardSet => (
            <div className="cardset-preview" key={ cardSet.id }>
              <Link to={`/blogs/${cardSet.id}`}>
                <h2>{ cardSet.name }</h2>
              </Link>
            </div>
          ))
        }
    </div>
  );
}

export default CardSetList;