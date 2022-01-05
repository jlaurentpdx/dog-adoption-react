import { useEffect, useState } from 'react';
import { fetchDogs } from '../../services/dogs';
import { Link } from 'react-router-dom';

import './DogList.css';

export default function DogList() {
  const [loading, setLoading] = useState(true);
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogs();
      setDogs(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <h1 className="loader">...checking our list of furry friends...</h1>;

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
