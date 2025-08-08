import './Employee.css'

const Employee = ({employee}) => {
    return (<div className='employee'>

        <div className='cabecalho'>
            <img src={employee.image} alt={employee.name}/>
        </div>
        <div className='rodape'>
            <h4>{employee.name}</h4>
            <h5>{employee.position}</h5>
        </div>

        
    </div>)
}

export default Employee