
import './CampoTexto.css'

export const CampoTexto = (props) => {

    const aoDigitado = (e)=>{
        props.aoAlterado(e.target.value)
    }

    return (
        <div className='campo-texto'>
            <label>
                {props.label}
            </label>
            <input 
                value={props.valor}
                placeholder={props.placeholder} 
                required={props.obrigatorio}
                onChange={aoDigitado} />
        </div>
    )
}