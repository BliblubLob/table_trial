import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useContext } from 'react';
import { TableInfo } from './App';

function TableForm() {

  const { value, value2 } = useContext(TableInfo)
  const { table_data, set_table_data } = value
  const { form_state ,set_form_state} = value2

  //get which row of data to become default value of form
  const input_data = table_data[form_state.index]

  //when close button click change form state to not render
  function handle_close(){
      set_form_state(false)
  }

  function handle_save(e) {
    e.preventDefault()

    function make_new_table_data() {
      const temp_data = table_data


      //change name of data to users input
      temp_data[form_state.index].name = e.target[1].value

      //change created at to users input
      temp_data[form_state.index].index = e.target[2].value


      return temp_data
    }

    set_table_data(make_new_table_data())

    //hmm somehow react doesnot re-render when form doesnt close
    set_form_state(false)

  }

  return (
    <Modal.Dialog>
      <Form onSubmit={handle_save}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>


          {/* the form within the modal ----------------------- */}
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
          {/* end of form ----------------------*/}




        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handle_close}>Close</Button>
          <Button variant="primary" type="submit">Save changes</Button>
        </Modal.Footer>
      </Form>
    </Modal.Dialog>
  );
}

export default TableForm;