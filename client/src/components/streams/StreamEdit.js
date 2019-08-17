import _ from 'lodash';
import React from 'react'; 
import {connect} from 'react-redux';
import {fetchStream ,editStream} from '../../actions';
import StreamForm from './streamForm';

class StreamEdit extends React.Component{
componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
}
onSubmit = (formValues)=> {      
this.props.editStream(this.props.match.params.id,formValues);
}
render() { 
//console.log(this.props);
   if(!this.props.stream)  
   {
       return <div>LOADING..</div>
   }             
return (
    <div>
        <h3>
            EDIT A STREAM..
        </h3>
        <StreamForm initialValues={_.pick(this.props.stream,
            'title','description'
            )} onSubmit={this.onSubmit}/>
    </div>
);
}//render wala
}//class wala
const mapStateToProps = (state,ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]};
};
export default connect(mapStateToProps,
    {fetchStream , editStream}
    )(StreamEdit)
//ye props react-router dom se aaye hai because hamne yaha Route ka use kiya hai 
//agar Route ka use nahi kate toh ye propa nahi aate ..
