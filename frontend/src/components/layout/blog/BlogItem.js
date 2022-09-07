import React from "react";
import '/Users/jorgeandresbravo/portafoliowebsite/frontend/src/styles/components/pages/BlogItem.scss';

const BlogItem = (props) => {
    const { title, body, writer } = props;

    return (
        <div className="blog">
            <h1>{title}</h1>
            <p>{body}</p>
            <h2>{writer}</h2>

            <hr />
        </div>
    );
}

export default BlogItem;