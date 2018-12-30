import React, { Component, Fragment } from 'react';

class Edit  extends Component{
    render() {
        return(
            <Fragment>
                <div>
                    <ul>
                        <li> Produto nome </li>
                        <li> Produto nome </li>
                        <li> Produto nome </li>
                        <li> Produto nome </li>
                        <li> Produto nome </li>
                    </ul>
                </div> 
                <div className="edit-panel"> 
                    <form>
                        <input type="text" placeholder="Produto nome"/>
                        <button value="Salvar"> Salvar </button>
                    </form>
                </div>
            </Fragment>    
        );
    }
}
export default Edit;