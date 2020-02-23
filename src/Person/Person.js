import React from 'react';

class Person extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div >
        )
    }
};

export default Person;