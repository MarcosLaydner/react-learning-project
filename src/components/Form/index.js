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

    return (
        <section className='formulario'>
        <form >
            <h2>Peencha os Campo para criar o card do colaborador</h2>
            <TextField label="Nome" placeholder="Digite seu nome"/>
            <TextField label="Cargo" placeholder="Digite seu cargo"/>
            <TextField label="Imagem" placeholder="Digite o endereço da imagem"/>
            <DropDown label="Time" items={times}/>
        </form>
        </section>
  )
}

export default Form