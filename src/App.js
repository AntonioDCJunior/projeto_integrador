import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Inicio from './components/pages/Inicio'
import Profissionais from './components/pages/Profissionais';
import Sobre from './components/pages/Sobre';
import Contato from './components/pages/Contato';
import NewContato from './components/pages/NewContato';
import NewUsuario from './components/pages/NewUsuario';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import NewEndereco from './components/pages/NewEndereco';
import InformacoesPessoais from './components/profissoes/InformacoesPessoais';
import Modal from './components/pages/Modal';
import ModalLogin from './components/pages/Modal';
import CadastroFinalizado from './components/pages/CadastroFinalizado';
import Endereco from './components/Cadastro/Endereco';
import DadosProjetos from './components/profissoes/DadosProjetos';
import Perfil from './components/profissoes/Perfil';
import { CardsServicos } from './components/Cards/CardsServicos';


function App() {
  
    return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path='/' element={<Inicio />} />
          <Route exact path='/profissionais' element={<Profissionais />} />
          <Route exact path='/sobre' element={<Sobre />} />
          <Route exact path='/contato' element={<Contato />} />
          <Route exact path='/modal' element={<Modal />} />
          <Route exact path='/newusuario' element={<NewUsuario />} />
          <Route exact path='/newendereco' element={<NewEndereco />} />
          <Route exact path='/newcontato' element={<NewContato />} />
          
          <Route exact path='/informacoespessoais' element={<InformacoesPessoais />} />
          <Route exact path='/dadosprojetos' element={<DadosProjetos />} />
          <Route exact path='/perfil' element={<Perfil />} />
          <Route exact path='/cardsservicos' element={<CardsServicos />} />
          
          <Route exact path='/cadastrofinalizado' element={<CadastroFinalizado />} />          
          <Route exact path='/endereco/:id' element={<Endereco />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
