import React, { Component } from 'react';
import PortafolioPagina from '../components/Home/PortafolioPagina';
import { connect } from 'react-redux';
import { fetchCustomer } from './../actions/fetchCustomer';

class CustomerPortafolio extends Component {

    componentDidMount() {
        this.props.fetchCustomer();
    }

    render() {
        const { portafolioArray } = this.props.customer;
        return (
            <React.Fragment>
            <PortafolioPagina 
                urlPath={'portafolio/'}
                portafolioArray={portafolioArray} />
            </React.Fragment>
        );
    }
}

// state
const mapStateToProps = state => ({
    customer: state.customer.customer
})

export default connect(mapStateToProps, { fetchCustomer })(CustomerPortafolio) ;
