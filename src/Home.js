import { Link } from "react-router-dom";
import './Home.css';
import './index.css';
import { Outlet } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios';
import {VscEye, VscEyeClosed} from "react-icons/vsc";

function Home(){
    return(
        <div>
            <div className='divisao-um'>
                <div className='titulo-um'>
                <h1>Deixe eu te guiar na viagem dos seus sonhos!</h1>
                </div>
                <div className='titulo-dois'>
                <h2><Link id='formatacao-link-cadastro' to={'cadastre-se'}>Cadastre-se</Link> e enviarei a você um otimo roteiro para fazer a viagem dos seus sonhos.</h2>
                <h3 id="titulo-tres">Já possui cadastro?<Link id="formatacao-link-login" to={'login'}> Faça seu login</Link></h3>
                </div>
            </div>
            <div className='divisao-dois'>
                <div className='modelo-caixa'>
                <div className='icone'>
                    <div id='imagem-tres'></div>
                </div>
                <div className='conteudo-caixa'>
                    <p className='tipo-letra'>Escolhemos as melhores acomodações e formas de deslocamento dentro de suas pretenções.</p>
                </div>
                </div>
                <div className='modelo-caixa'>
                <div className='icone'>
                    <div id='imagem-dois'></div>
                </div>
                <div className='conteudo-caixa'>
                    <p className='tipo-letra'>Selecionamos o melhor roteiro para você, para sua família, para sua equipe e amigos.</p>
                </div>
                </div>
                <div className='modelo-caixa'>
                <div className='icone'>
                    <div id='imagem'></div>
                </div>
                <div className='conteudo-caixa'>
                    <p className='tipo-letra'> Venha <a href='https://www.instagram.com/catiaemb/' target='_blank' rel='external' className='decoracao-link'>me conhecer</a> e <a href='https://www.instagram.com/elisetourviagens/' target='_blank' rel='external' className='decoracao-link'>conhecer a agência</a> atráves de nossas páginas no Instagram.</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Home