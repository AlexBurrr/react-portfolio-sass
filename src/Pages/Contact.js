import React from 'react'
import ContactItem from '../Components/ContactItem'
import phone from '../images/smartphone.svg'
import email from '../images/send.svg'



const Contact = () => {
    return (
        <div className='ContactPage'>
            <div className="contact-sect">
                <ContactItem icon={phone} text1={'(209)568-6070'} title={'Phone'} />
                <ContactItem icon={email} text1={'alexandroberumen@gmail.com'} title={'Email'} />




            </div>
        </div>
    )
}

export default Contact
