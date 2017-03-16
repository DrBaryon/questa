import { connect } from 'react-redux';
import { fetchQuestion, fetchAllQuestions, createQuestion } from '../../actions/question_actions';
import {logout} from '../../actions/session_actions';
import QuestionIndex from './question_index';

const mapStateToProps = (state) => ({
  questions: Object.keys(state.questions).map(key => state.questions[key]),
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuestion: id => dispatch(fetchQuestion(id)),
    fetchAllQuestions: () => dispatch(fetchAllQuestions()),
    fetchTopic: (id) => dispatch(fetchQuestion(id)),
    createQuestion: (question) => dispatch(createQuestion(question)),
    logout: () => dispatch(logout())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(QuestionIndex);
