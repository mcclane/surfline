import React from 'react';
import ReactHLS from 'react-hls';
import './cam.css';

class Cam extends React.Component {
    render() {
        return(
            <div class="cam" id={this.props.name}>
                {this.props.name}
                <ReactHLS url={this.props.url}/>
            </div>
        );
    }
}

export default Cam;
