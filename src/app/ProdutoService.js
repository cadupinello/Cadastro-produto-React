
const PRODUTOS = '_PRODUTOS'

export function ErroValidacao(errors){
    this.errors = errors
}

export default class ProdutoService{
    salvar = (produto) => {
        this.validar(produto)

        let produtos = localStorage.getItem(PRODUTOS)

        if(!produtos) {
            produtos = []
        }else {
            produtos = JSON.parse(produtos)
        }

        produtos.push(produto)

        localStorage.setItem(PRODUTOS, JSON.stringify(produtos))
    }

    validar = (produto) => {
        const errors = []

        if(!produto.nome){
            errors.push('O campo nome é obrigatorio !')
        }

        if(!produto.sku){
            errors.push('O campo sku é obrigatorio !')
        }

        if(!produto.fornecedor){
            errors.push('O campo fornecedor é obrigatorio !')
        }

        if(!produto.preco || produto.preco <= 0){ 
            errors.push('O campo preço deve ter um valor maior que zero(0). ')
        }

        if (errors.length > 0) {
            throw new ErroValidacao(errors)
        }
    }
}