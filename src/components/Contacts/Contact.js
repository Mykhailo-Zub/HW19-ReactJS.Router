import React from "react";
import { Link } from "react-router-dom";

import avatarImg from "../../img/user.svg";

const contact = (props) => (
    <Link to={`/contacts/${props.id}`}>
        <div className="contact">
            <img className="avatar" src={avatarImg} alt="Avatar" />
            <div className="main-info">
                <div className="first-name">{props.firstName}</div>
                <div className="last-name">{props.lastName}</div>
                <div className="phone">{props.phone}</div>
            </div>
            <div className="gender">
                <img src={props.gender} alt="Gender icon" />
            </div>
        </div>
    </Link>
);

export default contact;
