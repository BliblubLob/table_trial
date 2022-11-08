import React, { useState } from "react";
import MyTable from "./table";
import TableForm from "./table_form";


const data =[
  {
    "_id": "628dc621adff4647dfdc397b",
    "name": "Test-Dasboard",
    "createdAt": "2022-05-27T09:30:59.758Z",
  },
  {
    "_id": "62907039adff4647dfdc39aa",
    "name": "Test-Dasboard 2",
    "createdAt": "2022-05-27T09:30:59.758Z",
  }
]


export const TableInfo = React.createContext()


function App() {

  const [table_data, set_table_data] = useState(data)
  const [form_state, set_form_state] = useState({show_form:false,index:0})

  //simulate api call and pass data when api returns data
  const value = {table_data, set_table_data}
  const value2 = {form_state, set_form_state}

  

  return (
    <div className="App">

      <TableInfo.Provider value={{value, value2}}>
        <MyTable />
        { form_state.show_form ? <TableForm /> : null }
      </TableInfo.Provider>

    </div>
  );
}

export default App;
