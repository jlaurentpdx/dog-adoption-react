import { useEffect, useState } from 'react';
import { fetchDogById } from '../../services/dogs';

import './DogDetail.css';

export default function DogDetail(props) {
  const id = props.match.params.id;
  const [loading, setLoading] = useState(true);
  const [dog, setDog] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogById(id);
      setDog(data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading) return <h1>Please wait...</h1>;
  return (
    <div className="dog-detail">
      <h1>{dog.name}</h1>
      <img src={dog.image} />
      <h2>
        Meet {dog.name}, the {dog.breed}
      </h2>
      <h3>Age {dog.age}.</h3>
      <p>{dog.bio}</p>
    </div>
  );
}
