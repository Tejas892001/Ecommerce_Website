import React from 'react'
import Layout from '../components/Layout/Layout'
import {BiMailSend, BiPhoneCall, BiSupport} from 'react-icons/bi';
const Contact = () => {
  return (
    <Layout title={"Contact - Shopify"}>
         <div className='row contactus image1'>
            <div className='col-md-6'>
                <img
                src='/images/contactus.jpg' alt='ContactUs' style={{width:"80%"}}/>
            </div>
            <div className='col-md-4 contact2'>
                <h1 className='bg-dark p-2 text-white text-center'>CONTACT US</h1>
                <p className='text-justify mt-2'>For any queries and information regarding product feel free to contact us</p>
                <p className='mt-3'> <BiMailSend/> : shopify123@gmail.com </p>
                <p className='mt-3'> <BiPhoneCall/> : 02382-25561</p>
                <p className='mt-3'> <BiSupport/> : 1800-0101-1011 (toll free)</p>
            </div>
         </div>
        
    </Layout>
  )
}

export default Contact
