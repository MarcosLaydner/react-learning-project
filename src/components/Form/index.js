import { useState } from 'react'
import Button from '../Button/Button'
import DropDown from '../DropDown'
import TextField from '../TextField/TextField'
import './Form.css'

const Form = (props) => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const onSave = (event) => {
        event.preventDefault()
        props.onSubmit({
            name,
            position,
            image,
            team
        })
    }

    return (
        <section className='formulario'>
        <form onSubmit={onSave}>
            <h2>Peencha os Campo para criar o card do colaborador</h2>
            <TextField
                onChange={value => setName(value)}
                value={name}
                required={true}
                label="Nome"
                placeholder="Digite seu nome"
            />
            <TextField
                onChange={value => setPosition(value)}
                value={position}
                required={true}
                label="Cargo"
                placeholder="Digite seu cargo"
            />
            <TextField
                onChange={value => setImage(value)}
                value={image}
                label="Imagem"
                placeholder="Digite o endereço da imagem"
            />
            <DropDown
                required={true}
                label="Time"
                items={times}
                value={team}
                onChange={valor => setTeam(valor)}
            />
            <Button text="Criar">Criar</Button>
        </form>
        </section>
  )
}

export default Form