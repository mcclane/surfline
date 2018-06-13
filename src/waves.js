import React from 'react';

class Waves extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "waves": []
        }
    }
    componentDidMount() {
        if(this.props.spotId !== "") {
            fetch("https://services.surfline.com/kbyg/spots/forecasts/wave?spotId="+this.props.spotId+"&days=1&intervalHours=1")
                .then(response => response.json())
                .then((data) => {
                    let waves = data.data.wave.map(wave => {return({ "surf": wave.surf, "timestamp": wave.timestamp })});
                    this.setState({
                        "waves": waves
                    });
                });
        }
    }
    render() {
        return(
            <div className="waves">
                Latest Wave Height: {JSON.stringify(this.state.waves[this.state.waves.length-1])}
            </div>
        );
    }
}

export default Waves
