import { Link } from 'react-router-dom';

import './Error.css';

export default function Error() {
  return (
    <>
      <h1>Uh-oh!</h1>
      <p>Something went wrong. :(</p>
      <Link to="/">Back to Home</Link>
    </>
  );
}
