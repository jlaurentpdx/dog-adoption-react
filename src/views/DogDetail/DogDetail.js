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

  return <div></div>;
}
