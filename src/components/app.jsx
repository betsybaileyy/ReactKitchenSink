
import React, { Component } from 'react';

// const App = (props) => {
//     return <h1>{props.text}</h1>
// }

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            placeHolder: 'type something there',
            input: '',
            hasLoaded: false,
        };
    }

    onInputChange(value) {
        this.setState({ input: value });
    }

    onButtonClick() {
        this.setState({ hasLoaded: !this.state.hasLoaded });
    }

    componentDidMount() {
        this.setState({ hasLoaded: true });
    }

    render() {
        if (!this.state.hasLoaded) {
            return (
                <React.Fragment>
                    {this.props.text}
                    {this.state.input}
                    {this.state.hasLoaded}

                    <h1>hey!</h1>
                    <input
                        placeholder={this.state.placeHolder}
                        onChange={(event) => this.onInputChange(event.target.value)}
                    />
                    <button
                        onClick={(event) => this.onButtonClick()}>Click Here</button>
                </React.Fragment>
            );

        } else {
            return (
                <React.Fragment>
                    <h4>Loading...</h4>
                    <button
                        onClick={(event) => this.onButtonClick()}>Click Here</button>
                </React.Fragment>
            );
        }
    }
}

export default App;
