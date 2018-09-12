import { connect } from 'react-redux'; 
import Toast from '../Toast'

const mapStateToProps = ({ toast }) => toast;

export default connect(mapStateToProps)(Toast);
