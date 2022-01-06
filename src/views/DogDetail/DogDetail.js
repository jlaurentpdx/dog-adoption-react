import { useEffect, useState } from 'react';
import { fetchDogById } from '../../services/dogs';
import { Link } from 'react-router-dom';
import DisplayDetail from '../../components/DisplayDetail/DisplayDetail';

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

  if (loading) return <h1>...getting ready to introduce...</h1>;

  return (
    <>
      <DisplayDetail {...dog} />
      <Link to={`/dogs/${dog.id}/edit`}>Edit</Link>
    </>
  );
}
