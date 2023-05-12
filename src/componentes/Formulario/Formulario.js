import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import Button from '../Button'

export const Formulario = (props) => {
    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card da série ou filme que você quer assistir.</h2>
                <CampoTexto 
                    label='Título'
                    placeholder='Digite aqui o título do filme ou série...'
                    required={true}
                />
                <CampoTexto 
                    label='Categoria'
                    placeholder='Digite aqui a categoria...'
                    obrigatorio={true}
                />
                <CampoTexto 
                    label='Imagem'
                    placeholder='Digite a url da imagem...'
                />
                <ListaSuspensa 
                    label='Plataforma'
                    plataforma={props.plataforma}
                />
                <Button />
            </form>
        </section>
    )
}