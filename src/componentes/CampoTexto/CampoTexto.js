import './CampoTexto.css'

export const CampoTexto = (props) => {
    return (
        <div className='campo-texto'>
            <label>
                {props.label}
            </label>
            <input placeholder={props.placeholder} requierd={props.obrigatorio} />
        </div>
    )
}