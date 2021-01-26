import logo from './logo.svg';
import './App.css';
import Aux from './HOC/Auxi';
import NavBar from './UI/NavBar/NavBar';
import Layout from './Layout/Layout';

function App() {
  return (
    <Aux>
      <NavBar />
      <Layout />
    </Aux>
  );
}

export default App;
