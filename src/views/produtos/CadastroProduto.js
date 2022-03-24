import React from 'react' ;

const estadoInicial = {
    nome: '',
    sku: '',
    descricao: '',
    preco: 0,
    fornecedor: ''
}

class CadastroProduto extends React.Component {

    state = estadoInicial;

    onChange = (event) => {
       const valor = event.target.value
       const nomeDoCampo = event.target.name
       this.setState({ [nomeDoCampo]: valor })
    }

    onSubmit = (event) => {
        console.log(this.state)
    }

    limpaCampo = () => {
        this.setState(estadoInicial)
    }

    render() {
        return (
            <div className="card">
                <div className="card-header p-3">
                    <p className="lead fw-bolder text-center"> Cadastro de Produto </p>
                </div>

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

        )
    }
}

export default CadastroProduto;