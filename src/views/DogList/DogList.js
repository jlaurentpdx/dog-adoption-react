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

  if (loading) return <h1>Please wait...</h1>;

  return (
    <>
      {dogs.map((dog) => (
        <div key={dog.id} className="dog-card">
          <Link key={dog.id} to={`/dogs/${dog.id}`}>
            <h2>{dog.name}</h2>
            <img src={dog.image} />
          </Link>
          <p>
            Meet {dog.name}, the {dog.breed}. {dog.bio}
          </p>
        </div>
      ))}
    </>
  );
}
