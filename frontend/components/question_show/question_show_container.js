import { connect } from 'react-redux';
import { fetchQuestion, updateQuestion, createQuestion, createAnswer} from '../../actions/question_actions';
import {logout} from '../../actions/session_actions';
import QuestionShow from './question_show';

const mapStateToProps = (state, ownProps) => {
  return ({
    question: state.questions[ownProps.params.id],
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuestion: id => dispatch(fetchQuestion(id)),
    createAnswer: answer => dispatch(createAnswer(answer)),
    createQuestion: question => dispatch(createQuestion(question)),
    updateQuestion: id => dispatch(updateQuestion(id)),
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionShow);
