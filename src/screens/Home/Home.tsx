import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import './Home.scss';


const Home = () => {
  return (
    <>
      <Header />
      <div className="home-container">
        <div className="page-button">
          <Link to="/customers"> Customers </Link>
        </div>
      </div>
    </>
  );
};
export default Home;
