import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function BreweryDetail() {
  const { id } = useParams();
  const [brewery, setBrewery] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBreweryDetail = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.openbrewerydb.org/v1/breweries/${id}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBrewery(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBreweryDetail();
  }, [id]);

  if (loading) return <p>Loading brewery details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!brewery) return <p>No brewery found</p>;

  return (
    <div className="brewery-detail">
      <Link to="/data-dashboard-2" className="back-link">
        &larr; Back to Dashboard
      </Link>

      <div className="detail-header">
        <h2>{brewery.name}</h2>
        <span className="brewery-type">{brewery.brewery_type}</span>
      </div>

      <div className="detail-sections">
        <section className="detail-section">
          <h3>Location</h3>
          <p>{brewery.street}</p>
          <p>
            {brewery.city}, {brewery.state} {brewery.postal_code}
          </p>
          <p>{brewery.country}</p>

          {brewery.latitude && brewery.longitude && (
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${brewery.latitude},${brewery.longitude}`}
              target="_blank"
              rel="noopener noreferrer"
              className="map-link"
            >
              View on Google Maps
            </a>
          )}
        </section>

        <section className="detail-section">
          <h3>Contact</h3>
          {brewery.phone && (
            <p>
              <strong>Phone:</strong>{" "}
              {brewery.phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")}
            </p>
          )}

          {brewery.website_url && (
            <p>
              <strong>Website:</strong>{" "}
              <a
                href={brewery.website_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {brewery.website_url}
              </a>
            </p>
          )}
        </section>

        <section className="detail-section">
          <h3>Additional Information</h3>
          <ul>
            <li>
              <strong>Created:</strong>{" "}
              {new Date(brewery.created_at).toLocaleDateString()}
            </li>
            <li>
              <strong>Last Updated:</strong>{" "}
              {new Date(brewery.updated_at).toLocaleDateString()}
            </li>
            <li>
              <strong>ID:</strong> {brewery.id}
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default BreweryDetail;
