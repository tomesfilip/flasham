import MainHeading from '../atoms/MainHeading';
import HomeButtons from '../moleculs/HomeButtons';

const Home = () => {
  return ( 
    <div className="home">
      <MainHeading headingText="QUIZAM" />
      <HomeButtons />
    </div>
  );
}
export default Home;