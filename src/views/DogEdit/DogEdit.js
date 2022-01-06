import { useEffect, useState } from 'react';
import { fetchDogById } from '../../services/dogs';

export default function DogEdit(props) {
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

  if (loading) return <h1>...getting ready to introduce...</h1>;

  return <div>This is the dog edit page. You are editing {dog.name}.</div>;
}
