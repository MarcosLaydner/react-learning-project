import Button from '../Button/Button'
import DropDown from '../DropDown'
import TextField from '../TextField/TextField'
import './Form.css'

const Form = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const onSave = (event) => {
        event.preventDefault()
        console.log("Submitted")
    }

    return (
        <section className='formulario'>
        <form onSubmit={onSave}>
            <h2>Peencha os Campo para criar o card do colaborador</h2>
            <TextField required={true} label="Nome" placeholder="Digite seu nome"/>
            <TextField required={true} label="Cargo" placeholder="Digite seu cargo"/>
            <TextField label="Imagem" placeholder="Digite o endereço da imagem"/>
            <DropDown required={true} label="Time" items={times}/>
            <Button text="Criar">Criar</Button>
        </form>
        </section>
  )
}

export default Form