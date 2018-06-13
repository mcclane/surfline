import React from 'react';
import ReactHLS from 'react-hls';
import Waves from './waves.js';
import './spot.css';

class Spot extends React.Component {
    render() {
        return(
            <div className="spot" id={this.props.name}>
                <h1>{this.props.name}</h1>
                <ReactHLS url={this.props.url}/>
                <Waves spotId={this.props.spotId}/>
            </div>
        );
    }
}

export default Spot;
