import { useEffect, useState } from 'react';
import { fetchDogById, deleteDogById } from '../../services/dogs';
import { Link, useHistory } from 'react-router-dom';
import DisplayDetail from '../../components/DisplayDetail/DisplayDetail';

import './DogDetail.css';

export default function DogDetail(props) {
  const id = props.match.params.id;
  const history = useHistory();
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

  const handleDelete = async (e) => {
    try {
      e.preventDefault();
      await deleteDogById(id);
      history.push('/');
    } catch {
      alert('something went wrong. please refresh the page and try again');
    }
  };

  if (loading) return <h1>...getting ready to introduce...</h1>;

  return (
    <>
      <DisplayDetail {...dog} />
      <Link to={`/dogs/${dog.id}/edit`}>
        <button>Edit</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
}
