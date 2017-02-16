import { connect } from 'react-redux';
import { fetchQuestion, fetchAllQuestions, createQuestion, deleteQuestion }
  from '../actions/session_actions';
import QuestionIndex from './question_index';

const mapStateToProps = (state) => {
  return ({
  questions: Object.keys(state.questions).map(key => question[key])
});};

const mapDispatchToProps = () => ({
  fetchQuestion: id => dispatch(fetchQuestion(id)),
  fetchAllQuestions: () => dispatch(fetchAllQuestions()),
  createQuestion: (question) => dispatch(createQuestion(question))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionIndex);
