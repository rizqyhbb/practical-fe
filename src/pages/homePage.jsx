import axios from "axios";
import { useEffect, useMemo, useState } from "react";

const HomePage = () => {
  const [page, setPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(100)
  const [dataList, setDataList] = useState([])
  const [userList, setUserList] = useState([]);
  let pageNumber = []
  const token = window.localStorage.getItem('token');
  
  const config = {
    params:{
      page: page,
      data_per_page: postPerPage
    },
    headers : {Token: token}
  }
  const getData = async () => {
    const response = await axios.get('https://frontend-test-backend.tritronik.com//test/table',config)
    setUserList(response.data)
    setDataList(response.data.data)
  }
  
  useEffect(() => {
    getData()
  },[page])

  for(let i = 1; i <= userList.total_page; i++){
    pageNumber.push(i)
  }
  console.log(dataList)
  return(
    <div>
      

      <table>
        <tr>
        <th>Name</th>
          <th>Email</th>
          <th>City</th>
          <th>Profile Picture</th>
        </tr>
     {dataList.map((user) => {
       return (
         <tr key={user.name}>
           <td>{user.name}</td>
           <td>{user.email}</td>
           <td>{user.city}</td>
           <td>{user.profile_picture}</td>
         </tr>
       )
     })}
      </table>
      <ul>
        {pageNumber.map((number) => (
          <button key={number} onClick={() => setPage(number)}>{number}</button>
        ))}
      </ul>
    </div>
  )
}

export default HomePage;