import { useEffect, useState } from 'react';
import { fetchDogs } from '../../services/dogs';
import DisplayList from '../../components/DisplayList/DisplayList';

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

  return <DisplayList dogs={dogs} />;
}
