import { connect } from 'react-redux';
import { fetchQuestion, fetchAllQuestions, createQuestion } from '../actions/question_actions';
import QuestionIndex from './question_index';

const mapStateToProps = (state) => {
  return ({
  questions: Object.keys(state.questions).map(key => state.questions[key])
});};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuestion: id => dispatch(fetchQuestion(id)),
    fetchAllQuestions: () => dispatch(fetchAllQuestions()),
    createQuestion: (question) => dispatch(createQuestion(question))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(QuestionIndex);
