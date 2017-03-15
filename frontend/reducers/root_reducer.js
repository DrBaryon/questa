import {combineReducers} from 'redux';
import sessionReducer from './session_reducer';
import questionsReducer from './questions_reducer';
import topicsReducer from './topics_reducer';

const RootReducer = combineReducers({
  session: sessionReducer,
  questions: questionsReducer,
  topic: topicsReducer
});

export default RootReducer;
