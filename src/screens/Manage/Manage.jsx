import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import './Manage.css';
export const Manage = () => {
    return (
        <div className='card-box'>
        <h2 className='posicao'>Gerenciamento <i class="bi bi-gear"></i></h2>
            <div className='gerenciar'>
            <strong>Cliente</strong>
            <br/> 
            <span>Gerenciar Clientes</span>
            <p>Aqui você pode adicionar, remover, ou deletar registros de clientes.</p>         
            <Button variant="contained" component={Link} to="/CadastrarCliente">Criar</Button>
            <Button variant="contained" component={Link} to="/AtualizarCliente">Atualizar</Button>  
            <Button variant="contained" component={Link} to="/DeletarCliente">Deletar</Button>
            
            </div>  
            <div className='gerenciar'>
            <strong>Funcionário</strong>
            <br/>
            <span>Gerenciar Funcionários</span>
            <p>Aqui você pode adicionar, remover, ou deletar registros de funcionários.</p>
            <Button variant="contained" component={Link} to="/CadastrarFuncionario">Criar</Button>
            <Button variant="contained" component={Link} to="/AtualizarFuncionario">Atualizar</Button>  
            <Button variant="contained" component={Link} to="/DeletarFuncionario">Deletar</Button> 
            </div>
            <div className='gerenciar'>
            <strong>Produtos</strong>
            <br/>
            <span>Gerenciar Produtos</span>
            <p>Aqui você pode adicionar, remover, ou deletar registros de produtos.</p>
            <Button variant="contained" component={Link} to="/CadastrarProduto">Criar</Button>
            <Button variant="contained" component={Link} to="/AtualizarProduto">Atualizar</Button>  
            <Button variant="contained" component={Link} to="/DeletarProduto">Deletar</Button>  
            </div>
            <div className='gerenciar'>
            <strong>Categoria</strong>
            <br/>
            <span>Gerenciar Categorias</span>
            <p>Aqui você pode adicionar, remover, ou deletar registros de categorias.</p>
            <Button variant="contained" component={Link} to="/CadastrarCategoria">Criar</Button>
            <Button variant="contained" component={Link} to="/AtualizarCategoria">Atualizar</Button>  
            <Button variant="contained" component={Link} to="/DeletarCategoria">Deletar</Button>  
            </div>
        </div>    
    );
}