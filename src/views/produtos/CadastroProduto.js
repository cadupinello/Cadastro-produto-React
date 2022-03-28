import React from 'react' ;

import ProdutoService from '../../app/ProdutoService'

const estadoInicial = {
    nome: '',
    sku: '',
    descricao: '',
    preco: 0,
    fornecedor: '',
    sucesso: false,
    errors: []
}

class CadastroProduto extends React.Component {
    //recuparando os valores dos campos
    state = estadoInicial;

    constructor(){
        super()
        this.service = new ProdutoService();
    }

    onChange = (event) => {
       const valor = event.target.value
       const nomeDoCampo = event.target.name
       this.setState({ [nomeDoCampo]: valor })
    }

    onSubmit = (event) => {
        const produto = { 
        nome: this.state.nome,
        sku: this.state.sku,
        descricao: this.state.descricao,
        preco: this.state.preco,
        fornecedor: this.state.fornecedor
        }
        try{
            this.service.salvar(produto)
            this.limpaCampo()
            this.setState({sucesso: true})
        }catch(erro){
            const errors = erro.errors
            this.setState({errors: errors})
        }
        
    }
    //funcao para limpar todos os campos
    limpaCampo = () => {
        this.setState(estadoInicial)
    }

    render() {
        return (
            <div className="card">
                <div className="card-header p-3">
                    <p className="lead fw-bolder text-center"> Cadastro de Produto </p>
                </div>
                <div className="card-body"> 

                {this.state.sucesso &&
                <div class="alert alert-dismissible alert-success">
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                <strong>Bem feito !</strong> Cadastro realizado com sucesso !
                </div> 
                }
                
                {this.state.errors.length > 0 &&

                    this.state.errors.map( msg => {
                        return (
                            <div class="alert alert-dismissible alert-danger">
                            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                            <strong>Erro !</strong> {msg}
                            </div>
                        )
                    })
                
                }

                <div className="row m-3">
                    <div className="col-md-6">
                        <div className="form-group">
                        <label className="m-1" >Nome: *</label>
                        <input type="text" 
                            name="nome" 
                            value={this.state.nome} 
                            onChange={this.onChange}
                            className="form-control m-1" />
                        </div>
                    </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label className="m-1" >SKU: *</label>
                        <input type="text" 
                            name="sku" 
                            value={this.state.sku} 
                            onChange={this.onChange}
                            className="form-control m-1" />
                        </div>
                    </div>
                </div>

                <div className="row m-3">
                    <div className="col-md-12">
                    <div class="form-group">
                        <label class="form-label mt-4">Descrição: </label>
                        <textarea name="descricao" 
                            value={this.state.descricao} 
                            onChange={this.onChange}
                            class="form-control" 
                            rows="3"></textarea>
                    </div>
                    </div>
                </div>

                <div className="row m-3">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="m-1" >Preço: *</label>
                            <input type="number" 
                            name="preco" 
                            value={this.state.preco} 
                            onChange={this.onChange}
                            className="form-control m-1" />
                        </div>
                    </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label className="m-1" >Fornecedor: *</label>
                            <input type="text" 
                            name="fornecedor" 
                            value={this.state.fornecedor} 
                            onChange={this.onChange}
                            className="form-control m-1" />
                        </div>
                    </div>
                </div>

                <div className="row m-3"> 
                    <div className="col-md-1">
                        <button type="button" onClick={this.onSubmit} class="btn btn-primary">Salvar</button>
                    </div>
                    <div className="col-md-1">
                        <button type="button" onClick={this.limpaCampo} class="btn btn-danger">Limpar</button>
                    </div>
                </div>
                </div>
            </div>

        )
    }
}

export default CadastroProduto;