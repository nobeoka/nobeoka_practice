import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/react-fontawesome";
import { clipButton } from "../types/clipButton";

// iconStyleをpropsとして受け取る

export const BookMarkButton: FC<clipButton> = (props) => {
    const { iconStyle, articleClip } = props;

    return(
        <button className="ml-1 hover:opacity-75" onClick={articleClip}>
            <FontAwesomeIcon
            icon={faBookmark}
            size={"2x"}
            style={{ color: iconStyle }}
            />
        </button>
    );
};