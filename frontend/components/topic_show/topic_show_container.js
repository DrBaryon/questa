import { connect } from 'react-redux';
import { fetchQuestion, fetchAllQuestions, createQuestion } from '../../actions/question_actions';
import { fetchTopic } from '../../actions/topic_actions';
import {logout} from '../../actions/session_actions';
import TopicShow from './topic_show';

const mapStateToProps = (state, ownProps) => {
  return {
    topic: state.topic,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuestion: id => dispatch(fetchQuestion(id)),
    fetchAllQuestions: () => dispatch(fetchAllQuestions()),
    fetchTopic: (id) => dispatch(fetchTopic(id)),
    createQuestion: (question) => dispatch(createQuestion(question)),
    logout: () => dispatch(logout())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(TopicShow);
