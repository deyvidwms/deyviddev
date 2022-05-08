import React from 'react';

import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";



import './index.css';

import imagemUsuario from '../../assets/images/foto.jpeg';

function Initial() {
	return (
		<>
			<div className='content'>
				<div className='card'>
					<div className='card--image'>
						<img src={imagemUsuario} alt="Imagem do Criador da Página"/>
					</div>
					<div className='card--content'>
						<h1>Deyvid William</h1>
						<hr/>
						<h2>Desenvolvedor Web Full Stack</h2>
						<div className="content--social-list">
							<span id='icon-github' onClick={()=>{window.open("https://github.com/deyvidwms")}}>
								<FaGithub />
							</span>
							<span id='icon-instagram' onClick={()=>{window.open("https://www.instagram.com/deyvidwms/")}}>
								<FaInstagram />
							</span>
							<span id='icon-linkedin' onClick={()=>{window.open("https://www.linkedin.com/in/deyvid-william-8ba5951b4")}}>
								<FaLinkedin />
							</span>
						</div>
					</div>
					<div className='card--menu'>
						<p onClick={()=>{window.location.reload()}}>Home</p>
						<p onClick={()=>{}}>Projetos</p>
						<p onClick={()=>{}}>Posts</p>
						<p onClick={()=>{}}>Pague-me um café</p>
					</div>
				</div>
			</div>
			
		</>
	);
}

export default Initial;