import { getSingle } from "../utils";
import React from 'react';



export default class ClassComponentExample extends React.Component {
    state = {
        data: {}
    };

    componentDidMount() {
        console.log("[ClassComponentExample] newData recomputnig in componentDidMount");

        const data = getSingle(this.props.id);
        this.setState({data});
    };

    componentDidUpdate(prevProps) {
        console.log("[ClassComponentExample] newData recomputing in componentDidUpdate");
      if(prevProps.id !== this.props.id) {
        const data = getSingle(this.props.id);
        this.setState({data});
      }
    };

    render(){
        return(
            <pre>
                ClassComponentExample
                {JSON.stringify(this.state.data, null,2)}
            </pre>
        )
    }
}