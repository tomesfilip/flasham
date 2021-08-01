import Loader from 'react-loader-spinner'
import useFetch from '../hooks/useFetch'
import CardSetList from '../molecules/CardSetList'

const Choose = () => {
  const { data: cardSets, isPending, error } = useFetch('http://localhost:8000/cardSets')

  console.log(cardSets)

  return ( 
    <div className="choose-cards">
      { error && <div className="error-msg">{ error }</div> }
      { isPending && <Loader type="ThreeDots" color="#FAA613" width={80} height={80} /> }
      { cardSets && <CardSetList cardSets={cardSets} /> }
    </div>
  );
}
export default Choose;