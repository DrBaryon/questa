import { connect } from 'react-redux';
import { fetchQuestion } from '../actions/session_actions';
import QuestionIndex from './question_index';

const mapStateToProps = (state) => ({
  questions: Object.keys(state.questions).map(key => question[key])
});

const mapDispatchToProps = () => ({
  fetchQuestion: id => dispatch(fetchQuestion(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionIndex);
