import { Link } from "react-router-dom";

function BreweryCard({ brewery }) {
  return (
    <div className="brewery-card">
      <h3>
        <Link to={`/brewery/${brewery.id}`} className="brewery-link">
          {brewery.name}
        </Link>
      </h3>
      <div className="brewery-details">
        <p>
          <strong>Type:</strong> {brewery.brewery_type}
        </p>
        <p>
          <strong>Location:</strong> {brewery.city}, {brewery.state}
        </p>
        <Link to={`/brewery/${brewery.id}`} className="view-details">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default BreweryCard;
