import React from 'react' ;
import {connect} from 'react-redux';
import Modal from '../Modal';
import history from '../../history';
import {fetchStream,deleteStream} from '../../actions/index';
import {Link} from 'react-router-dom';
class StreamDelete extends React.Component {
componentDidMount() {
  this.props.fetchStream(this.props.match.params.id);
}

renderActions() {
    const id=this.props.match.params.id;
    return(
        <React.Fragment>
            <button className="ui button negative"
            onClick={ () => this.props.deleteStream(id)}
           >Delete</button>
            <Link  to="/" className="ui button"   >Cancel</Link>
        </React.Fragment>    
    );
}
renderContent() {
    if(!this.props.stream)
    {
        return ' Are you sure to delete'
    }
    return `are you sure -->${this.props.stream.title}`
}
render() {
return(
  <Modal 
  title="Delete Stream"
  content={this.renderContent()}
  actions={this.renderActions()}  //call kar rahe hai toh () lagana hai
  onDismiss={()=>history.push('/')}
  />
);
}
}
const mapStateToProps  = (state,OwnProps) => {
return {
    stream:state.streams[OwnProps.match.params.id]
};
};
export default connect(
    mapStateToProps,
    {fetchStream,
    deleteStream
    
    }

)(StreamDelete);

