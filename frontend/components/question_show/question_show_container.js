import { connect } from 'react-redux';
import { fetchQuestion, createQuestion, createAnswer, createComment,
  deleteQuestion, deleteAnswer }
  from '../../actions/question_actions';
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
    createQuestion: question => dispatch(createQuestion(question)),
    deleteQuestion: id => dispatch(deleteQuestion(id)),
    deleteAnswer: id => dispatch(deleteAnswer(id)),
    deleteComent: id => dispatch(deleteComment(id)),
    createAnswer: answer => dispatch(createAnswer(answer)),
    createComment: comment => dispatch(createComment(comment)),
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionShow);
