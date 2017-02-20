import { connect } from 'react-redux';
import { fetchQuestion, fetchAllQuestions, createQuestion } from '../../actions/question_actions';
import QuestionShow from './question_index';

const mapStateToProps = (state) => ({
  question: state.question
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuestion: id => dispatch(fetchQuestion(id)),
    fetchAllQuestions: () => dispatch(fetchAllQuestions()),
    createQuestion: (question) => dispatch(createQuestion(question))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionShow);
