import Question from '../../components/Discussion/Question.js'
import Comment from '../../components/Discussion/Comment.js'
import SideBar from '../../components/SideBar'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useFetchUser } from '../../lib/user'


function Post2() {
    const [post, setPost] = useState({});
    const router = useRouter();
    const {user, loading} = useFetchUser({required : true})

    const commentArray = [
        {
            user:"baseballparchment",
            likes:"30",
            body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vulputate, magna eget aliquet luctus, risus odio volutpat sapien, in dictum urna arcu a urna. Donec cursus dictum sem et facilisis. Integer quis ultrices diam. Nulla convallis dui sit amet hendrerit lobortis. Sed eros odio, tincidunt feugiat cursus eget, ullamcorper fermentum libero. Etiam gravida dui aliquam, venenatis lorem quis, porta ipsum. Cras ut sem ullamcorper, vestibulum lorem sed, posuere eros. Cras eget odio velit. Curabitur porttitor ipsum nec commodo condimentum. Praesent tincidunt tristique congue. Etiam commodo vehicula metus eget rhoncus. "
        },
        {
            user:"habitatanne",
            likes:"02",
            body:"Etiam massa enim, rhoncus a ipsum ac, aliquet iaculis mi. Maecenas urna risus, ullamcorper eget purus vel, ornare molestie augue. Etiam malesuada volutpat nunc. Vestibulum quis ante pulvinar arcu sagittis condimentum. Mauris ex lectus, placerat ac libero porttitor, faucibus scelerisque ante. Quisque velit velit, accumsan nec ex sed, scelerisque congue nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec imperdiet, velit in gravida tristique, sapien dui vehicula tortor, quis scelerisque nibh velit vel leo. Fusce accumsan iaculis purus, ac ultrices quam pellentesque in. Praesent eu leo id magna rhoncus auctor. Nunc arcu nisi, rutrum id leo nec, consectetur suscipit enim. Fusce ut dolor rutrum, porttitor quam pharetra, congue ante. Phasellus maximus turpis eu nulla hendrerit ornare. In ac congue lectus. "
        },
        {
            user:"wildnesspress",
            likes:"14",
            body:"Pellentesque ultricies eu libero nec tincidunt. Nam scelerisque porttitor neque, elementum interdum enim semper ut. Nullam imperdiet nunc id massa finibus, mattis egestas tellus efficitur. Mauris ex nulla, auctor at porta quis, laoreet sit amet sapien. Fusce in diam volutpat, pretium lacus vel, cursus ante. Donec et maximus purus. Donec vel metus sed dui commodo malesuada in at erat. Aliquam rutrum gravida tortor, quis rhoncus tortor varius at. Morbi justo velit, consectetur aliquam pulvinar nec, tempus at urna. In facilisis libero molestie mi egestas fringilla. Morbi vitae faucibus eros. Aenean congue sit amet nisl ac finibus. Vestibulum id ante venenatis arcu vulputate elementum. Ut vel dapibus tortor. Quisque sagittis placerat neque eget ornare. Praesent tincidunt, purus in aliquam hendrerit, lorem mi gravida velit, ac euismod orci velit sed dui. "
        },
        {
            user:"tangiblefear",
            likes:"10",
            body:"Aliquam non pretium urna. Suspendisse potenti. Fusce sed semper nibh, vel iaculis ipsum. Sed maximus risus ut suscipit finibus. Mauris eu nisi at sem rutrum dignissim ut sed nunc. Aliquam placerat feugiat risus sed pulvinar. Vivamus eget fermentum erat. "
        },
        {
            user:"uriahprince",
            likes:"26",
            body:"Quisque sed felis at ex ullamcorper auctor a eu eros. Integer sit amet lorem ut lectus tempor posuere. Etiam varius metus eget sapien egestas ultricies in vitae est. Nullam sagittis nibh id elit tincidunt, sollicitudin congue odio dictum. Aenean hendrerit metus tellus, a iaculis nibh finibus at. Praesent feugiat sem a maximus accumsan. Sed ac quam dignissim, sagittis massa non, volutpat dolor. Maecenas vel laoreet ligula, ac pretium turpis. "
        },
        {
            user:"nantlledecade",
            likes:"00",
            body:"Aliquam euismod laoreet est, at varius ipsum maximus a. Nunc consectetur pharetra finibus. Aliquam erat volutpat. In vulputate est sem, ut ullamcorper lectus pellentesque et. Fusce mollis diam vel libero venenatis tempor at eget risus. Praesent pharetra nisl elit, id condimentum leo posuere vel. Nullam bibendum, libero malesuada bibendum dapibus, tortor metus maximus libero, vel laoreet felis leo placerat urna. Aenean tempor aliquam nunc sit amet maximus. In quam tortor, sodales auctor orci vitae, cursus condimentum massa. Donec auctor, mauris vel commodo malesuada, tellus tellus vestibulum nulla, sed elementum neque ex eget tortor. Maecenas ac congue nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus auctor id nunc suscipit pellentesque. Nullam elementum eleifend fermentum. "
        },
    ]

    useEffect(() => {
        fetch(`http://localhost:3141/api/posts/${router.query.postId}`).then(res => res.json()).then(post => {
            setPost(post);
        })
    }, [router.query.postId]);
    return (
        <div>
                <div className="float-right w-4/5">
                    {loading ? <>Loading Sidebar...</>
                    : (
                    <>
                        <SideBar user={user} />
                    </>)}
                    {post ? <Question posts={post} /> : <div></div> }
                    <hr/>
                    {commentArray.map(comment => (
                        <Comment comment={comment} />
                    ))}
                </div>
            </div>
    )
}

// export default withRouter(Post)
export default Post2;