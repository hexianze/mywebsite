import React,{Component} from 'react';
import Componentone from './Component1';
import Componenttwo from './Component2';
import Componentthree from './Component3';
import {Transition,animated} from "react-spring/renderprops";

class About extends Component{
    state ={
        showComponent:false
    }
    toggle =(e)=>{
        this.setState({showComponent:!this.state.showComponent})
    }
    render() {
        return(
            <div>
                <Componentone/>
                <Componenttwo toggle = {this.toggle}/>
                <Transition
                    native
                    items={this.state.showComponent}
                    from={{ opacity: 0 }}
                    enter={{ opacity: 1 }}
                    leave={{ opacity: 0 }}
                >
                    {show =>
                        show &&
                        (props => (
                            <animated.div style={props}>
                                <Componentthree />
                            </animated.div>
                        ))
                    }
                </Transition>
            </div>
        )
    }
}

export  default About;
