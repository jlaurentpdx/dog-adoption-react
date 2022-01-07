import { useState } from 'react';
import { useHistory } from 'react-router';
import { createDog } from '../../services/dogs';
import DisplayForm from '../../components/DisplayForm/DisplayForm';

export default function DogCreate() {
  const history = useHistory();
  const [message, setMessage] = useState('');
  const dog = {};

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await createDog(dog);
      setMessage('new dog added! redirecting...');
      setTimeout(() => {
        history.goBack();
      }, 2000);
    } catch {
      setMessage('something went wrong');
    }
  };

  return <DisplayForm message={message} handleSubmit={handleSubmit} />;
}
