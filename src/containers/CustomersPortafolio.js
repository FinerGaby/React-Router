import React, { Component } from 'react';
import TituloPagina from '../components/About/TituloPagina';
import Galeria from '../components/PortafolioList/Galeria';
import AppFrame from '../components/AppFrame';
import { connect } from 'react-redux';
import { fetchCustomer } from './../actions/fetchCustomer';

class CustomersPortafolio extends Component {

    componentDidMount() {
        this.props.fetchCustomer();
    }
 
    renderBody = () => (
        <div>
            <TituloPagina tituloPagina={`${this.props.textoPortafolio}`} />
        </div>
    )

    render() {
        console.log(this.props.customer)
        const {portafolioArray} = this.props.customer;
        console.log(portafolioArray)
       ///const filtradoArray = this.props.portafolioArray.find( c => c.textoPortafolio === this.props.textoPortafolio)
        ///console.log(filtradoArray);
        return (
            <div>
            <AppFrame body={this.renderBody()} />
            </div>
        );
    }
}

// state
const mapStateToProps = state => ({
    customer: state.customer.customer
})

export default connect(mapStateToProps, { fetchCustomer })(CustomersPortafolio) ;
