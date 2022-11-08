import Form from 'react-bootstrap/Form';
import { useContext } from 'react';
import { TableInfo } from './App';

function MyForm() {
  const {value,value2} = useContext(TableInfo)
  const {table_data} = value
  const {form_state} = value2

  //get which row of data to become default value of form
  const input_data = table_data[form_state.index]

  return (
    <>
      <div>
        <Form.Label >Name</Form.Label>
        <Form.Control
          type="text"
          defaultValue={input_data.name}
        />
      </div>

    <div>
    <Form.Label >Created At</Form.Label>
      <Form.Control
        type="text"
        defaultValue={input_data.createdAt}
      />
    </div>



    </>
  );
}

export default MyForm;