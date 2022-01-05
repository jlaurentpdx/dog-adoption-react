import { useEffect, useState } from 'react';
import { fetchDogs } from '../services/dogs';

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
        <div key={dog.id} clasName="dog-card">
          <h2>{dog.name}</h2>
          <img src={dog.image} />
          <p>
            Meet {dog.name}, the {dog.breed}. {dog.bio}
          </p>
        </div>
      ))}
      ;
    </>
  );
}
