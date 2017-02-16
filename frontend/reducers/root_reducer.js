import {combineReducers} from 'redux';
import sessionReducer from './session_reducer';
import questionsReducer from './questions_reducer';

const RootReducer = combineReducers({
  session: sessionReducer,
  questions: questionsReducer
});

export default RootReducer;
