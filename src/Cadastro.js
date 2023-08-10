import React, {useState} from 'react';
import './Cadastro.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Cadastro(){

    const navigate = useNavigate();

    const[cliente, setCliente]=useState({
        nome:"",
        email:"",
        senha:""
    })
    const handleChange = (evento) => {
        setCliente({...cliente, [evento.target.name]:evento.target.value})
    }

    const handleClick = async (evento) => {
        evento.preventDefault();
        try{
            await axios.post("http://localhost:8800/cadastro", cliente)
            navigate("/")
        }catch(err){
            console.log(err)
        }
    }
    console.log(cliente)
    return (
        <div>
            <div id='fundo-cadastro'>
                <div className='modelo-caixa-dois'>
                    <div id='legenda-da-caixa-cadastro'>Cadastro</div>
                    <input type="text" placeholder='Nome' id='cadastro-nome' onChange={handleChange} name='nome'/>
                    <input type="text" placeholder='Email' id='cadastro-email' onChange={handleChange} name='email'/>
                    <input type="password" placeholder='Digite uma senha' className='cadastro-senha' onChange={handleChange} name='senha'/>
                    <input type="password" placeholder='Confirme a senha' className='cadastro-senha' name='confirmacao'/> 
                    <div id='organizador-selecionar-lugares'>
                        <input type="text" placeholder='Origem' className='selecionar-lugares'/>
                        <div id='espacamento-entre-selecionar-lugares'></div>
                        <input type="text" placeholder='Destino' className='selecionar-lugares'/>
                    </div>
                    <button id='botao-de-cadastro' onClick={handleClick}> Concluir Cadastro</button>
                </div>
            </div>
        </div>
    );
}

export default Cadastro;