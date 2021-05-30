import React from 'react';
import './App.css';
import '@fontsource/vazir';
import { Container } from 'react-bootstrap';
import UserActionApp from './UserCRUD/UserAction';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className='App'>
      <Container>
        <UserActionApp />
      </Container>
    </div>
  );
}

export default App;
