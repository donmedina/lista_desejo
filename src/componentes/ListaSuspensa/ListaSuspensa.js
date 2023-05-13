import './ListaSuspensa.css'

export const ListaSuspensa = (props) =>{
    return (
        <div className='lista-suspensa'>
            <label>
                {props.label}
            </label>
            <select onChange={e=>props.aoAlterado(e.target.value)} required={props.obrigatorio} value={props.valor}>
                <option value=''></option>
                {props.plataforma.map(plataforma => {
                    return <option key={plataforma}>{plataforma}</option>
                })}
            </select>
        </div>
    )
}