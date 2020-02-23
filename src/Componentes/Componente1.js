import React from 'react';

class Componente1 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <input type="text" onChange={this.props.changed} />
                {this.props.children}
            </div >
        )
    }
};

export default Componente1;