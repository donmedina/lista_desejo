import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import Button from '../Button'
import { Fragment } from 'react'
import { useState } from 'react'

export const Formulario = (props) => {

    const [titulo, setTitulo]         = useState('')
    const [categoria, setCategoria]   = useState('')
    const [imagem, setImagem]         = useState('')
    const [plataforma, setPlataforma] = useState('')

    const salvar = (e) =>{
        e.preventDefault()
        props.aoCadastrar({
            titulo, 
            categoria, 
            imagem, 
            plataforma
        })

        setTitulo('') 
        setCategoria('') 
        setImagem('')
        setPlataforma('') 
    }

    return (
        <>
        <section className='formulario'>
            <form onSubmit={salvar}>
                <h2>Preencha os dados para criar o card da série ou filme que você quer assistir.</h2>
                <CampoTexto 
                    label='Título'
                    placeholder='Digite aqui o título do filme ou série...'
                    obrigatorio={true}
                    valor={titulo}
                    aoAlterado={valor => setTitulo(valor)}
                />
                <CampoTexto 
                    label='Categoria'
                    placeholder='Digite aqui a categoria...'
                    obrigatorio={true}
                    valor={categoria}
                    aoAlterado={valor => setCategoria(valor)}
                />
                <CampoTexto 
                    label='Imagem'
                    valor={imagem}
                    placeholder='Digite a url da imagem...'
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    label='Plataforma'
                    plataforma={props.plataforma}
                    valor={plataforma}
                    obrigatorio={true}
                    aoAlterado={valor => setPlataforma(valor)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
        <div className='cabecalho'>
            <h3>Minha lista de desejo:</h3>
        </div>
        </>
    )
}