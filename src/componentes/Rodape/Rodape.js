import './Rodape.css'

export const Rodape = () =>{
    return (
        <footer className='rodape'>
            <div className='redes-sociais'>
                <a href="facebook.com" target="_blank"></a>
                <img src='/imagens/fb.png' alt='Facebook'/>
                <a href="twitter.com" target="_blank"></a>
                <img src='/imagens/tw.png' alt='Twitter'/>
                <a href="instagram.com" target="_blank"></a>
                <img src='/imagens/ig.png' alt='Instagram'/>  
            </div>
            <div>
                <p>Desenvolvido por Gabriel Medina</p>
            </div>
        </footer>
    )
}