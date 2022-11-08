import React, { useEffect, useState } from "react";
import MyTable from "./table";
import TableForm from "./table_form";
import axios from 'axios'


//used for testing without mock api
var data = [
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



//creating context
export const TableInfo = React.createContext()

function App() {

  //for preventing rendering before api replies
  const [loading, set_loading] = useState(true)
  const [table_data, set_table_data] = useState(data) // or use usestate(data_list[0] for mock api)
  const [form_state, set_form_state] = useState({ show_form: false, index: 0 })

  useEffect(
    () => {
      //mock api using postman, pls change the url if using other mock api
      axios.get('https://50ddaebf-7649-4dab-9077-c95f5672cc4b.mock.pstmn.io').then(
        function (res) {
          console.log(res.data.data)
          set_loading(false)
        }
      )
    }
  )

  //simulate api call and pass data when api returns data
  const value = { table_data, set_table_data }
  const value2 = { form_state, set_form_state }

  if (loading) {
    return null
  }
  else {
    return (
      <div className="App">

        <TableInfo.Provider value={{ value, value2 }}>
          <MyTable />
          {form_state.show_form ? <TableForm /> : null}
        </TableInfo.Provider>

      </div>
    );
  }

}

export default App;
