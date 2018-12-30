import React, { Component, Fragment } from 'react';

class Register extends Component{
    render() {
        return(
            <Fragment>
                <form>
                    <input placeholder="Insira o novo produto"/>
                    <button value="Salvar"> Salvar </button>
                </form>
            </Fragment>
        );
    }
}
export default Register;