import React from 'react' ;
import {connect} from 'react-redux';
import {createStream} from '../../actions';
import StreamForm from './streamForm';
class StreamCreate extends React.Component {
    onSubmit = (formValues)=> {      
        this.props.createStream(formValues);
    }
render() 
{    return(<div>
    <h3>CREATE  A STREAM </h3>
    <StreamForm onSubmit={this.onSubmit} />
</div> );
}
}
export default connect(null ,{createStream} )(StreamCreate)
//similiar to connect
//Field is use to connect the input to redux store ONLY!!