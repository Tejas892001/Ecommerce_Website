import React from 'react'
import AdminMenu from "../../components/Layout/AdminMenu"
const AdminOrders = () => {
  return (
    <>
        <div className='row'>
             <div className='col-md-3'>
                <AdminMenu/>
            </div>    
            <div className='col-md-9'>
                <h1 className='text-center'>All Orders</h1>
            </div>
        </div> 
    </>
  )
}

export default AdminOrders
