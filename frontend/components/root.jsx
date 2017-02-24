import React from 'react';
import { Provider } from 'react-redux';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import AuthFormContainer from './auth_form/auth_form_container';
import QuestionIndexContainer from './question_index/question_index_container';
import QuestionShowContainer from './question_show/question_show_container';



const Root = ({store}) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    debugger
    if (currentUser) {
      replace('/');
    }
  }

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={QuestionIndexContainer} onEnter={_ensureLoggedIn} />
          <Route path="/login" component={AuthFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="/:id" component={QuestionShowContainer} onEnter={_ensureLoggedIn} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
