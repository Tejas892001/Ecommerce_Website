import React from 'react'
import Layout from '../components/Layout/Layout'
const Policy = () => {
  return (
    <Layout title={"Policy - Shopify"}>
      <div className='row contactus image1'>
            <div className='col-md-6'>
                <img
                src='/images/contactus.jpg' alt='ContactUs' style={{width:"80%"}}/>
            </div>
            <div className='col-md-4 contact2'>
                {/* <h1 className='bg-dark p-2 text-white text-center'>CONTACT US</h1> */}
                <p className='text-justify mt-2'>An e-commerce website is a digital platform that enables businesses to sell their products or services online to a global audience. These websites have revolutionized the way people shop, making it convenient for customers to browse, select, and purchase items from the comfort of their homes</p>
                
            </div>
         </div>
    </Layout>
  )
}

export default Policy
