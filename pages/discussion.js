import Question from '../components/Discussion/Question.js'
import Comment from '../components/Discussion/Comment.js'

function Discussion() {
    const questionTest = {
        Head: "Q1: Help me Help me Help me Help me Help me Help me Help me",
        Body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies nec ligula at fringilla. Phasellus auctor orci ac lacus venenatis aliquam. Nullam a lacinia ipsum, at finibus enim. In malesuada nec nulla volutpat fringilla. Nullam ultricies risus eu lacus posuere convallis. Mauris id ipsum gravida mauris consequat iaculis non sit amet dolor. Nulla facilisi. Nullam iaculis nibh leo, maximus porttitor erat dapibus nec. Aenean pharetra justo ut libero pellentesque imperdiet. ",
        points: 10
    }

    const commentOne = {
        user: "abassdd",
        message: "Suspendisse lectus magna, ultricies sed iaculis quis, tristique at quam. Nam in ipsum ut urna tincidunt convallis id nec ligula. Integer sit amet nisl eu velit vestibulum sagittis. Quisque in odio sed urna pulvinar viverra. Fusce at auctor leo. Donec felis nibh, tincidunt ac dapibus ac, molestie ut est. Integer lorem massa, iaculis at molestie vestibulum, ullamcorper eget lorem. Donec semper eu urna ac tincidunt. Aenean lobortis semper accumsan. Sed pretium euismod blandit. Integer varius orci ligula, id eleifend enim placerat a. Nam et venenatis arcu. "
    }
    

    const commentArray = [
        {
            user: "userA",
            message: "ihfoai sofos phahu eiha eu hlhjkdfakjlsd fhasjkd fhakjsdfh askjd fhajksdfh ajskd fhasdkljf hasdjklfhasf ihfoai sofos phahu eiha eu hlhjkdfakjlsd fhasjkd fhakjsdfh askjd fhajksdfh ajskd fhasdkljf hasdjklfhasf ihfoai sofos phahu eiha eu hlhjkdfakjlsd fhasjkd fhakjsdfh askjd fhajksdfh ajskd fhasdkljf hasdjklfhasf ihfoai sofos phahu eiha eu hlhjkdfakjlsd fhasjkd fhakjsdfh askjd fhajksdfh ajskd fhasdkljf hasdjklfhasf ihfoai sofos phahu eiha eu hlhjkdfakjlsd fhasjkd fhakjsdfh askjd fhajksdfh ajskd fhasdkljf hasdjklfhasfihfoai sofos phahu eiha eu hlhjkdfakjlsd fhasjkd fhakjsdfh askjd fhajksdfh ajskd fhasdkljf hasdjklfhasf ihfoai sofos phahu eiha eu hlhjkdfakjlsd fhasjkd fhakjsdfh askjd fhajksdfh ajskd fhasdkljf hasdjklfhasf ihfoai sofos phahu eiha eu hlhjkdfakjlsd fhasjkd fhakjsdfh askjd fhajksdfh ajskd fhasdkljf hasdjklfhasf ihfoai sofos phahu eiha eu hlhjkdfakjlsd fhasjkd fhakjsdfh askjd fhajksdfh ajskd fhasdkljf hasdjklfhasf ihfoai sofos phahu eiha eu hlhjkdfakjlsd fhasjkd fhakjsdfh askjd fhajksdfh ajskd fhasdkljf hasdjklfhasf ihfoai sofos phahu eiha eu hlhjkdfakjlsd fhasjkd fhakjsdfh askjd fhajksdfh ajskd fhasdkljf hasdjklfhasf ihfoai sofos phahu eiha eu hlhjkdfakjlsd fhasjkd fhakjsdfh askjd fhajksdfh ajskd fhasdkljf hasdjklfhasf ",
            points: 30
        },
        {
            user: "userA",
            message: "ihfoai sofos phahu eiha eu hlhjkdfakjlsd fhasjkd fhakjsdfh askjd fhajksdfh ajskd fhasdkljf hasdjklfhasf",
            points: 30},
        {
            user: "userA",
            message: "ihfoai sofos phahu eiha eu hlhjkdfakjlsd fhasjkd fhakjsdfh askjd fhajksdfh ajskd fhasdkljf hasdjklfhasf",
            points: 30},
        {
            user: "userA",
            message: "ihfoai sofos phahu eiha eu hlhjkdfakjlsd fhasjkd fhakjsdfh askjd fhajksdfh ajskd fhasdkljf hasdjklfhasf",
            points: 30},
        {
            user: "userA",
            message: "ihfoai sofos phahu eiha eu hlhjkdfakjlsd fhasjkd fhakjsdfh askjd fhajksdfh ajskd fhasdkljf hasdjklfhasf",
            points: 30},
        {
            user: "userA",
            message: "ihfoai sofos phahu eiha eu hlhjkdfakjlsd fhasjkd fhakjsdfh askjd fhajksdfh ajskd fhasdkljf hasdjklfhasf",
            points: 30},
    ];
    
    return(
        <div>
            <Question question={questionTest}/>
            <hr/>
            {commentArray.map(comment => (
                <Comment comment={comment}/>
            ))}
            
        </div>
    )
}

export default Discussion
