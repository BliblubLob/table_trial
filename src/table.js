import { useContext } from 'react';

import Table from 'react-bootstrap/Table';
import { TableRow } from './table_row';
import { TableInfo } from './App';



function MyTable() {
    const { value } = useContext(TableInfo)
    const { table_data } = value
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Created At</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>

                {/* render the rows */}
                {table_data.map(function render_rows(row_info, index) {
                    return (
                        <TableRow key={row_info._id} name={row_info.name} createdAt={row_info.createdAt} index={index} />
                    )
                })}

            </tbody>
        </Table>
    );
}

export default MyTable;