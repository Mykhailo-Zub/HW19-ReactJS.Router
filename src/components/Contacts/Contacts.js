import React, { Component } from "react";
import Contact from "./Contact";
import maleImg from "../../img/male.svg";
import femaleImg from "../../img/female.svg";
import unknownImg from "../../img/unknown.svg";

export const contacts = [
    {
        firstName: "Барней",
        lastName: "Стинсовський",
        phone: "+380956319521",
        gender: "male",
        id: 1,
        info: "Автослесарь",
        photo:
            "https://images.pexels.com/photos/3556533/pexels-photo-3556533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
        firstName: "Робін",
        lastName: "Щербатська",
        phone: "+380931460123",
        gender: "female",
        id: 2,
        info: "Воспитатель из детсада",
        photo:
            "https://images.pexels.com/photos/1139317/pexels-photo-1139317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
        firstName: "Анонімний",
        lastName: "Анонімус",
        phone: "+380666666666",
        id: 3,
        info: "Предлагает оформить карту Gold",
        photo:
            "https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
        firstName: "Лілія",
        lastName: "Олдровна",
        phone: "+380504691254",
        gender: "female",
        id: 4,
        info: "Семейный врач",
        photo:
            "https://images.pexels.com/photos/3059930/pexels-photo-3059930.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
        firstName: "Маршен",
        lastName: "Еріксонян",
        phone: "+380739432123",
        gender: "male",
        id: 5,
        info: "Торгует рыбой на рынке",
        photo:
            "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
        firstName: "Теодор",
        lastName: "Мотсбес",
        phone: "+380956319526",
        gender: "male",
        id: 6,
        info: "Таксист хороший",
        photo:
            "https://images.pexels.com/photos/3214726/pexels-photo-3214726.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
];

export default class Contacts extends Component {
    state = {
        contacts: [...contacts],
        search: "",
        male: true,
        female: true,
        notSpecified: true,
    };

    handleSearchChange = (e) => {
        this.setState({
            search: e.target.value,
            contacts: contacts.filter((el) => {
                return (
                    el.firstName
                        .toLowerCase()
                        .includes(e.target.value.toLowerCase()) ||
                    el.lastName.includes(e.target.value.toLowerCase()) ||
                    el.phone.toString().includes(e.target.value)
                );
            }),
        });
    };

    addGenderImg = (gender) => {
        if (gender === "male") {
            return maleImg;
        } else if (gender === "female") {
            return femaleImg;
        } else {
            return unknownImg;
        }
    };

    handleGenderChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.checked,
            contacts: this.state.contacts.filter((el) => {
                if (this.state.notSpecified) {
                    return el.gender === undefined;
                } else if (this.state.female) {
                    return el.gender === "female";
                } else if (this.state.male) {
                    return el.gender === "male";
                } else return null;
            }),
        });
    };

    render() {
        return (
            <div className="contacts-wrapper">
                <input
                    type="text"
                    id="search"
                    placeholder="Search"
                    value={this.state.search}
                    onChange={this.handleSearchChange}
                />
                {this.state.contacts.map(
                    ({ firstName, lastName, phone, gender, id }) => {
                        return (
                            <Contact
                                firstName={firstName}
                                lastName={lastName}
                                phone={phone}
                                gender={this.addGenderImg(gender)}
                                key={phone}
                                id={id}
                            />
                        );
                    }
                )}
            </div>
        );
    }
}
