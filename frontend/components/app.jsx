import React from 'react';
import { Link } from 'react-router';
import AuthFormContainer from './auth_form_container';

const App = ({children}) => (
  <div>
    <header>
      <Link to="/" className="header-link" />
      <link href='//fonts.googleapis.com/css?family=Sonsie One' rel='stylesheet' />
    </header>
    {children}
  </div>

);

export default App;
