import React from "react";

import commentImg from "../../img/comment.svg";
import likeImg from "../../img/like.svg";
import shareImg from "../../img/share.svg";
import uploadImg from "../../img/upload.svg";

const SocialBtns = ({ comments, shares, likes }) => (
    <div className="social-btns">
        <div>
            <img src={commentImg} alt="Comment" />
            <span>{comments}</span>
        </div>
        <div>
            <img src={shareImg} alt="Share" />
            <span>{shares}</span>
        </div>
        <div>
            <img src={likeImg} alt="Like" />
            <span>{likes}</span>
        </div>
        <div>
            <img src={uploadImg} alt="Upload" />
        </div>
    </div>
);

export default SocialBtns;
