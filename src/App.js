import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Plataforma from './componentes/Plataforma';
import Rodape from './componentes/Rodape';
import { useState } from 'react'


function App() {

  const plataforma = [
    {
      nome: 'Disney+',
      corPrimaria: 'rgba(0, 56, 255, 0.5)',
      corSecundaria: '#003AAB',
      imagemFundo: 'url(/imagens/disney.png)'
    },
    {
      nome: 'Globoplay',
      corPrimaria: 'rgba(23, 149, 90, 0.5)',
      corSecundaria: '#A44F00',
      imagemFundo: 'url(/imagens/globoplay.png)'
    },
    {
      nome: 'HBO MAX',
      corPrimaria: 'rgba(116, 77, 166, 0.5)',
      corSecundaria: '#003AAB',
      imagemFundo: 'url(/imagens/hbo.png)'
    },
    {
      nome: 'Netflix',
      corPrimaria: 'rgba(255, 0, 0, 0.5)',
      corSecundaria: 'AB0000',
      imagemFundo: 'url(/imagens/netflix.png)'
    },
    {
      nome: 'Prime Video',
      corPrimaria: 'rgba(41, 78, 152, 0.5)',
      corSecundaria: '#003AAB',
      imagemFundo: 'url(/imagens/prime.png)'
    },
    {
      nome: 'Star +',
      corPrimaria: 'rgba(237, 110, 29, 0.5)',
      corSecundaria: '#ED6E1D',
      imagemFundo: 'url(/imagens/star.png)'
    },
  ]

  const [filmes, setFilmes] = useState([])

  const novoFilme = (filme) =>{
    setFilmes([...filmes, filme])
  }

  return (
    <div className="App">
      
        <Banner/>
        <Formulario 
          plataforma  = {plataforma.map(item => item.nome)}
          aoCadastrar = {filme => novoFilme(filme)} 
        />
        {plataforma.map(plataforma =>
          <Plataforma
            key           = {plataforma.nome}
            nome          = {plataforma.nome}
            corPrimaria   = {plataforma.corPrimaria}
            corSecundaria = {plataforma.corSecundaria}
            imagemFundo   = {plataforma.imagemFundo}
            filmes        = {filmes.filter (filme => filme.plataforma === plataforma.nome)}
          />  
        )}
        <Rodape />
      
    </div>
  );
}

export default App;
