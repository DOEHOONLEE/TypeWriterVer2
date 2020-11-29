import React, { Component } from 'react';
import Timer from './Timer';

class StartGame extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            seconds: 5,
            stop: true
        };
        
        this.gamecheck = this.gamecheck.bind(this);
        this.onStart = this.props.onStart;
        this.onReset = this.props.onReset;
        this.setData = this.props.setData;
    }

    gamecheck() {
        if (this.state.seconds < 5) {
            alert("You are already in a game!");
        }
        else {
            this.timer();
        }
    }

    timer() {
        this.onStart();

        this.setState({
            ...this.state,
            stop: false
        })
        this.interval = setInterval(
            () => {
                if (this.state.seconds > 0 && !this.state.stop) {
                    this.setState(prevNum => ({
                        seconds: prevNum.seconds - 1
                    }));
                }
                else {
                    const userRecord = this.props.counter;

                    this.setData(userRecord);

                    this.setState({
                        seconds: 5,
                        stop: true
                    });

                    this.onReset();
                    clearInterval(this.interval);
                }
                console.log(this.state.seconds)
            },
            1000
        );
    };

    render() {
        return (
            <div>
                <button
                    onClick={this.gamecheck}
                    className="startButton"
                >
                    Start
                </button>
                <Timer secLeft={this.state.seconds} />
            </div>
        );
    }
}

export default StartGame;