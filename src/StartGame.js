import React, { Component } from 'react';
import Timer from './Timer';

class StartGame extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            seconds: 60,
            stop: true
        };
        this.timer = this.timer.bind(this);
        this.onStart = this.props.onStart;
    }

    // tick() {
    //     this.interval = setInterval(() => {
    //         this.setState(prevState => ({
    //             seconds: prevState.seconds - 1
    //         }));
    //     }, 1000);
    // }
    timer() {
        this.onStart();
        
        clearInterval(this.interval);

        this.setState({
            ...this.state,
            stop: false
        })
        this.interval = setInterval(
            () => {
                if (this.state.seconds > 0 && !this.state.stop) {
                    this.setState(prevNum => ({
                        seconds: prevNum.seconds - 1
                    }))
                }
                else {
                    this.setState({
                        seconds: 60,
                        stop: true
                    });
                    this.onStart();
                }
            },
            1000
        );
    }

    render() {
        return (
            <div>
                <button onClick={this.timer}> Start Game </button>
                <Timer secLeft={this.state.seconds} />
            </div>
        );
    }
}

export default StartGame;






// import React from 'react';

// function StartGame({ onStart, setSecLeft, secLeft }) {

//     React.useEffect(() => {
//         if (secLeft > 0) {
//           setTimeout(() => setSecLeft(secLeft - 1), 1000);
//         }
//     });

//     return (
//         <div>
            
//             <button
//                 onClick={onStart}
//             >
//                 START GAME!
//             </button>
//         </div>
//     );
// }

// export default StartGame;