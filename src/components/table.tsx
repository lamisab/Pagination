import React from 'react'
import { IUser } from 'src/core/types/user.type'


interface Props {
    users:IUser[],
}

const Table = (props: Props) => {
  return (
    <>
    <table className=" table-row-group ">
  <thead>
    <tr>
      <th className='p-3'>Id</th>
      <th className='p-3'>Name</th>
      <th className='p-3'>Phone</th>
      <th className='p-3'>Email</th>
      <th className='p-3'>Signup Date</th>
    </tr>
  </thead>
  <tbody>
    {props.users.map(user => (
        <tr key={user.id} className=' items-center justify-center'>
            <td className='px-7 py-2'>{user.id}</td>
            <td className='px-7 py-2'>{user.first_name}</td>
            <td className='px-7 py-2'>{user.fullMobileNo}</td>
            <td className='px-7 py-2'>{user.email}</td>
            <td className='px-7 py-2'>{user.signupDate}</td>
        </tr>
    ))}


  </tbody>
</table>
    </>
  )
}

export default Table