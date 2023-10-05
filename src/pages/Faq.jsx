import React from 'react'
import Accordions from '../component/Accordion/Accordion'
import './Faq.scss'

const Faq = () => {
  return (
    <div className='faq'>
        <div className='faq-head'>
            <h1>FAQ’s</h1>
            <p>Independence can be lonely, so we have created these guides to help you deliver more business value from your  investments more quickly.</p>
            <input type="search" placeholder='Search'/>
            <div className='search-icon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#333231" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22 22L20 20" stroke="#333231" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
        <div className='faq-body'>
            <div className='faq-container'>
                <Accordions />
                <div className='faq-questions'>
                    <h3>Still have questions ?</h3>
                    <p>Our contact team is available to help in every way you need. Just send a chat</p>
                    <textarea placeholder='Type here...'></textarea>
                </div>
            </div>
            </div>
    </div>
  )
}

export default Faq