import './Button.css'

const Button = (props) => {
    return (
        <button className='custom_button'>
            {props.children}
        </button>
    )
}

export default Button