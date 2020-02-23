import React from 'react';

class Componente2 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p>El resultado es: {this.props.resultado}</p>
            </div >
        )
    }
};

export default Componente2;