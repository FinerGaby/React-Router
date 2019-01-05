import React, { Component } from 'react';
import Portada from '../components/Home/Portada';
import Services from '../components/Home/Services';
import Portafolio from '../components/Home/Portafolio';
import AppFrame from '../components/AppFrame';
import { connect } from 'react-redux';
import { fetchCustomer } from './../actions/fetchCustomer';


class CustomerContainer extends Component {

    componentDidMount() {
        this.props.fetchCustomer();
    }
   
   renderBody = customer => (
        <div>
        <Portada textoPortada={'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor . '} 
                         buttonText={'Ver productos'} />
                <Services consumirArray={customer.servicesArray} 
                          ourServices={'Our Services'} />
                <Portafolio 
                urlPath={'portafolio/'}
                portafolioTexto={'Portafolio'}
                portafolioArray={customer.portafolioArray} />
        </div>
    )

    render() {
        const {customer} = this.props;
        console.log(customer);
        console.log(customer.servicesArray);
        return (
            <div>
                <AppFrame  
                  body={this.renderBody(customer)}></AppFrame>
            </div>
        );
    }
}

// state
const mapStateToProps = state => ({
    customer: state.customer.customer
})


export default connect(mapStateToProps, { fetchCustomer })(CustomerContainer) ;