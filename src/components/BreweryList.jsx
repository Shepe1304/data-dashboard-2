import BreweryCard from "./BreweryCard";

function BreweryList({ breweries }) {
  return (
    <div className="brewery-list">
      {breweries.length === 0 ? (
        <p>No breweries found matching your criteria.</p>
      ) : (
        breweries.map((brewery) => (
          <BreweryCard key={brewery.id} brewery={brewery} />
        ))
      )}
    </div>
  );
}

export default BreweryList;
