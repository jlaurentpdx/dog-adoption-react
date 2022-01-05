import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <>
      <header>
        <NavLink to="/">Home</NavLink>
      </header>
    </>
  );
}
