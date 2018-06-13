import React from 'react';
import ReactDOM from 'react-dom';
import Spot from './spot.js';

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "spots": [
                {
                    "name": "Pleasure Point", 
                    "stream_url": "http://73.231.131.194:5000/wsc-west/wc-pleasureptcam.stream/chunklist.m3u8", // this will be proxied through server!
                    "spotId": "5842041f4e65fad6a7708807"
                },
                {
                    "name": "38th Ave. Overview", 
                    "stream_url": "http://73.231.131.194:5000/wsc-west/wc-thirtyeightovcam.stream/chunklist.m3u8",
                    "spotId": "5a74f236588618001a6511f8"
                },
                {
                    "name": "Jack's", 
                    "stream_url": "http://73.231.131.194:5000/wsc-west/wc-jackscam.stream/chunklist.m3u8",
                    "spotId": "5842041f4e65fad6a770880b"
                }
            ]
        };
    }
    render() {
        let content = this.state.spots.map(spot => <Spot key={spot.name} name={spot.name} url={spot.stream_url} spotId={spot.spotId}/>);
        return(
            <div>
                {content}
            </div>
        );
    }
}
ReactDOM.render(
    <Page/>, 
    document.getElementById('root')
);
