import './Button.css'


export const Button = (props) => {
    return (
        <button className='btn btn-warning' >{props.children}</button>
    )
}