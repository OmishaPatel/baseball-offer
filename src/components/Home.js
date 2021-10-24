import "../App.css";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div className="home">
      <header className="homeHeader">Qualifying Offer Calculator</header>
      <h3 className="homeTitle">
        Your offer is the average of the highest 125 salaries of past season
      </h3>
      <p className="homePara">Click the button to see the offer</p>
      <Link to="/reoffer">
        <button className="homeBtn">Offer</button>
      </Link>
    </div>
  );
};
