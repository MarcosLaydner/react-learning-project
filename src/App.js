import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form';

function App() {

  const [employees, setEmployees] = useState([])

  const onNewEmployee = (employee) => {
    setEmployees([...employees, employee])
    console.log(employees)
  }

  return (
    <div className="App">
      <Banner/>
      <Form onSubmit={onNewEmployee}/>
    </div>
  );
}

export default App;
