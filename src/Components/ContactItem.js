import React from 'react'

const ContactItem = ({ icon, text1, title }) => {
    return (
        <div className="ContactItem">
            <div className='contact'>
                <img src={icon} alt="/" />
                <div className="right-items">
                    <h6>{title}</h6>
                    <p>{text1}</p>

                </div>
            </div>

        </div>

    )
}

export default ContactItem
