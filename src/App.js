import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
    NavLink,
    Redirect,
} from "react-router-dom";

import Contacts from "./components/Contacts/Contacts";
import Main from "./components/Main";
import Post from "./components/Posts/Post";

import "./App.css";
import Photos from "./components/Photos";
import ContactFull from "./components/Contacts/ContactFull";

const posts = [
    {
        author: {
            name: "Anakin Skywalker",
            photo:
                "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg",
            nickname: "@dart_vader",
        },
        content: "WTF? Who is Rey? Why she is Skywalker? Luke...?",
        image:
            "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale",
        date: "26 февр.",
        social: {
            likes: 165,
            shares: 8,
            comments: 63,
        },
    },
    {
        author: {
            name: "Luke Skywalker",
            photo:
                "https://s1.1zoom.ru/big0/995/Star_Wars_The_Last_Jedi_Men_Luke_Skywalker_Mark_536216_640x1024.jpg",
            nickname: "@good_luke",
        },
        content: "Rey called herself Skywalker because she is the last JEDI",
        image:
            "https://swshadowcouncil.files.wordpress.com/2018/01/8fcc2-t-star-wars-portfolio-06-2017-longform-a.jpg",
        date: "27 февр.",
        social: {
            likes: 134,
            shares: 6,
            comments: 52,
        },
    },
];

const photos = [
    "https://images.pexels.com/photos/5218345/pexels-photo-5218345.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/5198585/pexels-photo-5198585.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/5282392/pexels-photo-5282392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/3009487/pexels-photo-3009487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/4654356/pexels-photo-4654356.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/5224736/pexels-photo-5224736.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
];

const App = () => {
    return (
        <Router>
            <nav>
                <NavLink to="/main" exact activeClassName="selected">
                    Main
                </NavLink>
                <NavLink to="/posts" exact activeClassName="selected">
                    Posts
                </NavLink>
                <NavLink to="/photos" exact activeClassName="selected">
                    Photos
                </NavLink>
                <NavLink to="/contacts" exact activeClassName="selected">
                    Contacts
                </NavLink>
            </nav>
            <Switch>
                <Route path="/main" exact component={Main} />
                <Route path="/posts" exact>
                    {posts.map(({ author, date, content, image, social }) => {
                        return (
                            <Post
                                author={author}
                                date={date}
                                content={content}
                                image={image}
                                social={social}
                            />
                        );
                    })}
                </Route>
                <Route path="/photos" exact>
                    <div className="photo-wrapper">
                        {photos.map((e) => (
                            <Photos link={e} />
                        ))}
                    </div>
                </Route>
                <Route
                    path="/contacts/:contactId"
                    exact
                    component={ContactFull}
                />
                <Route path="/contacts/" exact component={Contacts} />
                <Route
                    path="/"
                    exact
                    render={() => <Redirect to="/main" />}
                ></Route>
            </Switch>
        </Router>
    );
};

export default App;
