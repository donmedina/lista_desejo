import './Plataforma.css'
import Filme from '../Filme'

export const Plataforma = (props) => {
    
    const cssSection = {backgroundColor: props.corPrimaria}
    const cssH3 = {borderColor: props.corSecundaria}
    
    return (
        (props.filmes.length > 0) &&
        <section className='plataforma' style={cssSection}>
            <h3 style={cssH3}>{props.nome}</h3>
            <div className='filmes'>
                {props.filmes.map(filme => 
                    <Filme 
                        imagemFundo = {props.imagemFundo}
                        key         = {filme.titulo}
                        titulo      = {filme.titulo}
                        categoria   = {filme.categoria} 
                        imagem      = {filme.imagem}
                    />
                )}
            </div>
        </section>
    )
}