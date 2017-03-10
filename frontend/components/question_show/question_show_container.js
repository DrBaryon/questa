import { connect } from 'react-redux';
import { fetchQuestion, createQuestion} from '../../actions/question_actions';
import { createAnswer } from '../../actions/answer_actions';
import { createComment} from '../../actions/comment_actions';
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
    updateQuestion: id => dispatch(fetchQuestion(id)),
    createAnswer: answer => dispatch(createAnswer(answer)),
    createComment: comment => dispatch(createComment(comment)),
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionShow);
