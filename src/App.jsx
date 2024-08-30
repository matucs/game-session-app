import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GameSessionForm from './components/GameSessionForm';
import GameSessionList from './components/GameSessionList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GameSessionList />} />
        <Route path="/new-session" element={<GameSessionForm />} />
      </Routes>
    </Router>
  );
}

export default App;
