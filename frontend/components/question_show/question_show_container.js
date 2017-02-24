import { connect } from 'react-redux';
import { fetchQuestion, createQuestion, createAnswer, createComment} from '../../actions/question_actions';
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
    createComment: comment => dispatch(createComment(comment)),
    receiveAnswer: answer => dispatch(receiveAnswer(answer)),
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionShow);
