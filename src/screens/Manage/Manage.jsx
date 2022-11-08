import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';

export const Manage = () => {
    return (
        <div>
        <h1>Gerenciamento</h1>
            <div>
            <strong>Cliente</strong>
            <br/> 
            <span>Gerenciar Clientes</span>
            <p>Aqui você pode adicionar, remover, ou deletar registros de clientes.</p>
            <Button variant="outlined" component={Link} to="/CadastrarCliente">Criar</Button>
            <Button variant="outlined" component={Link} to="/AtualizarCliente">Atualizar</Button>  
            <Button variant="outlined" component={Link} to="/DeletarCliente">Deletar</Button>
            </div>  
            <div>
            <strong>Funcionário</strong>
            <br/>
            <span>Gerenciar Funcionários</span>
            <p>Aqui você pode adicionar, remover, ou deletar registros de funcionários.</p>
            <Button variant="outlined" component={Link} to="/CadastrarFuncionario">Criar</Button>
            <Button variant="outlined" component={Link} to="/AtualizarFuncionario">Atualizar</Button>  
            <Button variant="outlined" component={Link} to="/DeletarFuncionario">Deletar</Button> 
            </div>
            <div>
            <strong>Produtos</strong>
            <br/>
            <span>Gerenciar Produtos</span>
            <p>Aqui você pode adicionar, remover, ou deletar registros de produtos.</p>
            <Button variant="outlined" component={Link} to="/CadastrarProduto">Criar</Button>
            <Button variant="outlined" component={Link} to="/AtualizarProduto">Atualizar</Button>  
            <Button variant="outlined" component={Link} to="/DeletarProduto">Deletar</Button>  
            </div>
            <div>
            <strong>Categoria</strong>
            <br/>
            <span>Gerenciar Categorias</span>
            <p>Aqui você pode adicionar, remover, ou deletar registros de categorias.</p>
            <Button variant="outlined" component={Link} to="/CadastrarCategoria">Criar</Button>
            <Button variant="outlined" component={Link} to="/AtualizarCategoria">Atualizar</Button>  
            <Button variant="outlined" component={Link} to="/DeletarCategoria">Deletar</Button>  
            </div>
        </div>    
    );
}