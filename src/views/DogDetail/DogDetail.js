import { useEffect, useState } from 'react';
import { fetchDogById } from '../../services/dogs';

export default function DogDetail(props) {
  const id = props.match.params.id;
  const [loading, setLoading] = useState(true);
  const [dog, setDog] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogById(id);
      console.log(data);
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
      <p>
        Meet {dog.name}, the {dog.breed}, age {dog.age}.
      </p>
      <p>{dog.bio}</p>
    </div>
  );
}
