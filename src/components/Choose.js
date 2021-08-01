import Loader from 'react-loader-spinner';
import useFetch from '../hooks/useFetch'

const Choose = () => {
  const { data: cardSets, isPending, error } = useFetch('http://localhost:8000/cardSets')

  return ( 
    <div className="choose-cards">
      <h2>choose card sets</h2>
      { error && <div className="error-mgs">{ error }</div> }
      { isPending && <Loader type="ThreeDots" color="#FAA613" width={80} height={80} /> }
      { cardSets && <CardSetsList cardSets={cardSets} /> }
    </div>
  );
}
export default Choose;