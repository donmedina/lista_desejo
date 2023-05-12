import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';


function App() {

  const plataforma = [
    {
      nome: 'Disney+',
      corPrimaria: '',
      corSecundaria: '',
      imagemFundo: '/imagens/disney.png'
    },
    {
      nome: 'Globoplay',
      corPrimaria: '',
      corSecundaria: '',
      imagemFundo: '/imagens/globoplay.png'
    },
    {
      nome: 'HBO MAX',
      corPrimaria: '',
      corSecundaria: '',
      imagemFundo: '/imagens/hbo.png'
    },
    {
      nome: 'Netflix',
      corPrimaria: '',
      corSecundaria: '',
      imagemFundo: '/imagens/netflix.png'
    },
    {
      nome: 'Prime Video',
      corPrimaria: '',
      corSecundaria: '',
      imagemFundo: '/imagens/prime.png'
    },
    {
      nome: 'Star +',
      corPrimaria: '',
      corSecundaria: '',
      imagemFundo: '/imagens/star.png'
    },
  ]

  return (
    <div className="App">
      
        <Banner/>
        <Formulario plataforma={plataforma.map(item => item.nome)} />
      
    </div>
  );
}

export default App;
