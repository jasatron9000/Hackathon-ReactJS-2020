import Question from '../../components/Discussion/Question.js'
import Comment from '../../components/Discussion/Comment.js'
import SideBar from '../../components/SideBar'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

function Post2() {
    const [post, setPost] = useState({});
    const router = useRouter();

    useEffect(() => {
        fetch(`http://localhost:3141/api/posts/${router.query.postId}`).then(res => res.json()).then(post => {
            setPost(post);
        })
    }, [router.query.postId]);
    return (
        <div>
                <div className="float-right w-4/5">
                {   post ? <Question posts={post} /> : <div></div> }
                    <hr />
                    {/* {this.state.comments.map(comment => (
                        <Comment comment={comment} />
                    ))} */}
                </div>
            </div>
    )
}

// export default withRouter(Post)
export default Post2;