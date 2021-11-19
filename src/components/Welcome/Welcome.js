import { Link } from 'react-router-dom';
import './Welcome.css';

function Welcome() {
  return <main className="content">Welcome to Users test project
  <Link to='/users'>
  <button>Start</button>
  </Link>
  </main>;
}

export default Welcome;
