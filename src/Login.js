import './Login.css';

function Login(){
    return(
        <div>
            <div id='fundo-login'>
                <div className='modelo-caixa-tres'>
                    <div id='legenda-da-caixa-login'>Login</div>
                    <input type="text" placeholder='Nome' id='login-nome'/>
                    <input type="text" placeholder='Email' id='login-email'/>
                    <input type="text" placeholder='Digite sua senha' className='login-senha'/>
                    <button id='botao-de-login'>Logar-se</button>
                </div>
            </div>
        </div>
    )
}

export default Login;