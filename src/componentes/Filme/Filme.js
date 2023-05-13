import './Filme.css'

export const Filme = ({titulo, categoria, imagem, imagemFundo})=> {
    console.log(imagemFundo)
    return (
        <div className='filme'>
            <div className='topo-card' style={{backgroundImage: imagemFundo}}>
                <img src={imagem} alt={titulo}/>
            </div>
            <div className='rodape-card'>
                <h4>{titulo}</h4>
                <h5>{categoria}</h5>
            </div>
        </div>
    )    
}