import {combineReducers} from 'redux';
import sessionReducer from './session_reducer';
import questionsReducer from './questions_reducer';
import answersReducer from './answers_reducer';
import commentsReducer from './comments_reducer';
import topicsReducer from './topics_reducer';

const RootReducer = combineReducers({
  session: sessionReducer,
  questions: questionsReducer,
  answers: answersReducer,
  comments: commentsReducer,
  topic: topicsReducer
});

export default RootReducer;
