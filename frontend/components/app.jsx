import React from 'react';
import { Link } from 'react-router';
import AuthFormContainer from './auth_form_container';

const App = ({children}) => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>Questa</h1>
      </Link>
      <AuthFormContainer />
    </header>
    {children}
  </div>

);

export default App;
