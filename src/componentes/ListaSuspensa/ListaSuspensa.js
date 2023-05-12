import './ListaSuspensa.css'

export const ListaSuspensa = (props) =>{
    return (
        <div className='lista-suspensa'>
            <label>
                {props.label}
            </label>
            <select>
                {props.plataforma.map(plataforma => {
                    return <option key={plataforma}>{plataforma}</option>
                })}
            </select>
        </div>
    )
}