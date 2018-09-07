import React, {Component} from 'react';
import Main from '../components/home/main'

class Home extends Component {
    state = {
        name: "jorge",
        age: 25
    };

    render(){
        return(
            <div>
                <Main name={this.state.ninja}/>
            </div>
        )
    }
}

export default Home;