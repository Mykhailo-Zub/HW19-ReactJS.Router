import React from "react";
import { contacts } from "./Contacts";

const ContactFull = (props) => {
    const contactInfo = contacts.find((el) => {
        return el.id === +props.match.params.contactId;
    });
    const goBack = () => {
        props.history.goBack();
    };
    return (
        <div className="contact-info">
            <img
                className="full-avatar"
                src={contactInfo?.photo}
                alt="Avatar"
            />
            <div className="main-info">
                <div className="first-name">
                    <span>First name: </span>
                    {contactInfo?.firstName}
                </div>
                <div className="last-name">
                    <span>Last name: </span>
                    {contactInfo?.lastName}
                </div>
                <div className="phone">
                    <span>Phone: </span>
                    {contactInfo?.phone}
                </div>
                <div className="info">
                    <span>Info: </span>
                    {contactInfo?.info}
                </div>
            </div>
            <button onClick={goBack}>Back</button>
        </div>
    );
};

export default ContactFull;
