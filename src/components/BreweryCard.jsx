function BreweryCard({ brewery }) {
  return (
    <div className="brewery-card">
      <h3>{brewery.name}</h3>
      <div className="brewery-details">
        <p>
          <strong>Type:</strong> {brewery.brewery_type}
        </p>
        <p>
          <strong>Location:</strong> {brewery.city}, {brewery.state}
        </p>
        {brewery.website_url && (
          <p>
            <a
              href={brewery.website_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website
            </a>
          </p>
        )}
        <p>
          <strong>Phone:</strong> {brewery.phone || "N/A"}
        </p>
      </div>
    </div>
  );
}

export default BreweryCard;
