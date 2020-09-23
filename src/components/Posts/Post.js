import React from "react";

import SocialBtns from "./SocialBtns";

import confirmImg from "../../img/confirm.svg";
import downArrowImg from "../../img/down-arrow.svg";

const Post = ({ author, date, content, image, social }) => (
    <div className="post-wrapper">
        <div
            className="post_avatar"
            style={{ backgroundImage: `url(${author.photo})` }}
        ></div>
        <div className="content-column">
            <div className="name-row">
                <div className="name">{author.name}</div>
                <img src={confirmImg} alt="Confirmed" className="confirm" />
                <div className="nickname">{author.nickname}</div>
                <div className="dot"></div>
                <div className="date">{date}</div>
                <img
                    className="more-arrow"
                    src={downArrowImg}
                    alt="Show more"
                />
            </div>
            <div className="content">{content}</div>
            <div className="content-img">
                <img src={image} alt="Content" />
            </div>
            <SocialBtns
                comments={social.comments}
                shares={social.shares}
                likes={social.likes}
            />
        </div>
    </div>
);

export default Post;
