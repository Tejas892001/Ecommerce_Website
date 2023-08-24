import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Helmet} from 'react-helmet'
const Layout = ({children,title,description,keywords,author}) => {
  return (
    <div>
        <Helmet>
            <meta charSet='utf-8'/>
            <meta name='description' content={description}/>
            <meta name='keywords' content={keywords}/>
            <meta name='authors' content={author}/>
            <title>{title}</title>
        </Helmet>
      <Header/>
      <main style={{minHeight:"70vh"}}>
          {children}
      </main>
      <Footer/>
      
    </div>
  );
};

Layout.defaultProps = {
    title: 'Shopify',
    description: 'An e-commerce website is a digital platform that enables businesses to sell their products or services online to a global audience. These websites have revolutionized the way people shop, making it convenient for customers to browse, select, and purchase items from the comfort of their homes.',
    keywords: 'mern,react,mongodb,node',
    author: 'Tejas Gundale',
}

export default Layout
