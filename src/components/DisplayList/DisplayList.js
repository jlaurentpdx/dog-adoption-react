import { Link } from 'react-router-dom';

export default function DisplayList({ dogs }) {
  return (
    <div className="dog-list">
      {dogs.map((dog) => (
        <Link key={dog.id} to={`/dogs/${dog.id}`} className="dog-link">
          <div key={dog.id}>
            <p>meet</p>
            <h1>{dog.name}</h1>
            <img src={dog.image} />
          </div>
        </Link>
      ))}
    </div>
  );
}
