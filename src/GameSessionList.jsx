import React, { useEffect, useState } from 'react';

const GameSessionList = () => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const fetchSessions = async () => {
      const response = await fetch('https://api-url.com/sessions');
      const data = await response.json();
      setSessions(data);
    };
    fetchSessions();
  }, []);

  return (
    <div>
      <h2>Game Sessions</h2>
      <ul>
        {sessions.map((session) => (
          <li key={session.sessionId}>
            {session.hostname} - {session.players} players - {session.map} - {session.mode}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameSessionList;
