import Question from '../components/Discussion/Question.js'
import Comment from '../components/Discussion/Comment.js'
import SideBar from '../components/SideBar'
import { useFetchUser } from '../lib/user'
import { useState, useEffect } from 'react'
import CourseNavigation from '../components/CourseNav'
import Logging from '../components/Logging'

class Discussion extends React.Component {

    constructor(props){
        super(props)
        this.state = {
        }
    }

    componentWillMount(){
        fetch(`http://localhost:3141/api/posts/`).then(res => res.json()).then(posts => this.setState(
            {
                posts
            }
        ))
    }

    render() {
        console.log(this.state)
        return (
            <div>
               
                <div className="float-right w-4/5">
        {this.state.posts ? this.state.posts.map(post => <Question posts={post} />) : <div></div> }
                    <hr />
                    {/* {this.state.comments.map(comment => (
                        <Comment comment={comment} />
                    ))} */}
                </div>
            </div>
        )
    }
}

export default Discussion
