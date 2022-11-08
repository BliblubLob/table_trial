import { useContext} from 'react';
import { TableInfo } from './App';

export function TableRow(props) {

    const {value2} = useContext(TableInfo)
    const {form_state,set_form_state} = value2
    const {show_form} = form_state

    function handle_click(){
        set_form_state({show_form:!show_form,index:props.index})

    }
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.createdAt}</td>
            <td>
                <button onClick={handle_click}>
                <i className="fa-sharp fa-solid fa-pen-to-square"></i>
                </button>
            </td>
        </tr>
    )
}