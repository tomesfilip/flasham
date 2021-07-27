import MainHeading from '../atoms/MainHeading';
import HomeButtons from '../molecules/HomeButtons';

const Home = () => {
  return ( 
    <div className="home">
      <MainHeading headingText="FLASHAM" />
      <HomeButtons />
    </div>
  );
}
export default Home;