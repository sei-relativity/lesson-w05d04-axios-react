import React from 'react'
import Post from './Post';

const PostContainer = (props) => {
    const singlePost =   props.allPosts.map((item, index) => {
        return <Post title={item.title} body={item.body} key={index} />
    })
    return(
        <div className="row">
            {singlePost}

        </div>
    )
}

export default PostContainer;