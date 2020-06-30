import React, { useState } from 'react';
import api from '../../services/api';
import './styles.css';

import Slide from '../../components/Slide';

//import de icones header
import logo from '../../assets/img/logo.png';
import instagram from '../../assets/img/instagram.png';
import github from '../../assets/img/github.png';
import linkedin from '../../assets/img/linkedin.png';

//import de imagem Sobre
import perfil from '../../assets/img/stetes.jfif';

//import de icones Serviços
import institucional from '../../assets/img/institucional.png';
import ecommerce from '../../assets/img/ecommerce.png';
import mobile from '../../assets/img/mobile.png';
import marketing from '../../assets/img/marketing.png';
import servidores from '../../assets/img/servidores.png';
import navegador from '../../assets/img/navegador.png';

//import portfolio
import background from '../../assets/img/background.png'

const Home = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [mensagem, setMensagem] = useState('');

  function handleChangeNome(e) {
    setNome(e.target.value);
  };

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  };

  function handleChangeWhatsapp(e) {
    setWhatsapp(e.target.value);
  };

  function handleChangeMensagem(e) {
    setMensagem(e.target.value);
  };

  async function handleSendMail(e) {
    e.preventDefault();

    const data = {
      sender: nome,
      mail: email,
      whatsapp,
      message: mensagem,
    };

    await api.post('/mail', data)
      .then(response => {
        if (response.data.id) {
          alert('E-mail enviado com sucesso!');
          setNome('');
          setEmail('');
          setWhatsapp('');
          setMensagem('');
        } else {
          alert('Falha ao enviar e-mail, tente novamente mais tarde.');
        }
      })
      .catch(err => {
        alert(err);
      });
  }

  return (
    <div className="container">
      <a name="/"></a>
      <div className="header">
        <div className="header-content">
          <img src={logo} alt="Logo" />
          <li className="header-list">
            <ul><a href="#/">Home</a></ul>
            <ul><a href="#sobre">Sobre</a></ul>
            <ul><a href="#servicos">Serviços</a></ul>
            <ul><a href="#portfolio">Portfólio</a></ul>
            <ul><a href="#contato">Contato</a></ul>
            <ul><a href="https://instagram.com/g.stetes" target="_blank"><img src={instagram} alt="Instagram" /></a></ul>
            <ul><a href="https://github.com/gstetes" target="_blank" rel="noopener noreferrer"><img src={github} alt="GitHub" /></a></ul>
            <ul><a href="https://linkedin.com/" target="_blank" ><img src={linkedin} alt="LinkedIn" /></a></ul>
          </li>
        </div>
        <h1 id="name">Guilherme Stetes</h1>
        <h1 id="subtitle">Desenvolvedor FullStack</h1>
        <p id="node">Node.js +</p>
        <p id="react">React.js +</p>
        <p id="react-native">React Native</p>
      </div>
      <div className="sobre-container">
        <a name="sobre"></a>
        <h1 id="sobre">Sobre</h1>
        <section className="sobre-content">
          <section id="text">
            <p>
              Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem <span>Teste</span> Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun Lorem Ipsun
            </p>
          </section>
          <section id="image">
            <img src={perfil} alt="Foto Perfil" />
          </section>
        </section>
      </div>
      <div className="servicos-container">
        <a name="servicos"></a>
        <h1>Serviços</h1>
        <section className="servicos-content">
          <li>
            <ul>
              <img src={institucional} alt="Institucionais" />
              <p>Sites Institucionais</p>
            </ul>
            <ul>
              <img src={ecommerce} alt="E-Commerce" />
              <p>E-Commerce</p>
            </ul>
            <ul>
              <img src={mobile} alt="Mobile" />
              <p>Apps Mobile</p>
            </ul>
            <ul>
              <img src={marketing} alt="Marketing" />
              <p>Marketing Digital</p>
            </ul>
            <ul>
              <img src={servidores} alt="Back-end" />
              <p>Desenvolvimento Back-end</p>
            </ul>
            <ul>
              <img src={navegador} alt="Front-end" />
              <p>Desenvolvimento Front-end</p>
            </ul>
          </li>
        </section>
      </div>
      <div className="portfolio-container">
        <a name="portfolio" />
        <h1>Portfólio</h1>
        <section className="portfolio-content">
          <div className="slide">
            <Slide />
          </div>
          <h1>Projetos Criados</h1>
          <li>
            <ul>
              <img src={background} alt="Projeto 1" />
            </ul>
            <ul>
              <img src={background} alt="Projeto 2" />
            </ul>
            <ul>
              <img src={background} alt="Projeto 3" />
            </ul>
            <ul>
              <img src={background} alt="Projeto 4" />
            </ul>
            <ul>
              <img src={background} alt="Projeto 5" />
            </ul>
            <ul>
              <img src={background} alt="Projeto 6" />
            </ul>
          </li>
        </section>
      </div>
      <div className="contato-container">
        <a name="contato" />
        <h1>Contato</h1>
        <section className="contato-content">
          <h2>Está Planejando tirar a sua idéia do papel?</h2>
          <h3>Me envie um e-mail utilizando o formulário abaixo para que possamos fazer seu orçamento!</h3>
          <form onSubmit={handleSendMail}>
            <input type="text" placeholder="Seu nome completo" value={nome} onChange={handleChangeNome} />
            <input type="email" placeholder="Seu e-mail" value={email} onChange={handleChangeEmail} />
            <input type="text" placeholder="WhatsApp" value={whatsapp} onChange={handleChangeWhatsapp} />
            <textarea cols="20" rows="10" placeholder="Me conte um pouco da sua idéia" value={mensagem} onChange={handleChangeMensagem} />
            <button type="submit">Enviar</button>
          </form>
          <a href="https://api.whatsapp.com/send?1=pt_BR&phone=5519996858976&text=" id="whatsapp" target="_blank" rel="noopener noreferrer"><p>Enviar mensagem no WhatsApp</p></a>
        </section>
      </div>
      <span id="copyright">© Copyright 2020.</span>
    </div>
  )
};

export default Home;