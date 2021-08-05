import useFetch from '../hooks/useFetch'
import CardSetList from './CardSetList'
import OrangeLoader from '../atoms/OrangeLoader'

const Choose = () => {
  const { data: cardSets, isPending, error } = useFetch('http://localhost:8000/cardSets')

  return ( 
    <div className="choose-cards">
      { error && <div className="error-msg">{ error }</div> }
      { isPending && <OrangeLoader /> }
      { cardSets && <CardSetList cardSets={cardSets} /> }
    </div>
  );
}
export default Choose;