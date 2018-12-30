import React, { Component } from 'react';

class Navigation extends Component{
    render(){
        return(
            <nav>
               <ul>
                   <li><a href="">Cadastrar Produto</a></li>
                   <li><a href="">Listar Produtos</a></li>
                   <li><a href="">Editar Produtos</a></li>
                   <li><a href="">Remover Produtos</a></li>
                </ul> 
            </nav>
        );
    }
}
export default Navigation;